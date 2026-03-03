import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { ProjectsShowcase } from '@/components/projects-showcase'
import { SkillsSection } from '@/components/skills-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection, Footer } from '@/components/contact-section'

const Hero3D = dynamic(() => import('@/components/hero-3d').then(mod => ({ default: mod.Hero3D })), {
  ssr: false,
})

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
