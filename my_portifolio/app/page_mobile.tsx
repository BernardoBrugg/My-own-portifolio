"use client";

import { motion } from "framer-motion";
import { FaCode, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";
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
      description: "Interactive web app for exploring queue theory concepts and simulations.",
    },
    {
      title: "Instituto Tabuleiro",
      url: "https://institutotabuleiro.vercel.app/",
      description: "Official website featuring educational programs and resources.",
    },
    {
      title: "Marina Morais Portfolio",
      url: "https://marinamoraisphportifolio.vercel.app/",
      description: "Elegant portfolio website showcasing Marina Morais' work.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-black/20 backdrop-blur-sm relative z-10"
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Bernardo Brüggemann
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Software Engineer Intern
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <Button size="sm" asChild className="w-full">
              <a href="mailto:bbbrugg@gmail.com">
                <FaEnvelope className="mr-2" /> Email
              </a>
            </Button>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" asChild className="flex-1">
                <a href="https://linkedin.com/in/bernardobruggemann" target="_blank">
                  <SiLinkedin className="mr-1" /> LinkedIn
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="flex-1">
                <a href="https://github.com/BernardoBrugg" target="_blank">
                  <SiGithub className="mr-1" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <LiquidGlassView style={{ padding: "16px", width: "100%" }}>
              <p className="text-sm text-center">Production Engineer | UFSC</p>
              <p className="text-sm text-center">Electronics Technician | IFSC</p>
            </LiquidGlassView>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <LiquidGlassView style={{ padding: "16px", width: "100%" }}>
              <h2 className="text-lg font-bold text-center mb-4 flex items-center justify-center gap-2">
                <FaCode /> Skills
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <skill.icon className="text-xl mb-1 text-purple-400" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </LiquidGlassView>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 py-12 relative z-10"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden border border-white/10">
                <iframe
                  src={project.url}
                  className="w-full h-full"
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <Button size="sm" asChild className="w-full">
                <a href={project.url} target="_blank" className="flex items-center justify-center">
                  <FaExternalLinkAlt className="mr-2" /> Visit Project
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 py-12 bg-white/5 backdrop-blur-sm relative z-10"
      >
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
            <FaEnvelope /> Contact
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-sm">
              <FaPhone className="text-purple-400" />
              <span>48 991063196</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <FaEnvelope className="text-purple-400" />
              <span>bbbrugg@gmail.com</span>
            </div>
          </div>
          <div className="space-y-3">
            <Button size="sm" asChild className="w-full">
              <a href="mailto:bbbrugg@gmail.com" className="flex items-center justify-center">
                <FaEnvelope className="mr-2" /> Send Email
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild className="w-full">
              <a href="https://linkedin.com/in/bernardobruggemann" target="_blank" className="flex items-center justify-center">
                <SiLinkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-6 px-6 bg-black/20 backdrop-blur-sm text-center relative z-10"
      >
        <p className="text-xs text-gray-400">
          Developed by Bernardo Brüggemann | Engineering Student
        </p>
      </motion.footer>
    </div>
  );
}
