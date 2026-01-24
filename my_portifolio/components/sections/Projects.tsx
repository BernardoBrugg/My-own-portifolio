"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ReactiveElement } from "@/components/ui/ReactiveElement";

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-0 relative z-10"
    >
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ReactiveElement key={project.url} strength={20}>
            <motion.div
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
          </ReactiveElement>
        ))}
      </div>
    </motion.section>
  );
}
