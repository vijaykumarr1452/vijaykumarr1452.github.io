import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectSection } from "@/components/sections/project"
import { SkillSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experiences"
import { EducationSection } from "@/components/sections/education"
import { ContactSection } from "@/components/sections/contact"



export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectSection/>
      <SkillSection/>
      <ExperienceSection/>
      {/* <EducationSection/> */}
      <EducationSection/>
      <ContactSection/>
    </div>
  )
}
