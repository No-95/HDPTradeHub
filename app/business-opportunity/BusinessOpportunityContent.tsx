"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import MainLayout from "@/components/main-layout"
import { ArrowRight, Building2, CheckCircle2, Globe2, Handshake, TrendingUp, Users } from "lucide-react"

const translations = {
  VN: {
    title: "Cơ Hội Hợp Tác",
    subtitle: "Kết nối & Phát triển cùng HDP Holdings",
    description: "Khám phá các cơ hội hợp tác kinh doanh, đầu tư và mở rộng thị trường quốc tế",

    // Stats
    partnersConnected: "Đối tác kết nối",
    successfulDeals: "Thương vụ thành công",
    countriesReach: "Quốc gia",
    yearsExperience: "Năm kinh nghiệm",

    // Partnership Types
    partnershipTitle: "Hình Thức Hợp Tác",
    partnershipDesc: "Chọn hình thức hợp tác phù hợp với nhu cầu doanh nghiệp của bạn",

    investmentPartner: "Đối Tác Đầu Tư",
    investmentPartnerDesc: "Đầu tư vào các dự án tiềm năng tại Việt Nam và Hàn Quốc",
    investmentFeatures: ["Đầu tư trực tiếp", "Liên doanh", "M&A"],

    tradePartner: "Đối Tác Thương Mại",
    tradePartnerDesc: "Xuất nhập khẩu hàng hóa giữa Việt Nam và thị trường quốc tế",
    tradeFeatures: ["Xuất khẩu", "Nhập khẩu", "Phân phối"],

    strategicPartner: "Đối Tác Chiến Lược",
    strategicPartnerDesc: "Hợp tác dài hạn trong các lĩnh vực trọng điểm",
    strategicFeatures: ["Công nghệ", "Sản xuất", "Dịch vụ"],

    // Industries
    industriesTitle: "Ngành Nghề Trọng Điểm",
    industriesDesc: "Các lĩnh vực chúng tôi đang tích cực tìm kiếm đối tác",

    seafood: "Thủy Sản",
    seafoodDesc: "Xuất khẩu thủy sản chất lượng cao",
    furniture: "Nội Thất",
    furnitureDesc: "Đồ gỗ và nội thất cao cấp",
    technology: "Công Nghệ",
    technologyDesc: "Giải pháp công nghệ & AI",
    manufacturing: "Sản Xuất",
    manufacturingDesc: "Máy móc & thiết bị công nghiệp",

    // CTA
    ctaTitle: "Sẵn Sàng Hợp Tác?",
    ctaDesc: "Đăng ký để nhận tư vấn và thông tin chi tiết về các cơ hội hợp tác",

    formName: "Họ và tên",
    formEmail: "Email",
    formCompany: "Tên công ty",
    formPhone: "Số điện thoại",
    formInterest: "Lĩnh vực quan tâm",
    formMessage: "Mô tả nhu cầu hợp tác",
    submitForm: "Gửi Yêu Cầu",

    successMessage: "Cảm ơn bạn! Chúng tôi sẽ liên hệ trong 24 giờ.",
  },
  EN: {
    title: "Business Opportunity",
    subtitle: "Connect & Grow with HDP Holdings",
    description: "Discover business partnership, investment and international market expansion opportunities",

    partnersConnected: "Partners Connected",
    successfulDeals: "Successful Deals",
    countriesReach: "Countries",
    yearsExperience: "Years Experience",

    partnershipTitle: "Partnership Types",
    partnershipDesc: "Choose the partnership model that fits your business needs",

    investmentPartner: "Investment Partner",
    investmentPartnerDesc: "Invest in potential projects in Vietnam and Korea",
    investmentFeatures: ["Direct Investment", "Joint Venture", "M&A"],

    tradePartner: "Trade Partner",
    tradePartnerDesc: "Import/export goods between Vietnam and international markets",
    tradeFeatures: ["Export", "Import", "Distribution"],

    strategicPartner: "Strategic Partner",
    strategicPartnerDesc: "Long-term cooperation in key sectors",
    strategicFeatures: ["Technology", "Manufacturing", "Services"],

    industriesTitle: "Key Industries",
    industriesDesc: "Sectors we are actively seeking partners",

    seafood: "Seafood",
    seafoodDesc: "High-quality seafood export",
    furniture: "Furniture",
    furnitureDesc: "Premium wood & furniture",
    technology: "Technology",
    technologyDesc: "Tech & AI solutions",
    manufacturing: "Manufacturing",
    manufacturingDesc: "Machinery & industrial equipment",

    ctaTitle: "Ready to Partner?",
    ctaDesc: "Register to receive consultation and detailed information about partnership opportunities",

    formName: "Full Name",
    formEmail: "Email",
    formCompany: "Company Name",
    formPhone: "Phone Number",
    formInterest: "Area of Interest",
    formMessage: "Describe your partnership needs",
    submitForm: "Submit Request",

    successMessage: "Thank you! We will contact you within 24 hours.",
  },
  KR: {
    title: "비즈니스 기회",
    subtitle: "HDP Holdings와 함께 연결하고 성장하세요",
    description: "비즈니스 파트너십, 투자 및 국제 시장 확장 기회를 발견하세요",

    partnersConnected: "연결된 파트너",
    successfulDeals: "성공적인 거래",
    countriesReach: "국가",
    yearsExperience: "경험 년수",

    partnershipTitle: "파트너십 유형",
    partnershipDesc: "비즈니스 요구에 맞는 파트너십 모델을 선택하세요",

    investmentPartner: "투자 파트너",
    investmentPartnerDesc: "베트남과 한국의 잠재적 프로젝트에 투자",
    investmentFeatures: ["직접 투자", "합작 투자", "M&A"],

    tradePartner: "무역 파트너",
    tradePartnerDesc: "베트남과 국제 시장 간 상품 수출입",
    tradeFeatures: ["수출", "수입", "유통"],

    strategicPartner: "전략적 파트너",
    strategicPartnerDesc: "주요 분야에서의 장기 협력",
    strategicFeatures: ["기술", "제조", "서비스"],

    industriesTitle: "핵심 산업",
    industriesDesc: "파트너를 적극적으로 찾고 있는 분야",

    seafood: "수산물",
    seafoodDesc: "고품질 수산물 수출",
    furniture: "가구",
    furnitureDesc: "프리미엄 목재 및 가구",
    technology: "기술",
    technologyDesc: "기술 및 AI 솔루션",
    manufacturing: "제조",
    manufacturingDesc: "기계 및 산업 장비",

    ctaTitle: "파트너가 될 준비가 되셨나요?",
    ctaDesc: "파트너십 기회에 대한 상담 및 상세 정보를 받으려면 등록하세요",

    formName: "성명",
    formEmail: "이메일",
    formCompany: "회사명",
    formPhone: "전화번호",
    formInterest: "관심 분야",
    formMessage: "파트너십 요구 사항 설명",
    submitForm: "요청 제출",

    successMessage: "감사합니다! 24시간 이내에 연락드리겠습니다.",
  },
}

