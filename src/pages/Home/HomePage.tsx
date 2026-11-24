import React from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import { HeroSection } from '../../components/sections/HeroSection'
import { AboutSection } from '../../components/sections/AboutSection'
import { ProjectsSection } from '../../components/sections/ProjectsSection'
import { StartupSection } from '../../components/sections/StartupSection'
import { SkillsSection } from '../../components/sections/SkillsSection'
import { ExperienceSection } from '../../components/sections/ExperienceSection'
import { PhotographySection } from '../../components/sections/PhotographySection'
import { ContactSection } from '../../components/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StartupSection />
        <SkillsSection />
        <ExperienceSection />
        <PhotographySection />
        <ContactSection />
      </main>
    </>
  )
}
