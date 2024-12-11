"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// Define the model type for an educatrion
type Education = {
    educlass: string;
    school: string;
    duration: string;
    grades: string;
    schoolLogo: string;
    color: string;
  };

  const educations = [
    {
      educlass: "B.Tech Graduate",
      school: "JNTU Hyderabad",
      duration: "Aug 2018 - July 2023",
      grades: "8.5/10.0",
      color: "from-green-400 to-green-600",
    },
    {
      educlass: "Senior Secondary",
      school: "Sri Sanjeevni Jr College",
      duration: "July 2016 - Apr 2018",
      grades: "95 % ",
      color: "from-orange-400 to-orange-600",
    },
    {
      educlass: "Secondary",
      school: "Narayana High School",
      duration: "Mar 2016",
      grades: "98 %",
      color: "from-blue-400 to-blue-600",
    },
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




export function EducationSection(){
  return(
    (
      <section id="educations" className="py-16 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
        <div className="container px-4 mx-auto py-16 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={cardVariants}
              className="text-center mb-12"
            >

<div className="text-center mb-8">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-5xl font-bold mb-6 text-primary"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            My journey in tech started with a fascination for problem-solving and has evolved into a career dedicated to crafting intuitive digital solutions.
          </motion.p>
          {/* <Button 
            onClick={() => setShowLevel(!showLevel)} 
            className="mb-8 transition-colors duration-300 hover:bg-purple-600"
          >
            {showLevel ? "Hide Levels" : "Show Levels"}
          </Button> */}
        </div>

              
            </motion.div>
            <div className="py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
              {educations.map((education,index) => (
              <motion.div
                key={education.educlass}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className="w-full max-w-sm"
              >
                <Card 
                  className={`p-6 bg-gradient-to-br ${education.color} shadow-xl rounded-lg h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  // onClick={() => setSelectedEducation(education)}
                >
                  <div>
                    {/* <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden bg-white p-1">
                        <Image
                          src={experience.companyLogo}
                          alt={experience.company}
                          fill
                          sizes="100vw"
                          style={{
                            objectFit: "cover"
                          }} />
                      </div>
                      <div> */}
                        <h2 className="text-3xl font-bold text-gray-900 py-2 ">{education.educlass}</h2>
                        <h3 className="text-xl font-semibold text-gray-700">{education.school}</h3>
                        <p className="text-sm text-gray-50 py-1.2">{education.grades}</p>
                        <p className="text-sm text-gray-250">{education.duration}</p>
                      </div>
                      </Card>
                      </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
                    ))

                    
                 













  
}



  
