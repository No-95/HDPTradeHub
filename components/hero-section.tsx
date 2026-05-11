"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with YouTube video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 scale-[1.2] origin-center">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 my-0 mb-0"
            src="https://www.youtube.com/embed/AR5XLZbYiqM?autoplay=1&mute=1&loop=1&playlist=AR5XLZbYiqM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 pointer-events-none"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="flex-1 text-center lg:text-center">
            <span className="inline-block font-semibold uppercase tracking-wider text-lg sm:text-xl mb-4 animate-fade-in-up drop-shadow-lg text-yellow-400">
              {t.hdpHoldings}
              <br />
              {t.tradePromotionProgram}
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up drop-shadow-lg"
              style={{ animationDelay: "0.1s" }}
            >
              {t.vietnamSeafood}
              <br />
              {t.exportGateway}
              <br />
              <span className="text-yellow-400">{t.year2026}</span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-white/90 mb-4 leading-relaxed animate-fade-in-up drop-shadow-md italic font-bold"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heroTagline}
            </p>

            <p
              className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up drop-shadow-md font-bold lg:ml-14 pl-4"
              style={{ animationDelay: "0.3s" }}
            >
              {t.heroDescription}
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link href="/seafood-expo/register" scroll={true}>
                <Button
                  size="lg"
                  className="hover:bg-amber-500/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-white pl-8 ml-11 bg-amber-500"
                >
                  {t.registerNowButton}
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:w-80 animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-6 text-center">{t.eventInfo}</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.location}</p>
                    <p className="text-sm text-white/70">{t.koreaSeafoodShow}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.eventDate}</p>
                    <p className="text-sm text-white/70">{t.eventDuration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.selection}</p>
                    <p className="text-sm text-white/70">{t.limitedScale}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80 text-center leading-relaxed font-medium">{t.heroFooter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2"></div>
      </div>
    </section>
  )
}
