import { Navbar } from '@/components/navbar'
import { Hero3D } from '@/components/hero-3d'
import { ProjectsShowcase } from '@/components/projects-showcase'
import { SkillsSection } from '@/components/skills-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection, Footer } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />
      <Hero3D />
      <ProjectsShowcase />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
