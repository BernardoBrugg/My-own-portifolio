"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-10 px-4 text-center relative z-10"
    >
      <p>Developed by Bernardo Brüggemann | Engineering Student</p>
    </motion.section>
  );
}
