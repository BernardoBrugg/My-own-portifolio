"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { contactInfo } from "@/data/portfolio";
import { ReactiveElement } from "@/components/ui/ReactiveElement";
import LiquidGlassView from "@/components/ui/liquid-glass";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-20 relative z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
        <ReactiveElement strength={12}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full"
            >
              <LiquidGlassView style={{ padding: "40px", width: "100%" }}>
                <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-center text-white">
                  <FaEnvelope /> Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center">
                    <ReactiveElement strength={10}>
                        <p className="text-lg flex items-center justify-center gap-3 text-white">
                        <FaPhone className="text-purple-400" /> {contactInfo.phone}
                        </p>
                    </ReactiveElement>
                    <ReactiveElement strength={10}>
                        <p className="text-lg flex items-center justify-center gap-3 text-white">
                        <FaEnvelope className="text-purple-400" /> {contactInfo.email}
                        </p>
                    </ReactiveElement>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full max-w-md mx-auto">
                    <ReactiveElement strength={15} className="w-full">
                      <Button asChild className="w-full">
                        <a href={`mailto:${contactInfo.email}`}>
                          <FaEnvelope className="inline mr-2" /> Send Email
                        </a>
                      </Button>
                    </ReactiveElement>
                    <ReactiveElement strength={15} className="w-full">
                      <Button variant="outline" asChild className="w-full">
                        <a
                          href={contactInfo.linkedin}
                          target="_blank"
                        >
                          <SiLinkedin className="inline mr-2" /> LinkedIn
                        </a>
                      </Button>
                    </ReactiveElement>
                  </div>
                </div>
              </LiquidGlassView>
            </motion.div>
        </ReactiveElement>
      </div>
    </motion.section>
  );
}
