'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'NexOps (NexMCP)',
    description: 'Security-first AI framework for generating, auditing, and deploying CashScript smart contracts on Bitcoin Cash',
    longDescription: 'Deterministic, security-first AI framework designed to prevent unsafe code generation using multi-phase validation and anti-pattern–driven rejection pipelines.',
    technologies: ['React.js', 'Python', 'FastAPI', 'CashScript', 'LLM Orchestration'],
    github: 'https://github.com/NexOps-cash',
    color: 'from-red-600 to-orange-500',
  },
  {
    id: 2,
    title: 'Bulk Resume Analyzer',
    description: 'AI-powered bulk resume analysis for college placement cells with 93% ATS alignment',
    longDescription: 'Processes resumes with enterprise-grade ATS-style scoring. Generates student-level insights including skill gaps, role readiness, and GitHub-based ranking signals.',
    technologies: ['React.js', 'Python', 'Gemini API', 'Groq', 'Supabase', 'Docker'],
    github: 'https://github.com/nishanthcr7777/analytics-resume',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 3,
    title: 'IBM Quantum Backend Analyzer',
    description: 'Quantum job orchestration with natural-language-to-Qiskit code generation',
    longDescription: 'Allows users to submit and simulate quantum jobs on IBM Quantum backends. Includes ML-based backend recommendation using device performance metrics.',
    technologies: ['Python', 'Qiskit', 'IBM Quantum', 'Scikit-learn', 'NLP', 'Supabase'],
    github: 'https://github.com/nishanthcr7777/decoherex',
    color: 'from-red-600 to-orange-600',
  },
  {
    id: 4,
    title: 'Enterprise Ticketing System',
    description: 'TVS Group SDE internship project handling 1000+ daily customer queries',
    longDescription: 'Enterprise-grade ticketing system supporting 30+ agents. Integrated Generative AI for automated summaries, sentiment analysis, and response suggestions with real-time chat and RBAC workflows.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'JWT', 'Generative AI'],
    github: 'https://github.com/nishanthcr7777',
    color: 'from-orange-500 to-red-600',
  },
]

export function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-80 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br p-6 rounded-lg border border-red-500/30 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`bg-gradient-to-br ${project.color} p-px rounded`}>
            <div className="bg-black/80 p-3 rounded">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded border border-red-500/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded border border-orange-500/50">
                +{project.technologies.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-orange-500/30 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <h4 className="text-sm font-semibold text-orange-400 mb-2 uppercase tracking-wider">
              Overview
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-orange-400 mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded border border-orange-500/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hover to explore my work across AI, backends, and Web3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
