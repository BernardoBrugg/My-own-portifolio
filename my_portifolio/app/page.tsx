"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Script from "next/script";
import { FaCode, FaEnvelope, FaPhone, FaCodeBranch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import LiquidGlassView from "@/components/ui/liquid-glass";
import {
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiPython,
  SiNextdotjs,
  SiNestjs,
  SiPandas,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

export default function Home() {
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const skills = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Django", icon: SiDjango },
    { name: "Python", icon: SiPython },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "NestJS", icon: SiNestjs },
    { name: "Pandas", icon: SiPandas },
  ];
  const projects = [
    {
      title: "Queue Theory",
      url: "https://queuetheory.vercel.app/",
      description:
        "An interactive web application for exploring queue theory concepts, simulations, and calculations.",
    },
    {
      title: "Instituto Tabuleiro",
      url: "https://institutotabuleiro.vercel.app/",
      description:
        "Official website for Instituto Tabuleiro, featuring educational programs and resources.",
    },
    {
      title: "Marina Morais Portfolio",
      url: "https://marinamoraisphportifolio.vercel.app/",
      description:
        "Elegant portfolio website showcasing the work of Marina Morais.",
    },
  ];

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/derKFBn6Xh71KD1J/scene.splinecode"></spline-viewer>',
            }}
          />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-white/5 backdrop-blur-sm relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col justify-center items-center md:items-start text-center md:text-left relative z-100"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent pb-2"
                style={{ lineHeight: '1.3' }}
              >
                Bernardo Brüggemann
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white mb-8"
              >
                Software Engineer Intern
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col justify-center space-y-6 items-center text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Button asChild>
                  <a href="mailto:bbbrugg@gmail.com">
                    <FaEnvelope className="text-lg md:text-xl inline mr-2" />{" "}
                    Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com/in/bernardobruggemann"
                    target="_blank"
                  >
                    <SiLinkedin className="text-lg md:text-xl inline mr-2" />{" "}
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/BernardoBrugg" target="_blank">
                    <SiGithub className="text-lg md:text-xl inline mr-2" />{" "}
                    GitHub
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <LiquidGlassView style={{ padding: "30px", width: "100%" }}>
                  <p>Production Engineer | UFSC</p>
                  <p> Eletronics Technician | IFSC</p>
                </LiquidGlassView>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <LiquidGlassView style={{ padding: "30px", width: "100%" }}>
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
                      <FaCode /> Skills
                    </h2>
                    <div className="flex flex-col items-center gap-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.slice(0, 4).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center"
                          >
                            <skill.icon className="text-4xl mb-2 text-purple-400" />
                            <span className="text-lg font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {skills.slice(4, 7).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center"
                          >
                            <skill.icon className="text-4xl mb-2 text-purple-400" />
                            <span className="text-lg font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </LiquidGlassView>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-center"
              ></motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-10"
          >
            <Button
              onClick={() => {
                setCurrentProjectIndex(0);
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => setShowNextButton(true), 300);
              }}
            >
              <FaCodeBranch className="text-lg md:text-xl inline mr-2" /> See
              Projects in Development
            </Button>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-0 relative z-10"
        >
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <motion.div
                key={project.url}
                id={`project-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative w-full h-screen"
              >
                <iframe
                  src={project.url}
                  className="w-full h-full"
                  title={project.title}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm">
                  <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-8 text-center max-w-2xl">
                    {project.description}
                  </p>
                  <Button asChild>
                    <a href={project.url} target="_blank">
                      Visit Project
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-white/5 backdrop-blur-sm relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
              <FaEnvelope /> Contact
            </h2>
            <div className="space-y-4">
              <p className="text-lg flex items-center justify-center gap-2">
                <FaPhone /> Phone: 48 991063196
              </p>
              <p className="text-lg flex items-center justify-center gap-2">
                <FaEnvelope /> Email: bbbrugg@gmail.com
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Button asChild>
                  <a href="mailto:bbbrugg@gmail.com">
                    <FaEnvelope className="inline mr-2" /> Send Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com/in/bernardobruggemann"
                    target="_blank"
                  >
                    <SiLinkedin className="inline mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-4 bg-white/5 backdrop-blur-sm text-center relative z-10"
        >
          <p>Developed by Bernardo Brüggemann | Engineering Student</p>
        </motion.section>

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
    </>
  );
}
