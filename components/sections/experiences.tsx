"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GitlabIcon as GitHub, Linkedin, Mail, Calendar, X } from 'lucide-react'
import Image from "next/image"


// Define the type for an experience
type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  // companyLogo: string;
  color: string;
};


const experiences = [
  {
    role: "Software Engineer 1 ",
    company: "Control F",
    duration: "OCT 2023 - Present",
    description: "Enabled efficient tracking and management of client tax information , ensuring compliance with regulatory requirements.Ensuring robust and efficient performance, seamless data management and integration with focus on efficient task management and scheduling. ",
    technologies: ["Python","React","Django","AWS","UI/UX","Gitlab","Postman"],
    // companyLogo: "/placeholder.svg?height=48&width=48",
    color: "from-blue-400 to-blue-600",
  },
  {
    role: "Data Analyst",
    company: "Freelance(GCMR Assoc)",
    duration: "Dec 2022 - July 2023",
    description: "https://tinyurl.com/1clinic| 1.Developed a comprehensive Clinic Management System and Record Management System.2.Leveraging AI to optimise learning efficiency by 72% enabling seamless integration and UI optimisation ",
    technologies: ["Python","JS","UI/UX Design","React","Node","Neural Networks","AWS","Debugging"],
    // companyLogo: "/placeholder.svg?height=48&width=48",
    color: "from-purple-400 to-purple-600",
  },
  {
    role: "ML Engineer Trainee",
    company: "AI Educator",
    duration: "May 2023",
    description: "Worked on auto-score feature model which impacted the accuracy and precision metrics to 96 which enabled more accurate data analysis of student scripts.",
    technologies: ["Neural Networks", "Machine Learning","AWS", "ANN", "CNN","Data Analysis"],
    // companyLogo: "/placeholder.svg?height=48&width=48",
    color: "from-green-400 to-green-600",
  },
  // {
  //   role: "Teaching Assistant",
  //   company: "Ace Academy",
  //   duration: "Nov 2023 - Feb 2024",
  //   description: "Helped 8 fellow peers in GATE CS & GATE Data Science 2024 and achieved 952 rank(GATE DA) & 1387 rank(GATE CS). ",
  //   technologies: [],
  //   companyLogo: "",
  //   color: "from-red-400 to-red-600",
  // },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    (<section id="experiences" className="py-16 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 mx-auto py-16 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* ------------------------------------
          <motion.div
            variants={cardVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Work Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of my recent professional roles where I have grown my skills and worked on exciting projects.
            </p>
          </motion.div>
----------------------------------- */}

<div className="text-center mb-8">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-5xl font-bold mb-6 text-primary"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Recent professional roles where I have grown my skills and worked on many exciting projects.
          </motion.p>
          {/* <Button 
            onClick={() => setShowLevel(!showLevel)} 
            className="mb-8 transition-colors duration-300 hover:bg-purple-600"
          >
            {showLevel ? "Hide Levels" : "Show Levels"}
          </Button> */}
        </div>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {experiences.map((experience,index) => (
              <motion.div
                key={experience.company}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className="w-full max-w-sm"
              >
                <Card 
                  className={`p-6 bg-gradient-to-br ${experience.color} shadow-xl rounded-lg h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  onClick={() => setSelectedExperience(experience)}
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden bg-white p-1">
                        {/* <Image
                          src={experience.companyLogo}
                          alt={experience.company}
                          fill
                          sizes="100vw"
                          style={{
                            objectFit: "cover"
                          }} /> */}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                        <p className="text-sm text-gray-200">{experience.company}</p>
                        <p className="text-sm text-gray-200">{experience.duration}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-100 mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Button variant="secondary" className="flex-1 bg-white text-gray-800 hover:bg-gray-200">
                      <Calendar className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="icon" className="text-white hover:bg-white hover:text-gray-800">
                      <GitHub className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-white hover:bg-white hover:text-gray-800">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-white hover:bg-white hover:text-gray-800">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-gradient-to-br ${selectedExperience.color} p-8 rounded-lg shadow-2xl max-w-2xl w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedExperience.role}</h2>
                  <p className="text-xl text-gray-200">{selectedExperience.company}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white hover:bg-white hover:text-gray-800"
                  onClick={() => setSelectedExperience(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-gray-100 mb-4">{selectedExperience.description}</p>
              <p className="text-gray-200 mb-4">{selectedExperience.duration}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-200">
                  <GitHub className="mr-2 h-5 w-5" />
                  View Project
                </Button>
                <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-200">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>)
  );
}
