"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HdpRoleSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const roles = [
    {
      icon: "📌",
      title: t.hdpRole1Title,
      description: t.hdpRole1Desc,
    },
    {
      icon: "📌",
      title: t.hdpRole2Title,
      description: t.hdpRole2Desc,
    },
    {
      icon: "📌",
      title: t.hdpRole3Title,
      description: t.hdpRole3Desc,
    },
    {
      icon: "📌",
      title: t.hdpRole4Title,
      description: t.hdpRole4Desc,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💼</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
              {t.hdpRoleTitle.replace("💼 ", "")}
            </h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-3xl mt-4">{t.hdpRoleSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all animate-fade-in-scale border-t-4 border-primary hover:scale-105"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{role.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{role.title}</h3>
                  <p className="text-foreground/70">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
