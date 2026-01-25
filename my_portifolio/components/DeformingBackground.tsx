"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const DeformingPlane = () => {
    const mesh = useRef<THREE.Mesh>(null);
    const material = useRef<THREE.ShaderMaterial>(null);
    const { viewport } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uResolution: { value: new THREE.Vector2(1, 1) },
        }),
        []
    );

    const mouse = useRef(new THREE.Vector2(0, 0));

    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleResize = () => {
             if (material.current) {
                material.current.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
             }
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        
        // Initial set
        handleResize();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useFrame((state) => {
        const { clock } = state;
        if (material.current) {
            material.current.uniforms.uTime.value = clock.getElapsedTime();
            material.current.uniforms.uMouse.value.lerp(mouse.current, 0.2);
        }
    });

    const vertexShader = `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
            vUv = uv;
            vec3 pos = position;
            float dist = distance(uv * 2.0 - 1.0, uMouse);            
            float influence = smoothstep(0.6, 0.0, dist);
            float wave = (sin(pos.x * 5.0 + uTime) + 1.0) * 0.1 + (sin(pos.y * 5.0 + uTime) + 1.0) * 0.1;
            pos.z += influence * 1.0; 
            pos.z += wave * 0.5;
            vElevation = pos.z;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        varying float vElevation;

        void main() {
            float alpha = 0.2 + vElevation * 0.5;
            vec3 color = vec3(0.5, 0.2, 0.9) + vElevation * 0.2;
            gl_FragColor = vec4(color, alpha * 0.2);
        }
    `;

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[viewport.width * 1.2, viewport.height * 1.2, 64, 64]} />
            <shaderMaterial
                ref={material}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                wireframe={true}
            />
        </mesh>
    );
};

export default function DeformingBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
                <DeformingPlane />
            </Canvas>
        </div>
    );
}
