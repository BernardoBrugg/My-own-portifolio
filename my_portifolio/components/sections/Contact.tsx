"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { contactInfo } from "@/data/portfolio";
import { ReactiveElement } from "@/components/ui/ReactiveElement";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
          <FaEnvelope /> Contact
        </h2>
        <div className="space-y-4">
          <ReactiveElement strength={10}>
            <p className="text-lg flex items-center justify-center gap-2">
              <FaPhone /> Phone: {contactInfo.phone}
            </p>
          </ReactiveElement>
          <ReactiveElement strength={10}>
            <p className="text-lg flex items-center justify-center gap-2">
              <FaEnvelope /> Email: {contactInfo.email}
            </p>
          </ReactiveElement>
          <div className="flex justify-center gap-4 mt-8">
            <ReactiveElement strength={15}>
              <Button asChild>
                <a href={`mailto:${contactInfo.email}`}>
                  <FaEnvelope className="inline mr-2" /> Send Email
                </a>
              </Button>
            </ReactiveElement>
            <ReactiveElement strength={15}>
              <Button variant="outline" asChild>
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
      </div>
    </motion.section>
  );
}
