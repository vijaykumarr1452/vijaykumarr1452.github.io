"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import React from "react"
import { Cell } from "recharts"
import Image from "next/image"

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
     <div><Image
        src="https://tinyurl.com/bgimagevj"
        alt="BG_IMG"
        className="object-cover"
        width={800}
        height={800}
        // fill
        style={{
        // maxWidth: "100%",
        
        // //flexWrap:Cell,
        // height: "auto"
      }} />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      </div>

      

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 0.4, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-bold mb-7"
          >
            I' m a 
          </motion.h1>
          <motion.h2
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 0.9, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Software Developer
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px]"
          >
            <TypeAnimation
              sequence={[
                "Building beautiful web experiences",
                1000,
                "Crafting intuitive interfaces",
                1000,
                "Machine Learning Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >







<div className="flex justify-center space-x-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="relative group">
                    <Image
                      src="https://tinyurl.com/bgimagevj6"
                      alt={`Vijay R`}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-primary transition-all duration-3 hover:border-4"
                      style={{
                        // animation: `rotate(200 deg)ease-in-out infinite`,
                        // transform: `scale(${contributorScales[index]})`,
                        animation: `float${index + 1} ${3 + index}s ease-in-out infinite`
                      }}
                    />
                    {/* <div className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-primary blur-sm animate-pulse delay-${index * 100}`}></div> */}
                  </div>
                ))}
                <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-35deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(20deg); }
        }
      `}</style>
              </div>
              </motion.div>

              <div><br /><br /></div>





















          <div>
            <Link href={"/#projects"}>
            <Button  size="lg" className="group" variant='outline'>
              View Projects
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
           </Link>
           
            <Link href={"/#contact"}>
            <Button  size="lg" variant="outline">
              Contact Me
            </Button>
              </Link>
          </div>
              
          
          
        </div>
        
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  )
}
