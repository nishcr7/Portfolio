'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Backend & Infrastructure',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Docker', 'Databases (MySQL, PostgreSQL)'],
    color: 'from-red-500 to-red-600',
  },
  {
    category: 'Frontend & Full-Stack',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'WebGL'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    category: 'AI & Machine Learning',
    skills: ['LLM Orchestration', 'Gemini API', 'Groq', 'Scikit-learn', 'NLP', 'Generative AI'],
    color: 'from-red-600 to-orange-500',
  },
  {
    category: 'Web3 & Blockchain',
    skills: ['Bitcoin Cash', 'CashScript', 'Solidity', 'Smart Contracts', 'Cardano', 'Qiskit (Quantum)'],
    color: 'from-orange-600 to-red-500',
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git/GitHub', 'AWS', 'Supabase', 'Socket.IO', 'JWT', 'IBM Quantum'],
    color: 'from-red-500 to-orange-500',
  },
]

function SkillBar({ skill, delay }: { skill: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="mb-4">
      <p className="text-sm text-gray-300 mb-2 font-medium">{skill}</p>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000"
          style={{
            width: isVisible ? '85%' : '0%',
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build production-grade systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill}
                    skill={skill}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'LeetCode Solved', value: '550+' },
            { label: 'Contest Rating', value: '1600+' },
            { label: 'Open Source', value: 'BrainGlobe' },
            { label: 'Experience', value: 'Full-Stack' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/30 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
