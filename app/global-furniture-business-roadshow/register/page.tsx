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
import { ArrowLeft, CheckCircle2, Users, Building2, Globe, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const registerTranslations = {
  EN: {
    nav: {
      home: "Home",
      aboutUs: "About Us",
      contact: "Contact",
      joinNow: "Join Now",
    },
    back: "Back to Event",
    title: "Register for Global Furniture Business Roadshow",
    subtitle: "Complete your registration to join 500+ industry professionals",
    eventInfo: {
      date: "September 15-17, 2026",
      location: "Gem Center, Ho Chi Minh City",
    },
    steps: {
      step1: "Personal Info",
      step2: "Company Details",
      step3: "Interests",
    },
    form: {
      // Step 1
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "your.email@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+84 xxx xxx xxx",
      position: "Job Title",
      positionPlaceholder: "e.g. Export Manager",
      // Step 2
      companyName: "Company Name",
      companyNamePlaceholder: "Enter company name",
      companyType: "Company Type",
      companyTypes: {
        manufacturer: "Furniture Manufacturer",
        exporter: "Exporter/Trading Company",
        buyer: "International Buyer",
        distributor: "Distributor/Retailer",
        other: "Other",
      },
      employees: "Number of Employees",
      employeeRanges: {
        small: "1-50",
        medium: "51-200",
        large: "201-500",
        enterprise: "500+",
      },
      website: "Company Website (Optional)",
      websitePlaceholder: "https://",
      taxId: "Tax ID",
      taxIdPlaceholder: "Enter your company tax ID",
      // Step 3
      interests: "What are you looking for?",
      interestOptions: {
        buyers: "Meet International Buyers",
        partners: "Find Manufacturing Partners",
        export: "Learn Export Procedures",
        trends: "Discover Market Trends",
        network: "Expand Business Network",
        showcase: "Showcase Products",
      },
      participationType: "Preferred Participation",
      participationTypes: {
        visitor: "Visitor",
        exhibitor: "Exhibitor - Display Products",
        speaker: "Speaker - Share Expertise",
        oneOnOne: "1-on-1 Trading with Partners",
      },
      specialRequests: "Special Requests or Questions",
      specialRequestsPlaceholder: "Any dietary requirements, accessibility needs, or questions...",
      agreeTerms: "I agree to the event terms and conditions",
      agreeMarketing: "Send me updates about future HDP Holdings events",
    },
    buttons: {
      next: "Continue",
      previous: "Back",
      submit: "Complete Registration",
      submitting: "Submitting...",
    },
    success: {
      title: "Registration Successful!",
      message: "Thank you for registering. We've sent a confirmation email with event details.",
      backToEvent: "Back to Event Page",
      viewSchedule: "View Event Schedule",
    },
  },
  VN: {
    nav: {
      home: "Trang Chủ",
      aboutUs: "Về Chúng Tôi",
      contact: "Liên Hệ",
      joinNow: "Đăng Ký Ngay",
    },
    back: "Quay lại sự kiện",
    title: "Đăng Ký Tham Gia Global Furniture Business Roadshow",
    subtitle: "Hoàn tất đăng ký để tham gia cùng 500+ chuyên gia ngành",
    eventInfo: {
      date: "15-17 Tháng 9, 2026",
      location: "Gem Center, TP. Hồ Chí Minh",
    },
    steps: {
      step1: "Thông tin cá nhân",
      step2: "Thông tin công ty",
      step3: "Quan tâm",
    },
    form: {
      // Step 1
      fullName: "Họ và Tên",
      fullNamePlaceholder: "Nhập họ và tên của bạn",
      email: "Địa chỉ Email",
      emailPlaceholder: "email.cua.ban@congty.com",
      phone: "Số Điện Thoại",
      phonePlaceholder: "+84 xxx xxx xxx",
      position: "Chức Vụ",
      positionPlaceholder: "VD: Giám đốc Xuất khẩu",
      // Step 2
      companyName: "Tên Công Ty",
      companyNamePlaceholder: "Nhập tên công ty",
      companyType: "Loại Hình Công Ty",
      companyTypes: {
        manufacturer: "Nhà Sản Xuất Nội Thất",
        exporter: "Công Ty Xuất Khẩu/Thương Mại",
        buyer: "Nhà Mua Quốc Tế",
        distributor: "Nhà Phân Phối/Bán Lẻ",
        other: "Khác",
      },
      employees: "Số Lượng Nhân Viên",
      employeeRanges: {
        small: "1-50",
        medium: "51-200",
        large: "201-500",
        enterprise: "500+",
      },
      website: "Website Công Ty (Tùy chọn)",
      websitePlaceholder: "https://",
      taxId: "Mã Số Thuế",
      taxIdPlaceholder: "Nhập mã số thuế công ty",
      // Step 3
      interests: "Bạn đang tìm kiếm điều gì?",
      interestOptions: {
        buyers: "Gặp gỡ Buyer Quốc Tế",
        partners: "Tìm Đối Tác Sản Xuất",
        export: "Học Thủ Tục Xuất Khẩu",
        trends: "Khám Phá Xu Hướng Thị Trường",
        network: "Mở Rộng Mạng Lưới Kinh Doanh",
        showcase: "Giới Thiệu Sản Phẩm",
      },
      participationType: "Hình Thức Tham Gia Mong Muốn",
      participationTypes: {
        visitor: "Khách Tham Quan",
        exhibitor: "Nhà Trưng Bày - Trưng Bày Sản Phẩm",
        speaker: "Diễn Giả - Chia Sẻ Chuyên Môn",
        oneOnOne: "Giao Thương 1-1 Với Đối Tác",
      },
      specialRequests: "Yêu Cầu Đặc Biệt hoặc Câu Hỏi",
      specialRequestsPlaceholder: "Yêu cầu về ẩm thực, hỗ trợ tiếp cận, hoặc câu hỏi...",
      agreeTerms: "Tôi đồng ý với điều khoản và điều kiện của sự kiện",
      agreeMarketing: "Gửi cho tôi thông tin về các sự kiện HDP Holdings trong tương lai",
    },
    buttons: {
      next: "Tiếp Tục",
      previous: "Quay Lại",
      submit: "Hoàn Tất Đăng Ký",
      submitting: "Đang gửi...",
    },
    success: {
      title: "Đăng Ký Thành Công!",
      message: "Cảm ơn bạn đã đăng ký. Chúng tôi đã gửi email xác nhận với thông tin chi tiết sự kiện.",
      backToEvent: "Quay Lại Trang Sự Kiện",
      viewSchedule: "Xem Lịch Trình Sự Kiện",
    },
  },
  KR: {
    nav: {
      home: "홈",
      aboutUs: "회사 소개",
      contact: "연락처",
      joinNow: "지금 등록",
    },
    back: "이벤트로 돌아가기",
    title: "글로벌 가구 비즈니스 로드쇼 등록",
    subtitle: "500명 이상의 업계 전문가와 함께하세요",
    eventInfo: {
      date: "2026년 9월 15-17일",
      location: "젬 센터, 호치민시",
    },
    steps: {
      step1: "개인 정보",
      step2: "회사 정보",
      step3: "관심사",
    },
    form: {
      fullName: "성함",
      fullNamePlaceholder: "성함을 입력하세요",
      email: "이메일 주소",
      emailPlaceholder: "your.email@company.com",
      phone: "전화번호",
      phonePlaceholder: "+84 xxx xxx xxx",
      position: "직책",
      positionPlaceholder: "예: 수출 매니저",
      companyName: "회사명",
      companyNamePlaceholder: "회사명을 입력하세요",
      companyType: "회사 유형",
      companyTypes: {
        manufacturer: "가구 제조업체",
        exporter: "수출/무역 회사",
        buyer: "국제 바이어",
        distributor: "유통/소매업체",
        other: "기타",
      },
      employees: "직원 수",
      employeeRanges: {
        small: "1-50",
        medium: "51-200",
        large: "201-500",
        enterprise: "500+",
      },
      website: "회사 웹사이트 (선택)",
      websitePlaceholder: "https://",
      taxId: "세금 ID",
      taxIdPlaceholder: "회사 세금 ID 입력",
      interests: "무엇을 찾고 계신가요?",
      interestOptions: {
        buyers: "국제 바이어 만남",
        partners: "제조 파트너 찾기",
        export: "수출 절차 학습",
        trends: "시장 트렌드 파악",
        network: "비즈니스 네트워크 확장",
        showcase: "제품 전시",
      },
      participationType: "희망 참가 유형",
      participationTypes: {
        visitor: "방문객",
        exhibitor: "전시자 - 제품 전시",
        speaker: "연사 - 전문성 공유",
        oneOnOne: "파트너와의 1:1 거래",
      },
      specialRequests: "특별 요청 또는 질문",
      specialRequestsPlaceholder: "식이 요구 사항, 접근성 필요 사항 또는 질문...",
      agreeTerms: "이벤트 이용약관에 ��의합니다",
      agreeMarketing: "향후 HDP Holdings 이벤트 정보를 받겠습니다",
    },
    buttons: {
      next: "계속",
      previous: "뒤로",
      submit: "등록 완료",
      submitting: "제출 중...",
    },
    success: {
      title: "등록 완료!",
      message: "등록해 주셔서 감사합니다. 이벤트 세부 정보가 포함된 확인 이메일을 보내드렸습니다.",
      backToEvent: "이벤트 페이지로 돌아가기",
      viewSchedule: "이벤트 일정 보기",
    },
  },
}

export default function FurnitureRegisterPage() {
  const { lang, setLang } = useLanguage()
  const t = registerTranslations[lang] || registerTranslations.EN

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    companyName: "",
    companyType: "",
    employees: "",
    website: "",
    taxId: "",
    interests: [] as string[],
    participationType: "",
    specialRequests: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleInterest = (interest: string) => {
    const current = formData.interests
    if (current.includes(interest)) {
      updateFormData(
        "interests",
        current.filter((i) => i !== interest),
      )
    } else {
      updateFormData("interests", [...current, interest])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/furniture-roadshow/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit registration")
      }

      setIsSubmitting(false)
      setIsSuccess(true)
    } catch (error) {
      console.error("[v0] Error submitting registration:", error)
      alert("Failed to submit registration. Please try again.")
      setIsSubmitting(false)
    }
  }

  const canProceedStep1 = formData.fullName && formData.email && formData.phone && formData.position
  const canProceedStep2 = formData.companyName && formData.companyType && formData.employees
  const canSubmit = formData.interests.length > 0 && formData.participationType && formData.agreeTerms

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/furniture-roadshow-register-bg.png"
            alt="Furniture business networking background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/50">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-amber-950 mb-4">{t.success.title}</h1>
          <p className="text-amber-800/70 mb-8">{t.success.message}</p>
          <div className="space-y-3">
            <Link href="/global-furniture-business-roadshow">
              <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">{t.success.backToEvent}</Button>
            </Link>
            <Link href="/global-furniture-business-roadshow#agenda">
              <Button
                variant="outline"
                className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 bg-transparent"
              >
                {t.success.viewSchedule}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/furniture-roadshow-register-bg.png"
          alt="Furniture business networking background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16">
            <Link href="/global-furniture-business-roadshow" className="flex items-center gap-2">
              <Image src="/images/hdp-logo.png" alt="HDP Holdings" width={120} height={40} className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors">
                {t.nav.home}
              </Link>
              <Link
                href="/about-us"
                className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors"
              >
                {t.nav.aboutUs}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLang(lang === "EN" ? "VN" : lang === "VN" ? "KR" : "EN")}
                className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors"
              >
                {lang}
              </button>
              <Button className="bg-amber-800 hover:bg-amber-900 text-white rounded-full px-6" disabled>
                {t.nav.joinNow}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Link */}
          <Link
            href="/global-furniture-business-roadshow"
            className="inline-flex items-center gap-2 text-white hover:text-amber-200 mb-8 transition-colors drop-shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/50">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-950 mb-2">{t.title}</h1>
                <p className="text-amber-800/70 mb-8">{t.subtitle}</p>

                {/* Progress Steps */}
                <div className="flex items-center gap-4 mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center gap-2 flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep >= step ? "bg-amber-800 text-white" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {step}
                      </div>
                      <span
                        className={`text-sm hidden sm:block ${currentStep >= step ? "text-amber-900" : "text-amber-600"}`}
                      >
                        {step === 1 ? t.steps.step1 : step === 2 ? t.steps.step2 : t.steps.step3}
                      </span>
                      {step < 3 && (
                        <div className={`flex-1 h-0.5 ${currentStep > step ? "bg-amber-800" : "bg-amber-100"}`} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-amber-900">
                            {t.form.fullName} *
                          </Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => updateFormData("fullName", e.target.value)}
                            placeholder={t.form.fullNamePlaceholder}
                            className="border-amber-200 focus:border-amber-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-amber-900">
                            {t.form.email} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder={t.form.emailPlaceholder}
                            className="border-amber-200 focus:border-amber-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-amber-900">
                            {t.form.phone} *
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            placeholder={t.form.phonePlaceholder}
                            className="border-amber-200 focus:border-amber-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position" className="text-amber-900">
                            {t.form.position} *
                          </Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => updateFormData("position", e.target.value)}
                            placeholder={t.form.positionPlaceholder}
                            className="border-amber-200 focus:border-amber-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Company Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-amber-900">
                          {t.form.companyName} *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => updateFormData("companyName", e.target.value)}
                          placeholder={t.form.companyNamePlaceholder}
                          className="border-amber-200 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-amber-900">{t.form.companyType} *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(t.form.companyTypes).map(([key, label]) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => updateFormData("companyType", key)}
                              className={`p-3 text-sm rounded-lg border transition-colors ${
                                formData.companyType === key
                                  ? "border-amber-800 bg-amber-50 text-amber-900"
                                  : "border-amber-200 hover:border-amber-400 text-amber-700"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-amber-900">{t.form.employees} *</Label>
                        <div className="grid grid-cols-4 gap-3">
                          {Object.entries(t.form.employeeRanges).map(([key, label]) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => updateFormData("employees", key)}
                              className={`p-3 text-sm rounded-lg border transition-colors ${
                                formData.employees === key
                                  ? "border-amber-800 bg-amber-50 text-amber-900"
                                  : "border-amber-200 hover:border-amber-400 text-amber-700"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-amber-900">
                          {t.form.website}
                        </Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => updateFormData("website", e.target.value)}
                          placeholder={t.form.websitePlaceholder}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxId" className="text-amber-900">
                          {t.form.taxId}
                        </Label>
                        <Input
                          id="taxId"
                          value={formData.taxId}
                          onChange={(e) => updateFormData("taxId", e.target.value)}
                          placeholder={t.form.taxIdPlaceholder}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Interests & Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="space-y-2">
                        <Label className="text-amber-900">{t.form.interests} *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(t.form.interestOptions).map(([key, label]) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => toggleInterest(key)}
                              className={`p-4 text-sm rounded-lg border text-left transition-colors ${
                                formData.interests.includes(key)
                                  ? "border-amber-800 bg-amber-50 text-amber-900"
                                  : "border-amber-200 hover:border-amber-400 text-amber-700"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-amber-900">{t.form.participationType} *</Label>
                        <div className="grid gap-3">
                          {Object.entries(t.form.participationTypes).map(([key, label]) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => updateFormData("participationType", key)}
                              className={`p-4 text-sm rounded-lg border text-left transition-colors ${
                                formData.participationType === key
                                  ? "border-amber-800 bg-amber-50 text-amber-900"
                                  : "border-amber-200 hover:border-amber-400 text-amber-700"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests" className="text-amber-900">
                          {t.form.specialRequests}
                        </Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => updateFormData("specialRequests", e.target.value)}
                          placeholder={t.form.specialRequestsPlaceholder}
                          className="border-amber-200 focus:border-amber-500 min-h-[100px]"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => updateFormData("agreeTerms", checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="agreeTerms" className="text-sm text-amber-800 cursor-pointer">
                            {t.form.agreeTerms} *
                          </Label>
                        </div>
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="agreeMarketing"
                            checked={formData.agreeMarketing}
                            onCheckedChange={(checked) => updateFormData("agreeMarketing", checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="agreeMarketing" className="text-sm text-amber-800 cursor-pointer">
                            {t.form.agreeMarketing}
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-amber-100">
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="border-amber-300 text-amber-800 hover:bg-amber-50"
                      >
                        {t.buttons.previous}
                      </Button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
                        className="bg-amber-800 hover:bg-amber-900 text-white"
                      >
                        {t.buttons.next}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!canSubmit || isSubmitting}
                        className="bg-amber-800 hover:bg-amber-900 text-white"
                      >
                        {isSubmitting ? t.buttons.submitting : t.buttons.submit}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Right - Event Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50">
                <h3 className="font-serif font-bold text-amber-950 mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-amber-800">
                    <Calendar className="w-5 h-5" />
                    <span>{t.eventInfo.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-800">
                    <MapPin className="w-5 h-5" />
                    <span>{t.eventInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-800/90 backdrop-blur-md rounded-2xl p-6 text-white border border-amber-700/50">
                <h3 className="font-serif font-bold mb-4">Why Attend?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Meet 150+ verified international buyers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm">200+ exhibitors showcasing products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Participants from 25+ countries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/50">
                <Image
                  src="/elegant-modern-furniture-showroom-with-wooden-chai.jpg"
                  alt="Furniture Showroom"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
