"use client";

import { motion } from "framer-motion";
import React from "react";

export function GalaxyEntranceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden"> 
        <motion.div
            initial={{ scale: 0.6, rotate: -45, opacity: 0, filter: "blur(20px)" }}
            animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                filter: "blur(0px)"
            }}
            transition={{ 
                duration: 1.8, 
                ease: [0.22, 1, 0.36, 1], // "Out Quint" feel for premium smoothness
            }}
            style={{ 
                originX: 0.5, 
                originY: 0.5, 
                width: '100%', 
                height: '100%' 
            }}
        >
            {children}
        </motion.div>
    </div>
  );
}
