"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useMotionValue, MotionValue } from "framer-motion";

interface MouseContextType {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const MouseContext = createContext<MouseContextType | null>(null);

export const useMouse = () => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error("useMouse must be used within a MouseProvider");
  }
  return context;
};

export const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <MouseContext.Provider value={{ x, y }}>
      {children}
    </MouseContext.Provider>
  );
};
