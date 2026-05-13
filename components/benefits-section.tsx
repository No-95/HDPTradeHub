"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function BenefitsSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const features = [
    {
      icon: "📚",
      title: t.benefit1Title,
      description: t.benefit1Desc,
    },
    {
      icon: "🤝",
      title: t.benefit2Title,
      description: t.benefit2Desc,
    },
    {
      icon: "🧪",
      title: t.benefit3Title,
      description: t.benefit3Desc,
    },
    {
      icon: "📋",
      title: t.benefit4Title,
      description: t.benefit4Desc,
    },
  ]

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight animate-fade-in-up">
            {t.benefitsTitle}
          </h2>
          <p className="text-xl text-foreground/70 animate-fade-in-up font-semibold" style={{ animationDelay: "0.1s" }}>
            {t.benefitsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-2 border-primary/20 hover:border-accent hover:shadow-xl transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
