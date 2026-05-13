"use client"

import { createContext, useContext, useState, useEffect, Suspense, type ReactNode } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

// Matching your exact types: VN, KR, EN
type Language = "VN" | "KR" | "EN"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Mapping your VN/KR/EN to the URL-friendly vi/ko/en
const langMap: Record<string, Language> = {
  vi: "VN",
  ko: "KR",
  en: "EN"
}

const revLangMap: Record<Language, string> = {
  VN: "vi",
  KR: "ko",
  EN: "en"
}

const languages: Language[] = ["EN", "VN", "KR"]

function LanguageProviderInner({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN")
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // 1. Synchronize the URL parameter with the App State
  useEffect(() => {
    const urlLang = searchParams.get("lang")
    if (urlLang && langMap[urlLang]) {
      setLangState(langMap[urlLang])
    }
  }, [searchParams])

  // 2. Custom setter that also updates the URL for SEO
  const setLang = (newLang: Language) => {
    setLangState(newLang)
    
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", revLangMap[newLang])
    
    // Updates the address bar without reloading the whole page
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(lang)
    const nextIndex = (currentIndex + 1) % languages.length
    setLang(languages[nextIndex])
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <LanguageProviderInner>{children}</LanguageProviderInner>
    </Suspense>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
