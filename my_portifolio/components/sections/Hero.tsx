"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LiquidGlassView from "@/components/ui/liquid-glass";
import { FaCode, FaEnvelope, FaCodeBranch } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { skills, contactInfo } from "@/data/portfolio";
import { ReactiveElement } from "@/components/ui/ReactiveElement";

interface HeroProps {
  onSeeProjects: () => void;
}

export function Hero({ onSeeProjects }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left relative z-100"
        >
          <ReactiveElement strength={25} className="mb-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent pb-2"
              style={{ lineHeight: '1.3' }}
            >
              Bernardo Brüggemann
            </motion.h1>
          </ReactiveElement>
          <ReactiveElement strength={15}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-white mb-8"
            >
              Software Engineer Intern
            </motion.p>
          </ReactiveElement>
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
            <ReactiveElement strength={10} className="inline-block">
              <Button asChild>
                <a href={`mailto:${contactInfo.email}`}>
                  <FaEnvelope className="text-lg md:text-xl inline mr-2" />{" "}
                  Email
                </a>
              </Button>
            </ReactiveElement>
            <ReactiveElement strength={10} className="inline-block">
              <Button variant="outline" asChild>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                >
                  <SiLinkedin className="text-lg md:text-xl inline mr-2" />{" "}
                  LinkedIn
                </a>
              </Button>
            </ReactiveElement>
            <ReactiveElement strength={10} className="inline-block">
              <Button variant="outline" asChild>
                <a href={contactInfo.github} target="_blank">
                  <SiGithub className="text-lg md:text-xl inline mr-2" />{" "}
                  GitHub
                </a>
              </Button>
            </ReactiveElement>
          </motion.div>

          <ReactiveElement strength={12}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <LiquidGlassView style={{ padding: "30px", width: "100%" }}>
                <p>Production Engineering Student | UFSC</p>
                <p>Electronics Technician | IFSC</p>
              </LiquidGlassView>
            </motion.div>
          </ReactiveElement>

          <ReactiveElement strength={12}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
          </ReactiveElement>

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
          onClick={onSeeProjects}
        >
          <FaCodeBranch className="text-lg md:text-xl inline mr-2" /> 
          Check Out Projects in Development
        </Button>
      </motion.div>
    </motion.section>
  );
}
