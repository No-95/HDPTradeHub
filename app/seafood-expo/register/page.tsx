"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, User, Target, CheckCircle2, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function RegisterPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Section I: Company Information
  const [companyName, setCompanyName] = useState("")
  const [businessField, setBusinessField] = useState("")
  const [mainProducts, setMainProducts] = useState("")
  const [currentMarkets, setCurrentMarkets] = useState<string[]>([])
  const [website, setWebsite] = useState("")

  // Section II: Contact Information
  const [contactName, setContactName] = useState("")
  const [position, setPosition] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  // Section III: Needs
  const [goals, setGoals] = useState<string[]>([])
  const [exportReadiness, setExportReadiness] = useState("")
  const [interestedPackage, setInterestedPackage] = useState("")
  const [expectedTiming, setExpectedTiming] = useState("")
  const [expectations, setExpectations] = useState("")

  const marketOptions = [
    { value: "Việt Nam", label: t.marketVietnam },
    { value: "ASEAN", label: t.marketASEAN },
    { value: "Trung Quốc", label: t.marketChina },
    { value: "EU", label: t.marketEU },
    { value: "Mỹ", label: t.marketUS },
    { value: "Chưa xuất khẩu", label: t.marketNone },
  ]

  const goalOptions = [
    { value: "Hiểu thị trường Hàn Quốc", label: t.goalUnderstand },
    { value: "Gặp buyer & nhà phân phối", label: t.goalMeetBuyer },
    { value: "Test thị trường / Live Commerce", label: t.goalTestMarket },
    { value: "Tìm đối tác dài hạn", label: t.goalLongTermPartner },
  ]

  const handleMarketChange = (market: string, checked: boolean) => {
    if (checked) {
      setCurrentMarkets([...currentMarkets, market])
    } else {
      setCurrentMarkets(currentMarkets.filter((m) => m !== market))
    }
  }

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      setGoals([...goals, goal])
    } else {
      setGoals(goals.filter((g) => g !== goal))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!businessField) {
      alert(t.selectFieldError)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/seafood-expo/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          businessField,
          mainProducts,
          currentMarkets: currentMarkets.join(", "),
          website,
          contactName,
          position,
          phone,
          email,
          goals: goals.join(", "),
          exportReadiness,
          interestedPackage,
          expectedTiming,
          expectations,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit registration")
      }

      setIsSuccess(true)
    } catch (error) {
      console.error("[v0] Error submitting registration:", error)
      alert("Failed to submit registration. Please try again.")
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
        <div className="bg-card rounded-2xl shadow-xl p-8 sm:p-12 max-w-md w-full text-center animate-fade-in-scale">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-14 h-14 text-green-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{t.thankYou}</h1>
          <p className="text-muted-foreground mb-8">{t.thankYouDesc}</p>
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

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/register-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <header className="bg-card/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/seafood-expo" className="flex items-center gap-2">
              <Image src="/images/hdp-logo.png" alt="HDP Holdings" width={40} height={40} className="h-10 w-auto" />
            </Link>
            <Link
              href="/seafood-expo"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.goBack}
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">{t.registerTitle}</h1>
            <p className="text-white/90 max-w-2xl mx-auto drop-shadow">{t.registerSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section I: Company Information */}
            <div className="rounded-xl shadow-lg p-6 sm:p-8 border border-border bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{t.companyInfo}</h2>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="companyName">
                    {t.companyName} <span className="text-destructive">{t.required}</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    placeholder={t.companyNamePlaceholder}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="businessField">
                    {t.businessField} <span className="text-destructive">{t.required}</span>
                  </Label>
                  <Select value={businessField} onValueChange={setBusinessField}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.selectField} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Thủy sản">{t.fieldSeafood}</SelectItem>
                      <SelectItem value="Thực phẩm chế biến">{t.fieldProcessedFood}</SelectItem>
                      <SelectItem value="Logistics">{t.fieldLogistics}</SelectItem>
                      <SelectItem value="Khác">{t.fieldOther}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mainProducts">{t.mainProducts}</Label>
                  <Input
                    id="mainProducts"
                    value={mainProducts}
                    onChange={(e) => setMainProducts(e.target.value)}
                    placeholder={t.mainProductsPlaceholder}
                  />
                </div>

                <div className="grid gap-2">
                  <Label>{t.currentMarkets}</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {marketOptions.map((market) => (
                      <div key={market.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`market-${market.value}`}
                          checked={currentMarkets.includes(market.value)}
                          onCheckedChange={(checked) => handleMarketChange(market.value, checked as boolean)}
                        />
                        <Label htmlFor={`market-${market.value}`} className="text-sm font-normal cursor-pointer">
                          {market.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="website">{t.website}</Label>
                  <Input
                    id="website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://"
                  />
                </div>
              </div>
            </div>

            {/* Section II: Contact Information */}
            <div className="rounded-xl shadow-lg p-6 sm:p-8 border border-border bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{t.contactInfo}</h2>
              </div>

              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="contactName">
                      {t.fullName} <span className="text-destructive">{t.required}</span>
                    </Label>
                    <Input
                      id="contactName"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="position">{t.position}</Label>
                    <Select value={position} onValueChange={setPosition}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectPosition} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Chủ DN / CEO">{t.positionCEO}</SelectItem>
                        <SelectItem value="Giám đốc xuất khẩu">{t.positionExportDirector}</SelectItem>
                        <SelectItem value="Quản lý">{t.positionManager}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      {t.phone} <span className="text-destructive">{t.required}</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder={t.phonePlaceholder}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      {t.email} <span className="text-destructive">{t.required}</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section III: Needs */}
            <div className="rounded-xl shadow-lg p-6 sm:p-8 border border-border bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{t.needs}</h2>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label>{t.participationGoals}</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {goalOptions.map((goal) => (
                      <div key={goal.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`goal-${goal.value}`}
                          checked={goals.includes(goal.value)}
                          onCheckedChange={(checked) => handleGoalChange(goal.value, checked as boolean)}
                        />
                        <Label htmlFor={`goal-${goal.value}`} className="text-sm font-normal cursor-pointer">
                          {goal.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <Label>{t.exportReadiness}</Label>
                  <RadioGroup value={exportReadiness} onValueChange={setExportReadiness} className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Đang xuất khẩu ổn định" id="export-1" />
                      <Label htmlFor="export-1" className="font-normal cursor-pointer">
                        {t.readinessStable}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Đã có sản phẩm đang tìm thị trường" id="export-2" />
                      <Label htmlFor="export-2" className="font-normal cursor-pointer">
                        {t.readinessHasProduct}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Đang chuẩn bị" id="export-3" />
                      <Label htmlFor="export-3" className="font-normal cursor-pointer">
                        {t.readinessPreparing}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-3">
                  <Label>{t.interestedPackage}</Label>
                  <RadioGroup value={interestedPackage} onValueChange={setInterestedPackage} className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="CORE" id="package-core" />
                      <Label htmlFor="package-core" className="font-normal cursor-pointer">
                        CORE
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="TRADE" id="package-trade" />
                      <Label htmlFor="package-trade" className="font-normal cursor-pointer">
                        TRADE <span className="text-primary font-medium">({t.recommended})</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="MARKET ENTRY" id="package-market" />
                      <Label htmlFor="package-market" className="font-normal cursor-pointer">
                        MARKET ENTRY
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="expectedTiming">{t.expectedTiming}</Label>
                  <Select value={expectedTiming} onValueChange={setExpectedTiming}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.selectTiming} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sẵn sàng ngay">{t.timingReady}</SelectItem>
                      <SelectItem value="Cần tư vấn thêm">{t.timingNeedConsult}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="expectations">{t.expectations}</Label>
                  <Textarea
                    id="expectations"
                    value={expectations}
                    onChange={(e) => setExpectations(e.target.value)}
                    placeholder={t.expectationsPlaceholder}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? t.submitting : t.submitButton}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
