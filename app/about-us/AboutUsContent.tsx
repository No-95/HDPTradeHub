"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import MainLayout from "@/components/main-layout"

const sectionColor = "#0C0C0C"
const textColor = "#CCCCCC"
const accentColor = "#FF4F11"

export default function AboutUsContent() {
  const { lang } = useLanguage()
  const t = translations[lang]

  // Section refs for animations
  const heroRef = useRef<HTMLHeadingElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "0px 0px -80px 0px" })
  
  const missionRef = useRef<HTMLHeadingElement>(null)
  const isMissionInView = useInView(missionRef, { once: true, margin: "0px 0px -80px 0px" })

  const valuesRef = useRef<HTMLHeadingElement>(null)
  const isValuesInView = useInView(valuesRef, { once: true, margin: "0px 0px -80px 0px" })

  const values = [
    { title: "Innovation", desc: "Driving forward-thinking solutions for global trade" },
    { title: "Integrity", desc: "Operating with transparency and ethical standards" },
    { title: "Partnership", desc: "Building lasting relationships with all stakeholders" },
    { title: "Excellence", desc: "Committed to delivering exceptional results" },
    { title: "Growth", desc: "Empowering businesses to expand internationally" },
  ]

  const stats = [
    { number: "500+", label: "Businesses Supported" },
    { number: "15+", label: "Years Experience" },
    { number: "3", label: "Regional Offices" },
    { number: "25+", label: "Trade Programs" },
  ]

  return (
    <MainLayout>
      <div style={{ backgroundColor: sectionColor, color: textColor }}>
        {/* ── Hero Section ── */}
        <section
          style={{ backgroundColor: sectionColor }}
          className="relative min-h-screen flex items-center py-24 px-6 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-[1600px] w-full">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-sm tracking-[0.18em] mb-8"
              style={{ color: `${textColor}80` }}
            >
              (About HDP Holdings)
            </motion.span>

            {/* Split-char heading */}
            <h1
              ref={heroRef}
              className="font-serif text-[2.2rem] leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[5.5rem] mb-12"
              style={{ color: textColor }}
            >
              {t.aboutUsPageTitle || "About HDP Holdings"}
            </h1>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="max-w-3xl text-lg md:text-2xl leading-relaxed mb-12"
              style={{ color: `${textColor}cc` }}
            >
              A leading strategic partner for businesses looking to expand globally, with expertise in trade promotion, market entry, and international partnerships.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-75"
                style={{ backgroundColor: accentColor, color: "white" }}
              >
                Get In Touch
              </Link>
              <Link
                href="#mission"
                className="inline-flex items-center gap-2.5 rounded-full border px-7 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: `${textColor}40`, color: textColor }}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Mission & Vision Section ── */}
        <section
          id="mission"
          style={{ backgroundColor: sectionColor }}
          className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
          style={{ borderColor: `${textColor}15` }}
        >
          <div className="mx-auto max-w-[1600px]">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-block text-sm tracking-[0.18em] mb-8"
              style={{ color: `${textColor}80` }}
            >
              (Mission & Vision)
            </motion.span>

            <h2
              ref={missionRef}
              className="font-serif text-[2.2rem] leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-6xl mb-16"
              style={{ color: textColor }}
            >
              Our Purpose & Direction
            </h2>

            {/* Two-column grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="rounded-sm p-8 border transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: `${sectionColor}cc`,
                  borderColor: `${textColor}20`,
                }}
              >
                <h3 className="font-serif text-3xl font-normal mb-6" style={{ color: textColor }}>
                  Mission
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: `${textColor}cc` }}
                >
                  To facilitate meaningful business connections and market opportunities, enabling companies to thrive in global trade through strategic partnerships and expert guidance.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="rounded-sm p-8 border transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: `${sectionColor}cc`,
                  borderColor: `${textColor}20`,
                }}
              >
                <h3 className="font-serif text-3xl font-normal mb-6" style={{ color: textColor }}>
                  Vision
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: `${textColor}cc` }}
                >
                  To become the trusted gateway for international business expansion, fostering sustainable growth across Asia-Pacific and beyond through innovation and collaboration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Core Values Section ── */}
        <section
          style={{ backgroundColor: sectionColor }}
          className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
          style={{ borderColor: `${textColor}15` }}
        >
          <div className="mx-auto max-w-[1600px]">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-block text-sm tracking-[0.18em] mb-8"
              style={{ color: `${textColor}80` }}
            >
              (Core Values)
            </motion.span>

            <h2
              ref={valuesRef}
              className="font-serif text-[2.2rem] leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-6xl mb-16"
              style={{ color: textColor }}
            >
              What We Stand For
            </h2>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-sm p-6 border transition-all hover:border-opacity-100"
                  style={{
                    backgroundColor: `${sectionColor}cc`,
                    borderColor: `${textColor}20`,
                  }}
                >
                  <h3 className="font-semibold text-lg mb-3" style={{ color: textColor }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${textColor}80` }}>
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Section ── */}
        <section
          style={{ backgroundColor: sectionColor }}
          className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
          style={{ borderColor: `${textColor}15` }}
        >
          <div className="mx-auto max-w-[1600px]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-center mb-16"
              style={{ color: textColor }}
            >
              Our Impact
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="font-serif text-5xl md:text-6xl font-normal mb-4"
                    style={{ color: accentColor }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-lg" style={{ color: `${textColor}cc` }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section
          style={{ backgroundColor: sectionColor }}
          className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
          style={{ borderColor: `${textColor}15` }}
        >
          <div className="mx-auto max-w-[1200px] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl mb-6"
              style={{ color: textColor }}
            >
              Ready to Partner With Us?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: `${textColor}cc` }}
            >
              Let's discuss how HDP Holdings can support your business growth and international expansion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-75"
                style={{ backgroundColor: accentColor, color: "white" }}
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}