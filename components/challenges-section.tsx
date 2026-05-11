"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function ChallengesSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const challenges = [t.challenge1, t.challenge2, t.challenge3, t.challenge4]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight animate-fade-in-up">
            {t.challengesTitle}
          </h2>
          <p
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t.challengesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg border-2 border-primary/10 hover:border-accent hover:bg-blue-50 hover:shadow-lg transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 group-hover:bg-accent/20 transition-colors">
                  <span className="text-lg font-bold text-primary">{index + 1}</span>
                </div>
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed font-medium">{challenge}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-accent animate-fade-in-scale">
          <p className="text-2xl font-bold text-primary text-center">{t.challengeConclusion}</p>
        </div>
      </div>
    </section>
  )
}
