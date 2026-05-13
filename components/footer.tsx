"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const heading = "For trade enquiries, partnerships, or business programme registration."

export default function Footer() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "0px 0px -80px 0px" })
  const [hoveredOffice, setHoveredOffice] = useState<"hanoi" | "seoul" | null>(null)

  return (
    <footer
      id="footer"
      data-nav-theme-to="light"
      className="relative isolate overflow-hidden text-[#141414]"
      style={{ backgroundColor: "#F5F5F0" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: "url('/images/hanoi.png')",
            opacity: hoveredOffice === "hanoi" ? 1 : 0,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: "url('/images/korea.png')",
            opacity: hoveredOffice === "seoul" ? 1 : 0,
          }}
        />
      </div>

      <div>
        {/* ── Top header ── */}
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-24 sm:px-10 md:pt-32 lg:px-16">

          {/* Split-char animated heading */}
          <h2
            ref={headingRef}
            aria-label={heading}
            className="mb-14 font-serif text-[2.2rem] leading-[1.25] tracking-[-0.02em] text-[#141414] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            {heading.split(" ").map((word, wi) => (
              <span key={wi} className="mr-[0.22em] inline-flex overflow-hidden align-top">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={`${wi}-${ci}`}
                    initial={{ y: "115%" }}
                    animate={isHeadingInView ? { y: "0%" } : { y: "115%" }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: wi * 0.025 + ci * 0.008 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Send an enquiry
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.908 2.642H9.109V8.842" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.108 2.641L2.391 9.359" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#141414]/25 px-7 py-3.5 text-sm font-medium text-[#141414] transition-colors hover:border-[#141414]/60"
            >
              Book a consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.908 2.642H9.109V8.842" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.108 2.641L2.391 9.359" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Bottom link grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-10 gap-y-12 border-t border-[#141414]/10 px-6 py-16 sm:px-10 md:grid-cols-3 lg:grid-cols-6 lg:px-16"
        >
          {/* Programs */}
          <div className="col-span-1">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[#141414]/40">Programs</p>
            <ul className="space-y-3.5">
              {[
                { label: "Seafood Expo", href: "/seafood-expo" },
                { label: "Furniture Roadshow", href: "/global-furniture-business-roadshow" },
                { label: "Market Insight", href: "/market-insight" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-medium text-[#141414]/70 transition-opacity hover:opacity-45">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[#141414]/40">Navigation</p>
            <ul className="space-y-3.5">
              {[
                { label: "About", href: "/about-us" },
                { label: "Services", href: "/business-opportunity" },
                { label: "Contact", href: "/contact" },
                { label: "Insights", href: "/market-insight" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-medium text-[#141414]/70 transition-opacity hover:opacity-45">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright + social */}
          <div className="col-span-2 flex flex-col justify-between gap-8 md:col-span-1 lg:col-span-2">
            <p className="text-sm font-medium text-[#141414]/35">
              &copy;{new Date().getFullYear()} HDP Holdings Co., Ltd
            </p>
            <div className="flex items-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A66C2]/90 bg-[#0A66C2]/55 text-[#F4F9FF] shadow-[0_0_0_1px_rgba(10,102,194,0.35),0_14px_36px_rgba(10,102,194,0.55)] backdrop-blur-md transition-all hover:scale-110 hover:bg-[#0A66C2]/75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M17.417 17.417H14.305V12.544c0-1.162-.023-2.657-1.618-2.657-1.621 0-1.869 1.264-1.869 2.571v4.959H7.707V7.398h2.987v1.366h.04c.3-.51.732-.93 1.251-1.215.52-.285 1.106-.424 1.698-.402 3.15 0 3.732 2.073 3.732 4.771v5h.002ZM4.197 6.027a1.805 1.805 0 1 1 0-3.61 1.805 1.805 0 0 1 0 3.61ZM5.755 17.417H2.638V7.398h3.117v10.02Z" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/hdpholdings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1877F2]/90 bg-[#1877F2]/55 text-[#F4F9FF] shadow-[0_0_0_1px_rgba(24,119,242,0.35),0_14px_36px_rgba(24,119,242,0.55)] backdrop-blur-md transition-all hover:scale-110 hover:bg-[#1877F2]/75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 10.049C18 5.603 14.418 2 10 2S2 5.603 2 10.049c0 4.017 2.925 7.347 6.75 7.951v-5.624h-2.03v-2.327H8.75V8.356c0-2.017 1.195-3.131 3.022-3.131.876 0 1.793.157 1.793.157v1.98h-1.01c-.994 0-1.305.621-1.305 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.934 6.75-7.951Z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@HDPHOLDINGS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FF0000]/90 bg-[#FF0000]/52 text-[#FFF2F2] shadow-[0_0_0_1px_rgba(255,0,0,0.35),0_14px_36px_rgba(255,0,0,0.55)] backdrop-blur-md transition-all hover:scale-110 hover:bg-[#FF0000]/72"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3.04 3.04 0 0 0-2.14-2.15C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.36.55A3.04 3.04 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.04 3.04 0 0 0 2.14 2.15c1.86.55 9.36.55 9.36.55s7.5 0 9.36-.55a3.04 3.04 0 0 0 2.14-2.15A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hanoi */}
          <div
            className="col-span-1"
            onMouseEnter={() => setHoveredOffice("hanoi")}
            onMouseLeave={() => setHoveredOffice(null)}
          >
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[#141414]/40">Hanoi</p>
            <address className="not-italic text-sm font-medium leading-[2] text-[#141414]/60">
              4th Floor, SHG Building<br />
              8 Quang Trung, Ha Dong<br />
              Hanoi, Vietnam
            </address>
            <p className="mt-4 text-sm font-medium text-[#141414]/40">business@hdpholdings.com.vn</p>
          </div>

          {/* Seoul */}
          <div
            className="col-span-1"
            onMouseEnter={() => setHoveredOffice("seoul")}
            onMouseLeave={() => setHoveredOffice(null)}
          >
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[#141414]/40">Seoul</p>
            <address className="not-italic text-sm font-medium leading-[2] text-[#141414]/60">
              HDP Korea Office<br />
              Seoul<br />
              Republic of Korea
            </address>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}