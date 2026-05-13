"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function TargetAudienceSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const targetGroups = [
    {
      title: t.target1Title,
      description: t.target1Desc,
      image: "/images/seafood-processing-facility.jpg",
    },
    {
      title: t.target2Title,
      description: t.target2Desc,
      image: "/images/international-trade-meeting.jpg",
    },
    {
      title: t.target3Title,
      description: t.target3Desc,
      image: "/images/business-partnership-deal.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">{t.targetTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {targetGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all animate-fade-in-scale overflow-hidden border-t-4 border-primary hover:scale-105"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image src={group.image || "/placeholder.svg"} alt={group.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{group.title}</h3>
                <p className="text-lg text-foreground/70">{group.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-lg overflow-hidden p-8 sm:p-12 text-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gettyimages-1661448219-2048x2048.jpg"
              alt="Exclusive selection background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-75" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{t.limitedAttendance}</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm font-bold">
              {t.limitedAttendanceDesc}
            </p>
          </div>
        </div>

        <div className="text-center animate-fade-in-scale" style={{ animationDelay: "0.7s" }}>
          <Link href="/seafood-expo/register">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              {t.registerNowButton}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
