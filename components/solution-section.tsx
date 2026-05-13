"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function SolutionSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const benefits = [t.solution1, t.solution2, t.solution3, t.solution4, t.solution5]

  return (
    <section className="relative py-20 text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/78a3bcf5-fa86-41f6-bca3-2f97ce980501.png"
          alt="Global shipping and trade network"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 opacity-70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">{t.solutionTitle}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">{t.solutionSubtitle}</p>
        </div>

        <div
          className="bg-black/40 backdrop-blur-sm rounded-xl p-8 sm:p-12 border border-white/20 animate-fade-in-scale"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">{t.solutionListTitle}</h3>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-white/90 italic max-w-2xl mx-auto drop-shadow-md">{t.solutionQuote}</p>
        </div>
      </div>
    </section>
  )
}
