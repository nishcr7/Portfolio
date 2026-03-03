'use client'

import { Trophy, Award, Target, Code, Globe, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export function AboutSection() {
  const achievements = [
    { icon: Trophy, title: 'Web3conf\'25 Winner', desc: 'Top winner at major Web3 conference' },
    { icon: Award, title: 'Top 5 - IBW Hackathon', desc: 'Cardano Hackathon placement' },
    { icon: Target, title: 'AQVH\'25 Finalist', desc: 'Advanced quantum hackathon finalist' },
    { icon: Code, title: '550+ LeetCode', desc: '1600+ contest rating in competitive programming' },
    { icon: Globe, title: 'Open Source', desc: 'Contributor to BrainGlobe (NIU Group)' },
    { icon: Zap, title: 'Enterprise SDE', desc: 'TVS Group internship - 1000+ daily queries' },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              About <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Me</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a software engineering student specializing in <strong className="text-white">backend systems</strong>, <strong className="text-white">AI-powered platforms</strong>, and <strong className="text-white">secure distributed applications</strong>.
              </p>

              <p className="text-lg">
                I build production-grade systems that prioritize <strong className="text-white">determinism, validation, and real-world scalability</strong> — from enterprise ticketing systems handling 1000+ daily queries, to quantum backend optimizers, to Web3 contract frameworks that prevent unsafe code generation.
              </p>

              <p className="text-lg">
                What excites me most is building systems where <strong className="text-white">correctness and architecture matter</strong> — security-first pipelines, distributed systems, AI orchestration, and infrastructure that real users depend on.
              </p>

              <div className="pt-4">
                <p className="text-sm font-mono text-orange-500 mb-3">CORE EXPERTISE</p>
                <div className="flex flex-wrap gap-2">
                  {['Backend Architecture', 'AI Frameworks', 'Web3 Security', 'Quantum Computing', 'System Design'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded text-sm border border-red-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Achievements Grid */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <IconComponent size={24} className="text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">System Design Philosophy</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every system I build is designed with three pillars in mind: <strong>Determinism</strong> (predictable, testable behavior), <strong>Validation</strong> (multi-phase checks to prevent invalid states), and <strong>Scale</strong> (architecture that grows with demand). Whether it's preventing unsafe smart contract generation, optimizing quantum backend selection, or handling enterprise-scale query volumes, these principles guide every decision.
          </p>
        </div>
      </div>

    </section>
  )
}
