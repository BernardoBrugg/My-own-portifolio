"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/portfolio";

export default function Home() {
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">    
          <Hero 
            onSeeProjects={() => {
              setCurrentProjectIndex(0);
              const element = document.getElementById("projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setShowNextButton(true), 300);
            }} 
          />

          <Projects />

          <Contact />

          <Footer />

        {showNextButton && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Button
              onClick={() => {
                if (currentProjectIndex === projects.length - 1) {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                  setShowNextButton(false);
                } else {
                  const nextIndex = (currentProjectIndex + 1) % projects.length;
                  setCurrentProjectIndex(nextIndex);
                  const element = document.getElementById(
                    `project-${nextIndex}`
                  );
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {currentProjectIndex === projects.length - 1
                ? "Show Contact Information"
                : "Next Project"}
            </Button>
          </motion.div>
        )}
      </div>
  );
}
