"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarker,
  FaPhone,
  FaUser,
  FaCodeBranch,
  FaTrophy,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      description: "An interactive web application for exploring queue theory concepts, simulations, and calculations.",
    },
    {
      title: "Instituto Tabuleiro",
      url: "https://institutotabuleiro.vercel.app/",
      description: "Official website for Instituto Tabuleiro, featuring educational programs and resources.",
    },
    {
      title: "Marina Morais Portfolio",
      url: "https://marinamoraisphportifolio.vercel.app/",
      description: "Elegant portfolio website showcasing the work of Marina Morais.",
    },
  ];

  const backgroundIcons = [
    SiTypescript,
    SiJavascript,
    SiDjango,
    SiPython,
    SiNextdotjs,
    SiNestjs,
    SiPandas,
    FaCode,
    FaBriefcase,
    FaGraduationCap,
    FaTrophy,
    FaCodeBranch,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarker,
    SiLinkedin,
    SiGithub,
  ];

  const [iconPositions] = useState(() =>
    backgroundIcons.map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  const [iconDurations] = useState(() =>
    backgroundIcons.map(() => 15 + Math.random() * 10)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements for Responsiveness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
      {/* Floating Background Icons */}
      {backgroundIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 pointer-events-none"
          style={{
            top: `${iconPositions[index].top}%`,
            left: `${iconPositions[index].left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: iconDurations[index],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon className="text-3xl md:text-5xl" />
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen px-4 py-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Bernardo Brüggemann
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Web Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild>
              <a href="mailto:bbbrugg@gmail.com">Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/bernardobruggemann"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/BernardoBrugg" target="_blank">
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <FaCodeBranch /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <iframe
                      src={project.url}
                      className="w-full h-64 md:h-80 mb-4 rounded border border-white/20"
                      title={project.title}
                    />
                    <p className="text-lg font-medium mb-2">{project.title}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <Button asChild>
                      <a href={project.url} target="_blank">
                        Visit
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-2">
                <FaUser /> About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <p>
                From the interior of Santa Catarina to pursuing Engineering at
                UFSC, I tread a path marked by resilience, curiosity, and
                commitment to technological innovation and the real impact of
                the projects I develop.
              </p>
              <p className="mt-4">
                As a Web Developer, I specialize in creating modern web applications using Next.js, Nest.js, and other cutting-edge technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <FaCode /> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <skill.icon className="text-4xl mb-2 text-purple-400" />
                <span className="text-lg font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
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
    </div>
  );
}
