"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const { lang, toggleLanguage } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isSeafoodExpoPage = pathname.startsWith("/seafood-expo")
  const isKofurnPage = pathname.startsWith("/global-furniture-business-roadshow")
  const isHomePage = pathname === "/"

  const defaultMenuItems = [
    { label: t.aboutUs, href: "/about-us", external: false },
    { label: t.contact, href: "/contact", external: false },
    { label: t.marketInsight || "Market Insight", href: "/market-insight", external: false },
    { label: t.businessOpportunity || "Cơ Hội Hợp Tác", href: "/business-opportunity", external: false },
    {
      label: t.visitHDPHoldings || "Visit HDPHoldings",
      href: "https://hdpholdings.com.vn",
      external: true,
    },
  ]

  const seafoodExpoMenuItems = [
    { label: t.home, href: "/", external: false },
    { label: t.aboutUs, href: "/about-us", external: false },
    { label: t.contact, href: "/contact", external: false },
    { label: t.marketInsight || "Market Insight", href: "/market-insight", external: false },
    { label: t.businessOpportunity || "Cơ Hội Hợp Tác", href: "/business-opportunity", external: false },
  ]

  const kofurnMenuItems = [
    { label: t.home, href: "/", external: false },
    { label: t.aboutUs, href: "/about-us", external: false },
    { label: t.contact, href: "/contact", external: false },
    { label: t.marketInsight || "Market Insight", href: "/market-insight", external: false },
    { label: t.businessOpportunity || "Cơ Hội Hợp Tác", href: "/business-opportunity", external: false },
  ]

  const menuItems = isKofurnPage ? kofurnMenuItems : isSeafoodExpoPage ? seafoodExpoMenuItems : defaultMenuItems

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between flex-row items-center h-12 sm:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/hdp-logo.png"
              alt="HDP Holdings"
              width={50}
              height={50}
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  scroll={true}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                  {item.label}
                </Link>
              ),
            )}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
            </button>

            {isSeafoodExpoPage ? (
              <Link
                href="/seafood-expo/register"
                scroll={true}
                className="ml-2 lg:ml-3 px-4 lg:px-6 py-2 lg:py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t.joinNow}
              </Link>
            ) : isKofurnPage ? (
              <Link
                href="/global-furniture-business-roadshow/register"
                scroll={true}
                className="ml-2 lg:ml-3 px-4 lg:px-6 py-2 lg:py-2.5 bg-amber-700 text-white text-sm font-semibold rounded-lg hover:bg-amber-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t.joinNow}
              </Link>
            ) : null}
          </div>

          <div className="flex md:hidden items-center gap-2">
            {isSeafoodExpoPage && (
              <Link
                href="/seafood-expo/register"
                scroll={true}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-sm"
              >
                {t.joinNow}
              </Link>
            )}
            {isKofurnPage && (
              <Link
                href="/global-furniture-business-roadshow/register"
                scroll={true}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-700 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-amber-800 transition-all duration-200 shadow-sm"
              >
                {t.joinNow}
              </Link>
            )}
            {/* Menu toggle button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 sm:p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 18h12M6 6h12"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-12 sm:top-14 bg-black/30 md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <nav className="md:hidden absolute left-0 right-0 top-12 sm:top-14 bg-white border-b border-gray-200 shadow-xl z-50">
              <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
                {menuItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      scroll={true}
                      className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>
                    {t.language}: {lang}
                  </span>
                </button>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
