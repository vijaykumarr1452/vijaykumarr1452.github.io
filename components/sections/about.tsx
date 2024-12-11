"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from "next/image"

const skills = [
  "React/Next.js",
  "Java",
  "Python",
  "SQL",
  "AWS",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "UI/UX Design",
]

const interests = [
  { icon: "🚀", label: "Astronomy" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📚", label: "Reading" },
  { icon: "🎨", label: "Cooking" },
]
 
const floatingAnimation = {
  y: ["-17%", "17%"],
  transition: {
    y: {
      duration: 1.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [showBio, setShowBio] = useState(false)

  return (
    (<section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://tinyurl.com/vjimage"
                alt="Profile"
                fill
                className="object-cover"
                priority
                style={{
                  maxWidth: "100%",
                  // height: "auto"
                }} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full"
              animate={floatingAnimation}
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</h2>
              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-muted-foreground"
                  >
                   Hi,I’m <b>Vijay!</b> A software developer with a knack for solving problems and turning ideas into scalable solutions bringing ideas to life through clean code and thoughtful design. <br /> <br />
                   
                   With around 20 months of experience as a full-stack developer in a startup,I’ve worked on building robust <a href="https://samai.ai/"
      style={{ color: "blue", textDecoration: "underline" }}
    >FinTech SAAS</a> using Django, React.js, Java, Python and AWS. <br /> <br />
                   
                   I’m passionate about continuous learning,which is why I’m always diving into new technologies <a
      href="https://github.com/vijaykumarr1452/"
      style={{ color: "blue", textDecoration: "underline" }}
    >ML & AI</a> published a <a href="https://sdbindex.com/Documents/index/00000697/00001-88443"  style={{ color: "blue", textDecoration: "underline" }}>Research Paper</a> and constantly refining my skills. <br /> <br />
                   
                   When I’m not coding, you’ll find me exploring startup culture, Planets & Astronomy and working on 
                   <a
      href="https://github.com/vijaykumarr1452/"
      style={{ color: "blue", textDecoration: "underline" }}
    > Side Projects</a>. 
                   
                   <br /> My <b>Goal</b>? To craft impactful software and grow alongside a dynamic team!.Let’s build something awesome together!
                    
                    
                    thoughtful design. 
                  </motion.p>
                ) : (
                  <motion.p
                    key="short-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-muted-foreground"
                  >
                    My journey in tech started with a fascination for problem-solving and has evolved into a career dedicated to crafting intuitive digital solutions.
                  </motion.p>
                )}
              </AnimatePresence>
              <Button 
                variant="link" 
                onClick={() => setShowBio(!showBio)}
                className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
              >
                {showBio ? "Read Less" : "Read More"}
              </Button>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeSkill === skill 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {activeSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 p-2 bg-secondary/50 rounded-md text-sm"
                  >
                    {`${activeSkill}: Click to see projects!`}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-2 bg-secondary/30 rounded-md"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-secondary-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://drive.google.com/file/d/1f2q8l0HA562zrmkmn0QOABxXyh5ema_O/view?usp=sharing"><Button variant='outline' className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <FaDownload className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              </a>
              <a href="#contact"><Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <FaEnvelope className="mr-2 h-5 w-5" />
                Contact
              </Button>
              </a>
              <a href="https://github.com/vijaykumarr1452/"><Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                <FaGithub className="h-6 w-6" />
              </Button>
              </a>
              <a href="https://linkedin.com/in/rachuri-vijaykumar/"><Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                <FaLinkedin className="h-6 w-6" />
              </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>
    </section>)
  );
}
