"use client";

import { motion } from "framer-motion";
import { FaCode, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import LiquidGlassView from "@/components/ui/liquid-glass";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { skills, projects, contactInfo } from "@/data/portfolio";
import DeformingBackground from "@/components/DeformingBackground";
import { ReactiveElement } from "@/components/ui/ReactiveElement";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden">
      <DeformingBackground />
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
            <ReactiveElement strength={25}>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Bernardo Brüggemann
              </h1>
            </ReactiveElement>
            <ReactiveElement strength={10}>
              <p className="text-lg text-gray-300 mb-6">
                Software Engineer Intern
              </p>
            </ReactiveElement>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <ReactiveElement strength={30}>
              <Button size="sm" asChild className="w-full">
                <a href={`mailto:${contactInfo.email}`}>
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </Button>
            </ReactiveElement>
            <div className="flex gap-2">
              <ReactiveElement strength={30} className="flex-1">
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                  >
                    <SiLinkedin className="mr-1" /> LinkedIn
                  </a>
                </Button>
              </ReactiveElement>
              <ReactiveElement strength={30} className="flex-1">
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a href={contactInfo.github} target="_blank">
                    <SiGithub className="mr-1" /> GitHub
                  </a>
                </Button>
              </ReactiveElement>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <LiquidGlassView style={{ padding: "16px", width: "100%" }}>
              <ReactiveElement strength={10}>
                <p className="text-sm text-center">Production Engineering Student | UFSC</p>
              </ReactiveElement>
              <ReactiveElement strength={10}>
                <p className="text-sm text-center">
                  Electronics Technician | IFSC
                </p>
              </ReactiveElement>
            </LiquidGlassView>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <LiquidGlassView style={{ padding: "16px", width: "100%" }}>
              <ReactiveElement strength={15}>
                <h2 className="text-lg font-bold text-center mb-4 flex items-center justify-center gap-2">
                  <FaCode /> Skills
                </h2>
              </ReactiveElement>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <ReactiveElement key={skill.name} strength={20} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex flex-col items-center w-full"
                    >
                      <skill.icon className="text-xl mb-1 text-purple-400" />
                      <span className="text-xs font-medium text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  </ReactiveElement>
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
        <h2 className="text-2xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ReactiveElement key={project.url} strength={10} className="block">
              <motion.div
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
                  <a
                    href={project.url}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Visit Project
                  </a>
                </Button>
              </motion.div>
            </ReactiveElement>
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
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <FaEnvelope className="text-purple-400" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="space-y-3">
            <ReactiveElement strength={30}>
              <Button size="sm" asChild className="w-full">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" /> Send Email
                </a>
              </Button>
            </ReactiveElement>
            <ReactiveElement strength={30}>
              <Button size="sm" variant="outline" asChild className="w-full">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <SiLinkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
            </ReactiveElement>
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
