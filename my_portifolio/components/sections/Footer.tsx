"use client";

import { motion } from "framer-motion";
import { ReactiveElement } from "@/components/ui/ReactiveElement";

export function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-10 px-4 text-center relative z-10"
    >
      <ReactiveElement strength={5}>
        <p>Developed by Bernardo Brüggemann | Engineering Student</p>
      </ReactiveElement>
    </motion.section>
  );
}
