"use client";

import React, { useRef,  useState, useEffect, useMemo } from "react";
import { motion, useSpring } from "framer-motion";
import { useMouse } from "@/components/providers/MouseProvider";

interface ReactiveElementProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  as?: React.ElementType;
}

export const ReactiveElement = ({
  children,
  strength = 15,
  className = "",
  as: Component = "div",
}: ReactiveElementProps) => {
  const { x, y } = useMouse();
  const ref = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
    }
    const handleResize = () => {
        if(ref.current) setRect(ref.current.getBoundingClientRect());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const springConfig = { stiffness: 150, damping: 15 };
  const dX = useSpring(0, springConfig);
  const dY = useSpring(0, springConfig);

  useEffect(() => {
     const update = () => {
         if (!rect) return;
         const mx = x.get();
         const my = y.get();
         
         const centerX = rect.left + rect.width / 2;
         const centerY = rect.top + rect.height / 2;
         
         const distX = mx - centerX;
         const distY = my - centerY;
         const dist = Math.sqrt(distX * distX + distY * distY);
         
         const radius = 300;
         
         if (dist < radius) {
             const force = (radius - dist) / radius;
             const push = force * strength; 
             
             dX.set( (distX / dist) * push );
             dY.set( (distY / dist) * push );
         } else {
             dX.set(0);
             dY.set(0);
         }
     };

     const unsubscribeX = x.on("change", update);
     const unsubscribeY = y.on("change", update);
     
     return () => {
         unsubscribeX();
         unsubscribeY();
     }
  }, [rect, strength, x, y, dX, dY]);


  const MotionComponent = useMemo(() => motion(Component), [Component]);

  return (
    // eslint-disable-next-line
    <MotionComponent
      ref={ref}
      className={className}
      style={{ x: dX, y: dY }}
    >
      {children}
    </MotionComponent>
  );
};
