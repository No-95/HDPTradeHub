"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function PackagesSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const packages = [
    {
      level: "01",
      name: t.coreName,
      id: "core",
      subtitle: t.coreSubtitle,
      description: t.coreDesc,
      features: [t.coreFeature1, t.coreFeature2, t.coreFeature3],
    },
    {
      level: "02",
      name: t.tradeName,
      id: "trade",
      subtitle: t.tradeSubtitle,
      description: t.tradeDesc,
      featured: true,
      features: [t.tradeFeature1, t.tradeFeature2, t.tradeFeature3, t.tradeFeature4],
    },
    {
      level: "03",
      name: t.marketEntryName,
      id: "market-entry",
      subtitle: t.marketEntrySubtitle,
      description: t.marketEntryDesc,
      features: [t.marketEntryFeature1, t.marketEntryFeature2, t.marketEntryFeature3],
    },
  ]

  const handlePackageClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-4 leading-tight tracking-tight">
            {t.packagesTitle}
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">{t.packagesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all animate-fade-in-scale relative overflow-hidden ${
                pkg.featured
                  ? "md:scale-110 bg-gradient-to-br from-primary to-primary/90 shadow-2xl border border-primary/20 z-10"
                  : "bg-white border border-foreground/10 hover:border-primary/20 shadow-lg"
              } hover:shadow-2xl`}
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              <div
                className={`text-6xl font-bold absolute -right-8 -top-8 ${pkg.featured ? "text-white/10" : "text-foreground/5"}`}
              >
                {pkg.level}
              </div>

              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <span
                    className={`text-sm font-semibold tracking-widest ${pkg.featured ? "text-white/80" : "text-primary"}`}
                  >
                    {t.level} {pkg.level}
                  </span>
                  <h3 className={`text-3xl font-bold mt-2 ${pkg.featured ? "text-white" : "text-primary"}`}>
                    {pkg.name}
                  </h3>
                </div>

                <p className={`text-sm font-medium mb-3 ${pkg.featured ? "text-white/90" : "text-foreground/70"}`}>
                  {pkg.subtitle}
                </p>
                <p className={`text-base mb-8 ${pkg.featured ? "text-white/80" : "text-foreground/60"}`}>
                  {pkg.description}
                </p>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.featured ? "text-white" : "text-primary"}`}
                      />
                      <span className={`text-sm ${pkg.featured ? "text-white/90" : "text-foreground/70"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={`/seafood-expo/packages/${pkg.id}`} onClick={handlePackageClick}>
                  <Button
                    size="lg"
                    className={`w-full font-semibold transition-all ${
                      pkg.featured
                        ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                        : "bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20"
                    }`}
                  >
                    {t.learnMoreButton}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12 text-center animate-fade-in-scale border border-primary/10"
          style={{ animationDelay: "0.7s" }}
        >
          <h3 className="text-3xl font-bold text-primary mb-3">{t.notSureTitle}</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg">{t.notSureDesc}</p>

          <div className="mb-8 p-6 bg-white/60 rounded-lg border border-primary/10">
            <h4 className="text-xl font-bold text-primary mb-2">{t.hdpCommitment}</h4>
            <p className="text-foreground/70 max-w-2xl mx-auto">{t.hdpCommitmentDesc}</p>
          </div>

          
        </div>
      </div>
    </section>
  )
}
