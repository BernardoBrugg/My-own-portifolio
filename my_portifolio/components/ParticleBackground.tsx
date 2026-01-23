"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = () => {
  const count = 5000;
  const mesh = useRef<THREE.Points>(null);
  const shaderMaterial = useRef<THREE.ShaderMaterial>(null);

  const particles = useMemo(() => {
    const hash = (n: number) => {
        const x = Math.sin(n) * 10000;
        return x - Math.floor(x);
    };

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (hash(i * 3) - 0.5) * 20;
      positions[i * 3 + 1] = (hash(i * 3 + 1) - 0.5) * 12;
      positions[i * 3 + 2] = (hash(i * 3 + 2) - 0.5) * 10;
      const color = new THREE.Color();
      if (hash(i) > 0.5) {
          color.setHSL(0.6, 0.8, 0.6);
      } else {
          color.setHSL(0.8, 0.8, 0.6);
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );
  
  const mouse = useRef(new THREE.Vector2(0, 0));
  
  React.useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
          
          mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (shaderMaterial.current) {
        shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
        // Smoothly interpolate mouse uniform
        shaderMaterial.current.uniforms.uMouse.value.lerp(mouse.current, 0.1);
    }
  });

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    attribute vec3 color;
    varying vec3 vColor;

    void main() {
      vColor = color;
      vec3 pos = position;

      // Calculate distance to mouse (mapped to world space approx)
      // Assuming camera z is at 5, and FOV allows for view width of ~10 at z=0
      // We need to project mouse world coordinates roughly.
      
      // Simple wave effect
      pos.z += sin(pos.x * 2.0 + uTime) * 0.2;
      pos.y += cos(pos.y * 2.0 + uTime) * 0.2;

      // Mouse interaction
      // This is a simplified projection, for exact world mouse we need raycaster
      // but for background effect, raw uniform 2d vector is okayish if scaled
      
      float dist = distance(pos.xy, uMouse * 10.0); // Scale mouse to match world units approx
      float influence = smoothstep(3.0, 0.0, dist);
      
      // Push particles away or pull them
      vec3 dir = normalize(vec3(pos.x - uMouse.x * 10.0, pos.y - uMouse.y * 10.0, 0.0));
      
      // Deform
      pos += dir * influence * 1.5;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = 4.0 * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying vec3 vColor;

    void main() {
      // Circle shape
      float r = distance(gl_PointCoord, vec2(0.5));
      if (r > 0.5) discard;
      
      // Soft edge
      float alpha = 1.0 - smoothstep(0.4, 0.5, r);
      
      gl_FragColor = vec4(vColor, alpha);
    }
  `;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={shaderMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
