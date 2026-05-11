"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function EventScheduleSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const schedule = [
    {
      date: "17/05",
      emoji: "✈️",
      title: t.schedule1Title,
      details: [t.schedule1Detail1, t.schedule1Detail2],
    },
    {
      date: "18/05",
      emoji: "🧭",
      title: t.schedule2Title,
      details: [t.schedule2Detail1, t.schedule2Detail2, t.schedule2Detail3],
    },
    {
      date: "19/05",
      emoji: "🎪",
      title: t.schedule3Title,
      details: [t.schedule3Detail1, t.schedule3Detail2],
    },
    {
      date: "20/05",
      emoji: "🚀",
      title: t.schedule4Title,
      details: [t.schedule4Detail1, t.schedule4Detail2, t.schedule4Detail3],
    },
    {
      date: "21/05",
      emoji: "🤝",
      title: t.schedule5Title,
      details: [t.schedule5Detail1, t.schedule5Detail2, t.schedule5Detail3],
    },
    {
      date: "22/05",
      emoji: "🛍",
      title: t.schedule6Title,
      details: [t.schedule6Detail1, t.schedule6Detail2, t.schedule6Detail3],
    },
  ]

  return (
    <section className="py-20 bg-white/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">{t.scheduleTitle}</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">{t.scheduleSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in-up border-l-4 border-accent p-6 hover:scale-105"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded w-fit">
                    {item.date}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
