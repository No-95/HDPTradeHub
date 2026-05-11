"use client"

import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContactWidget from "@/components/floating-contact-widget"

interface MainLayoutProps {
  children: ReactNode
}

/**
 * Main Layout Component
 * Used for pages: /, /about-us, /contact
 * Ensures consistent header and footer across main pages
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingContactWidget />
    </>
  )
}
