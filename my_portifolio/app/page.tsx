"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { SiLinkedin, SiGithub } from "react-icons/si";
import {
  FaCode,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCodeBranch,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/derKFBn6Xh71KD1J/scene.splinecode"></spline-viewer>',
            }}
          />
        </div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-white/5 backdrop-blur-sm relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {/* Left Side: Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col justify-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <a href="mailto:bbbrugg@gmail.com">
                    <FaEnvelope className="text-lg md:text-xl inline mr-2" />{" "}
                    Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/bernardobruggemann"
                    target="_blank"
                  >
                    <SiLinkedin className="text-lg md:text-xl inline mr-2" />{" "}
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white"
                  asChild
                >
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
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
                      <FaUser className="text-xl md:text-2xl" /> About Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-base md:text-lg leading-relaxed">
                    <p>
                      From the interior of Santa Catarina to pursuing
                      Engineering at UFSC, I tread a path marked by resilience,
                      curiosity, and commitment to technological innovation and
                      the real impact of the projects I develop.
                    </p>
                    <p className="mt-4">
                      As a Web Developer, I specialize in creating modern web
                      applications using Next.js, Nest.js, and other
                      cutting-edge technologies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
                      <FaCode className="text-xl md:text-2xl" /> Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-base md:text-lg">
                      Skills: TypeScript, JavaScript, Django, Python, Next.js,
                      NestJS, Pandas
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-center"
              >
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <FaCodeBranch className="text-lg md:text-xl inline mr-2" />{" "}
                  View My Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side: Name and Title */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col justify-center items-center md:items-end text-center md:text-right"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-purple-300"
              >
                Bernardo Brüggemann
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8"
              >
                Software Engineer Intern
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
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

        {/* Contact Section */}
        <motion.section
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

        {/* Footer */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-4 bg-white/5 backdrop-blur-sm text-center relative z-10"
        >
          <p>Instituto Tabuleiro © 2025 - Todos os direitos reservados</p>
          <p>
            Organização não governamental dedicada à preservação do Parque
            Estadual da Serra do Tabuleiro
          </p>
          <p>Gostou do site? Deixe seu feedback: devbebrugg@gmail.com</p>
          <p>Developed by Bernardo Brüggemann | Engineering Student</p>
        </motion.section>
      </div>
    </>
  );
}
