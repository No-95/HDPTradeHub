"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export interface FeaturedProject {
  id: string
  title: string
  location: string
  image: string
  href: string
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[]
  featuredLabel?: string
}

export default function FeaturedProjects({ projects, featuredLabel = "(Featured)" }: FeaturedProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const activeId = hoveredProject ?? projects[0]?.id

  return (
    <section
      id="featured"
      data-nav-theme-to="dark"
      className="relative min-h-[36vh] overflow-hidden bg-[#0a0a0a]"
    >
      {/* Full-section background images — all stacked, active one fades in */}
      <div className="absolute inset-0">
        {projects.map((project) => (
          <motion.div
            key={`bg-${project.id}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeId === project.id ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-bottom"
              sizes="100vw"
              priority={project.id === projects[0]?.id}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/0" />
        {/* Gradient overlay: black on left fading to transparent at centre */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-8 sm:px-10 md:py-10 lg:px-16">
        {/* (Featured) label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-block text-sm tracking-[0.18em] text-white/60">{featuredLabel}</span>
        </motion.div>

        {/* Project list */}
        <div className="max-w-2xl">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ y: 0 }}
                animate={
                  hoveredProject && hoveredProject !== project.id
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group border-t border-white/15 py-3 md:py-4 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-h-[64px] w-full max-w-[680px] items-center rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md md:min-h-[76px] md:px-4 md:py-3">
                    <div className="flex flex-col gap-1.5">
                      <span
                        className={`font-serif text-lg font-normal leading-tight transition-opacity duration-300 md:text-xl lg:text-2xl ${
                          hoveredProject && hoveredProject !== project.id ? "opacity-30" : "opacity-100"
                        } text-white`}
                      >
                        {project.title}
                      </span>
                      <span
                        className={`text-xs tracking-[0.15em] transition-opacity duration-300 md:text-sm ${
                          hoveredProject && hoveredProject !== project.id ? "opacity-10" : "opacity-50"
                        } text-white`}
                      >
                        {project.location}
                      </span>
                    </div>
                  </div>
                  {/* Animated arrow on hover */}
                  <span
                    className={`hidden shrink-0 text-white transition-opacity duration-300 md:block ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ↗
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/15" />
        </div>
      </div>
    </section>
  )
}
