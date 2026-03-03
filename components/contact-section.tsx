'use client'

import { Mail, Github, Linkedin, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bnishanthtpm06@gmail.com',
      href: 'mailto:bnishanthtpm06@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@nishanthcr7777',
      href: 'https://github.com/nishanthcr7777',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@n1shanth',
      href: 'https://linkedin.com/in/n1shanth',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9442450913',
      href: 'tel:+919442450913',
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Let's <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Interested in collaborating? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-colors">
                    <Icon size={24} className="text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-red-400 transition-colors" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-lg border border-red-500/30 text-center">
          <p className="text-gray-300 mb-6">
            Ready to explore a project or have questions about my work?
          </p>
          <a
            href="mailto:bnishanthtpm06@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
          >
            <Mail size={20} />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Nishanth B. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/nishanthcr7777' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/n1shanth' },
              { label: 'Email', href: 'mailto:bnishanthtpm06@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-600">
          <p>Crafted with passion and 3D immersion • Built with Next.js, React Three Fiber & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
