"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function MaintenancePage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-xl p-8 sm:p-12 max-w-md w-full text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-14 h-14 text-primary" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{t.underDevelopment}</h1>
        <p className="text-muted-foreground mb-8">{t.underDevelopmentDesc}</p>
        <Link href="/seafood-expo">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToHome}
          </Button>
        </Link>
      </div>
    </div>
  )
}
