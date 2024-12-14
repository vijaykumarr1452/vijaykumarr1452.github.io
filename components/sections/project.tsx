"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from "next/image"

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Clinic Management System 🌐",
    description: "An application designed to ease the process of streamlining and managing clinic operations,data efficiently.",
    image: "https://tinyurl.com/dshgkktuy",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    details: "The Clinic Management System (CMS) is a full-stack web application designed to streamline clinic operations. It is built with features such as 'Patient History Management', 'Appointment Scheduling', 'Staff Management' and 'accessing Patient Medical Records' inturn eases these workflows for efficient Clinic Management.These services are currently being employed at Global Health Services Pvt Ltd.",
    technologies: ["Angular", "Node.js", "Python", "MySQL", "OpenCV","PostgreSQL","AWS"],
    github: "https://github.com/vijaykumarr1452/Clinic-Management-System",
    live: "https://www.myecho.co.in/"
  },
  {
    id: 2,
    title: "Developer Portflio",
    description: "An interactive, and animation-rich developer portfolio built with the latest technologies: Next.js, Tailwind CSS, Framer Motion, ShadCN UI, and TypeScript.",
    image: "https://tinyurl.com/vjweb",
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    details: "An interactive",
    technologies: ["Unity", "C#", "Oculus SDK", "Firebase"],
    github: "https://github.com/vijaykumarr1452/vijaykumarr1452.github.io",
    live: "https://vijaykumarr1452.github.io"
  },
  {
    id: 3,
    title: "Cric Score Predictor",
    description: "This project leverages machine learning algorithms to predict the scores of cricket matches based on historical data and real-time match parameters.",
    image: "https://tinyurl.com/vjproj2",
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    details: "For this project, I developed a predictive model to estimate the score range of IPL matches using various machine learning algorithms. I optimized models including Multiple-Linear Regression, Decision Tree, Random Forest, and AdaBoost Regression through GridSearchCV to fine-tune hyperparameters for enhanced accuracy.",
    technologies: ["Machine Learning","Python","Random Forest","Decision Tree", "ML Regression", "HTML", "CSS","JS"],
    github: "https://github.com/vijaykumarr1452/IPL-First-Innings-Score-Prediction",
    live: "https://github.com/vijaykumarr1452/IPL-First-Innings-Score-Prediction-Deployment"
  }
];

export function ProjectSection() {
  // Define selectedProject state to accept Project type or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-background animate-pulse" />
        </div>

        <div className="py-24 container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Dive into a curated showcase of impactful projects,demonstrating my proficiency in modern development tools and innovative solutions
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:animate-shake hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                > <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.textColor} hover:underline`}
              >
                {project.title}
              </a>
                  {/* {project.title} */}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  className="mt-4"
                >
                  <Button 
                    size="lg" 
                    className={`group bg-white/20 hover:bg-white/30 ${project.textColor}`}
                    onClick={() => setSelectedProject(project)} // now works fine
                  >
                    View Details
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <div> <a href="https://github.com/vijaykumarr1452/" target="_blank" rel="noopener noreferrer">
      <Button variant='outline'
        className="mt-10 mx-auto border-primary font-bold text-primary flex items-center hover:bg-primary hover:text-primary-foreground px-5 py-4 border rounded"
        style={{ borderWidth: "1px" }}
      >
        Show More
      </Button>
    </a></div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{selectedProject.details}</p>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-gray-800 text-white hover:bg-gray-700">
                        <FaGithub className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-blue-600 text-white hover:bg-blue-500">
                        <FaExternalLinkAlt className="mr-2" />
                        Live 
                      </Button>
                    </a>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      <section id="proj"className="mx-auto py-40 items-center justify-center">
      <div className="font-bold text-primary text-center ">  <h1 className="mx-auto text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Have A Project In Your Mind ?</h1><br />
    <a href="https://github.com/vijaykumarr1452/"><Button variant={"ghost"} className="mx-auto w-30 h-30 text-2xl group bg-blue-600 text-white hover:bg-blue-500 hover:bg-primary hover:text-primary-foreground px-5 py-4 border-rounded"> Project portfolio</Button></a><br/><br />
    <a href="#contact" ><Button variant={"outline"} className="mx-auto w-30 h-30 text-2xl group bg-blue-600 text-white hover:bg-blue-500 hover:bg-primary hover:text-primary-foreground px-5 py-4 border-rounded"> Hire Me!</Button></a></div>
  
    </section>

    </section>
  )
}