export default function BusinessOpportunityPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const heroRef = useRef<HTMLHeadingElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "0px 0px -80px 0px" })

  const partnershipRef = useRef<HTMLHeadingElement>(null)
  const isPartnershipInView = useInView(partnershipRef, { once: true, margin: "0px 0px -80px 0px" })

  const sectorRef = useRef<HTMLHeadingElement>(null)
  const isSectorInView = useInView(sectorRef, { once: true, margin: "0px 0px -80px 0px" })

  const stats = [
    { value: "300+", label: t.partnersConnected, icon: Users },
    { value: "150+", label: t.successfulDeals, icon: TrendingUp },
    { value: "15+", label: t.countriesReach, icon: Globe2 },
    { value: "10+", label: t.yearsExperience, icon: Building2 },
  ]

  const partnerships = [
    {
      title: t.investmentPartner,
      description: t.investmentPartnerDesc,
      features: t.investmentFeatures,
      image: "/business-investment-program-commitment.jpg",
    },
    {
      title: t.tradePartner,
      description: t.tradePartnerDesc,
      features: t.tradeFeatures,
      image: "/images/business-partnership-deal.jpg",
    },
    {
      title: t.strategicPartner,
      description: t.strategicPartnerDesc,
      features: t.strategicFeatures,
      image: "/images/business-networking-event.png",
    },
  ]

  const sectors = [
    {
      title: t.seafood,
      description: t.seafoodDesc,
      image: "/seafood-export-business-vietnam.jpg",
    },
    {
      title: t.furniture,
      description: t.furnitureDesc,
      image: "/images/exclusive-business-selection.jpg",
    },
    {
      title: t.technology,
      description: t.technologyDesc,
      image: "/images/korea-agreement-signing.jpg",
    },
    {
      title: t.manufacturing,
      description: t.manufacturingDesc,
      image: "/images/business-networking-event.png",
    },
  ]

  const ctaLabel =
    lang === "VN" ? "Liên hệ ngay" : lang === "KR" ? "문의하기" : "Contact Us"

  return (
    <MainLayout>
      <div style={{ backgroundColor: "#F5F3ED" }}>
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#FF4F11]/10 blur-3xl" />
            <div className="absolute right-[-8%] top-10 h-96 w-96 rounded-full bg-[#d8d2c4]/70 blur-3xl" />
          </div>

          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.subtitle}
                </motion.span>

                <h1
                  ref={heroRef}
                  aria-label={t.title}
                  className="mt-6 font-serif text-[2.4rem] leading-[1.08] tracking-[-0.03em] text-[#141414] sm:text-5xl md:text-6xl lg:text-[5.2rem]"
                >
                  {t.title.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="mr-[0.22em] inline-flex overflow-hidden align-top">
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={`${wordIndex}-${charIndex}`}
                          initial={{ y: "115%" }}
                          animate={isHeroInView ? { y: "0%" } : { y: "115%" }}
                          transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                            delay: wordIndex * 0.03 + charIndex * 0.01,
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-2xl text-lg leading-[1.85] text-[#232323] md:text-[1.05rem]"
                >
                  {t.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#FF4F11] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#eb460d]"
                  >
                    <span className="relative block h-6 overflow-hidden">{ctaLabel}</span>
                    <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/45 bg-white/10">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
                      <ArrowRight className="absolute h-5 w-5 -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                  </Link>

                  <a
                    href="#partnerships"
                    className="inline-flex items-center gap-3 rounded-full border border-[#d6d3cc] bg-white/60 px-8 py-4 text-base font-semibold text-[#141414] transition-colors hover:border-[#141414]/20 hover:bg-white/90"
                  >
                    {lang === "VN" ? "Xem lĩnh vực" : lang === "KR" ? "영역 보기" : "View sectors"}
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="rounded-[2rem] border border-[#d6d3cc] bg-white/70 p-3 shadow-2xl backdrop-blur-md">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e5e2da]">
                    <Image
                      src="/images/business-partnership-deal.jpg"
                      alt="Business opportunity hero visual"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-white">
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] backdrop-blur-sm">
                        HDP Holdings
                      </span>
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] backdrop-blur-sm">
                        2026
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                        <div className="text-2xl font-semibold">300+</div>
                        <div className="mt-1 text-sm text-white/80">{t.partnersConnected}</div>
                      </div>
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                        <div className="text-2xl font-semibold">150+</div>
                        <div className="mt-1 text-sm text-white/80">{t.successfulDeals}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-[#d6d3cc] bg-white/75 p-6 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4F11]/15 text-[#FF4F11]">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-3xl font-semibold tracking-tight text-[#141414]">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-[#5a5a5a]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="partnerships" className="relative overflow-hidden py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.partnershipTitle}
                </motion.span>
                <motion.h2
                  ref={partnershipRef}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 font-serif text-[2.3rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl"
                >
                  {t.partnershipDesc}
                </motion.h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#5a5a5a]">
                {lang === "VN"
                  ? "Ba mô hình hợp tác linh hoạt, hỗ trợ doanh nghiệp kết nối thị trường, đầu tư và tăng trưởng quốc tế."
                  : lang === "KR"
                    ? "시장 연결, 투자 및 국제 성장을 지원하는 유연한 파트너십 모델입니다."
                    : "Flexible partnership models that support market access, investment and international growth."}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {partnerships.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-[2rem] border border-[#d6d3cc] bg-white/80 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e2da]">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4F11]/15 text-[#FF4F11]">
                        {index === 0 ? <TrendingUp className="h-6 w-6" /> : index === 1 ? <Globe2 className="h-6 w-6" /> : <Handshake className="h-6 w-6" />}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#141414]">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5a5a5a]">{item.description}</p>
                    <ul className="mt-6 space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-[#232323]">
                          <CheckCircle2 className="h-4 w-4 text-[#FF4F11]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F5F3ED] py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.industriesTitle}
                </motion.span>
                <motion.h2
                  ref={sectorRef}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 font-serif text-[2.3rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl"
                >
                  {t.industriesDesc}
                </motion.h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {sectors.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#d6d3cc] bg-white/80 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e2da]">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/80">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center rounded-[2rem] border border-[#d6d3cc] bg-gradient-to-br from-white/90 via-[#efe8d8]/85 to-white/90 p-8 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md md:p-12">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.ctaTitle}
                </motion.span>
                <h2 className="mt-4 font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl">
                  {t.ctaDesc}
                </h2>

                <div className="mt-8 space-y-4 text-[#232323]">
                  {[
                    lang === "VN" ? "Kết nối đối tác phù hợp hơn" : lang === "KR" ? "적합한 파트너와 연결" : "Match with the right partners",
                    lang === "VN" ? "Mở rộng thị trường nhanh hơn" : lang === "KR" ? "더 빠른 시장 확장" : "Accelerate market expansion",
                    lang === "VN" ? "Hỗ trợ tư vấn chuyên sâu" : lang === "KR" ? "전문 자문 지원" : "Expert advisory support",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4F11]/15 text-[#FF4F11]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-sm md:text-base">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[#FF4F11] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#eb460d]"
                  >
                    {ctaLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "/images/business-networking-event.png",
                  "/images/korea-agreement-signing.jpg",
                  "/business-investment-program-commitment.jpg",
                  "/professional-western-businessman-portrait.jpg",
                ].map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e5e2da] shadow-lg">
                    <Image src={image} alt={`Business CTA visual ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
