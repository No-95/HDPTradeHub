"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import MainLayout from "@/components/main-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, FileText, Globe2, TrendingUp, Users } from "lucide-react"

const translations = {
  VN: {
    title: "Market Insight",
    subtitle: "Thông tin thị trường & Phân tích chuyên sâu",
    description:
      "Cập nhật xu hướng thị trường, báo cáo ngành và dữ liệu kinh doanh giúp doanh nghiệp đưa ra quyết định chiến lược",

    // Stats
    reportsPublished: "Báo cáo đã xuất bản",
    marketsAnalyzed: "Thị trường phân tích",
    dataPoints: "Điểm dữ liệu",
    partnersWorldwide: "Đối tác toàn cầu",

    // Sections
    latestReports: "Báo Cáo Mới Nhất",
    latestReportsDesc: "Các báo cáo phân tích thị trường được cập nhật hàng tháng",

    marketTrends: "Xu Hướng Thị Trường",
    marketTrendsDesc: "Theo dõi các xu hướng kinh doanh và thương mại quốc tế",

    industryAnalysis: "Phân Tích Ngành",
    industryAnalysisDesc: "Nghiên cứu chuyên sâu về các ngành công nghiệp trọng điểm",

    // Reports
    seafoodReport: "Báo Cáo Xuất Khẩu Thủy Sản Q1/2026",
    seafoodReportDesc: "Phân tích thị trường xuất khẩu thủy sản Việt Nam sang Hàn Quốc và châu Á",
    furnitureReport: "Xu Hướng Nội Thất Toàn Cầu 2026",
    furnitureReportDesc: "Dự báo thị trường và cơ hội kinh doanh ngành nội thất",
    techReport: "Công Nghệ & Đổi Mới Sáng Tạo",
    techReportDesc: "Báo cáo về ứng dụng công nghệ trong thương mại quốc tế",
    tradeReport: "Quan Hệ Thương Mại Việt-Hàn",
    tradeReportDesc: "Phân tích chi tiết quan hệ thương mại song phương",

    downloadReport: "Tải báo cáo",
    viewAll: "Xem tất cả",
    subscribeTitle: "Đăng Ký Nhận Báo Cáo",
    subscribeDesc: "Nhận các báo cáo và phân tích thị trường mới nhất qua email",
    emailPlaceholder: "Nhập email của bạn",
    subscribe: "Đăng ký",

    ctaTitle: "Cần Phân Tích Chuyên Sâu?",
    ctaDesc: "Liên hệ với chúng tôi để nhận báo cáo tùy chỉnh theo nhu cầu doanh nghiệp",
    contactUs: "Liên hệ ngay",
  },
  EN: {
    title: "Market Insight",
    subtitle: "Market Intelligence & Deep Analysis",
    description: "Stay updated with market trends, industry reports and business data to make strategic decisions",

    reportsPublished: "Reports Published",
    marketsAnalyzed: "Markets Analyzed",
    dataPoints: "Data Points",
    partnersWorldwide: "Partners Worldwide",

    latestReports: "Latest Reports",
    latestReportsDesc: "Monthly updated market analysis reports",

    marketTrends: "Market Trends",
    marketTrendsDesc: "Track international business and trade trends",

    industryAnalysis: "Industry Analysis",
    industryAnalysisDesc: "In-depth research on key industries",

    seafoodReport: "Seafood Export Report Q1/2026",
    seafoodReportDesc: "Analysis of Vietnam seafood exports to Korea and Asia",
    furnitureReport: "Global Furniture Trends 2026",
    furnitureReportDesc: "Market forecast and business opportunities in furniture",
    techReport: "Technology & Innovation",
    techReportDesc: "Report on technology applications in international trade",
    tradeReport: "Vietnam-Korea Trade Relations",
    tradeReportDesc: "Detailed analysis of bilateral trade relations",

    downloadReport: "Download Report",
    viewAll: "View All",
    subscribeTitle: "Subscribe to Reports",
    subscribeDesc: "Receive the latest market reports and analysis via email",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",

    ctaTitle: "Need Custom Analysis?",
    ctaDesc: "Contact us for customized reports tailored to your business needs",
    contactUs: "Contact Us",
  },
  KR: {
    title: "Market Insight",
    subtitle: "시장 정보 & 심층 분석",
    description: "전략적 결정을 위한 시장 동향, 산업 보고서 및 비즈니스 데이터 업데이트",

    reportsPublished: "발행된 보고서",
    marketsAnalyzed: "분석된 시장",
    dataPoints: "데이터 포인트",
    partnersWorldwide: "글로벌 파트너",

    latestReports: "최신 보고서",
    latestReportsDesc: "월간 업데이트되는 시장 분석 보고서",

    marketTrends: "시장 동향",
    marketTrendsDesc: "국제 비즈니스 및 무역 동향 추적",

    industryAnalysis: "산업 분석",
    industryAnalysisDesc: "주요 산업에 대한 심층 연구",

    seafoodReport: "수산물 수출 보고서 Q1/2026",
    seafoodReportDesc: "베트남 수산물의 한국 및 아시아 수출 분석",
    furnitureReport: "글로벌 가구 트렌드 2026",
    furnitureReportDesc: "가구 시장 전망 및 비즈니스 기회",
    techReport: "기술 & 혁신",
    techReportDesc: "국제 무역에서의 기술 응용 보고서",
    tradeReport: "베트남-한국 무역 관계",
    tradeReportDesc: "양국 무역 관계에 대한 상세 분석",

    downloadReport: "보고서 다운로드",
    viewAll: "모두 보기",
    subscribeTitle: "보고서 구독",
    subscribeDesc: "이메일로 최신 시장 보고서 및 분석을 받아보세요",
    emailPlaceholder: "이메일 입력",
    subscribe: "구독",

    ctaTitle: "맞춤 분석이 필요하신가요?",
    ctaDesc: "비즈니스 요구에 맞는 맞춤형 보고서를 위해 문의하세요",
    contactUs: "문의하기",
  },
}

export default function MarketInsightPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const heroRef = useRef<HTMLHeadingElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "0px 0px -80px 0px" })

  const reportsRef = useRef<HTMLHeadingElement>(null)
  const isReportsInView = useInView(reportsRef, { once: true, margin: "0px 0px -80px 0px" })

  const analysisRef = useRef<HTMLHeadingElement>(null)
  const isAnalysisInView = useInView(analysisRef, { once: true, margin: "0px 0px -80px 0px" })

  const stats = [
    { value: "150+", label: t.reportsPublished, icon: FileText },
    { value: "25+", label: t.marketsAnalyzed, icon: Globe2 },
    { value: "10K+", label: t.dataPoints, icon: BarChart3 },
    { value: "500+", label: t.partnersWorldwide, icon: Users },
  ]

  const reports = [
    {
      title: t.seafoodReport,
      description: t.seafoodReportDesc,
      category: "Seafood",
      date: "Jan 2026",
      image: "/images/gettyimages-1661448219-2048x2048.jpg",
    },
    {
      title: t.furnitureReport,
      description: t.furnitureReportDesc,
      category: "Furniture",
      date: "Feb 2026",
      image: "/elegant-modern-furniture-showroom-with-wooden-chai.jpg",
    },
    {
      title: t.techReport,
      description: t.techReportDesc,
      category: "Technology",
      date: "Mar 2026",
      image: "/images/78a3bcf5-fa86-41f6-bca3-2f97ce980501.png",
    },
    {
      title: t.tradeReport,
      description: t.tradeReportDesc,
      category: "Trade",
      date: "Apr 2026",
      image: "/international-business-expansion-korea.jpg",
    },
  ]

  const trends = [
    {
      title: t.marketTrends,
      description: t.marketTrendsDesc,
      image: "/images/market-insight-background.png",
    },
    {
      title: t.industryAnalysis,
      description: t.industryAnalysisDesc,
      image: "/images/exclusive-business-selection.jpg",
    },
  ]

  const analysisBlocks = [
    {
      title: lang === "VN" ? "Xu hướng xuất khẩu" : lang === "KR" ? "수출 트렌드" : "Export trends",
      description:
        lang === "VN"
          ? "Theo dõi các nhóm hàng đang tăng trưởng mạnh tại châu Á và thị trường quốc tế."
          : lang === "KR"
            ? "아시아 및 글로벌 시장에서 빠르게 성장하는 제품군을 추적합니다."
            : "Track fast-growing product groups across Asia and global markets.",
      image: "/images/gettyimages-1661448219-2048x2048.jpg",
    },
    {
      title: lang === "VN" ? "Cơ hội nội thất" : lang === "KR" ? "가구 기회" : "Furniture opportunities",
      description:
        lang === "VN"
          ? "Đánh giá nhu cầu theo phân khúc, kênh bán và xu hướng thiết kế."
          : lang === "KR"
            ? "세그먼트, 판매 채널 및 디자인 트렌드에 따른 수요를 분석합니다."
            : "Assess demand by segment, channel and design direction.",
      image: "/elegant-modern-furniture-showroom-with-wooden-chai.jpg",
    },
    {
      title: lang === "VN" ? "Đổi mới công nghệ" : lang === "KR" ? "기술 혁신" : "Tech innovation",
      description:
        lang === "VN"
          ? "Các mô hình công nghệ hỗ trợ chuỗi cung ứng và giao thương xuyên biên giới."
          : lang === "KR"
            ? "공급망과 국경 간 무역을 지원하는 기술 모델입니다."
            : "Technology models supporting supply chains and cross-border trade.",
      image: "/images/78a3bcf5-fa86-41f6-bca3-2f97ce980501.png",
    },
  ]

  const heroWords = t.title.split(" ")

  return (
    <MainLayout>
      <div style={{ backgroundColor: "#F5F3ED" }}>
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[-10%] top-[-12%] h-80 w-80 rounded-full bg-[#FF4F11]/10 blur-3xl" />
            <div className="absolute right-[-12%] top-12 h-96 w-96 rounded-full bg-[#d8d2c4]/80 blur-3xl" />
          </div>

          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
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
                  {heroWords.map((word, wordIndex) => (
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
                    className="inline-flex items-center gap-3 rounded-full bg-[#FF4F11] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#eb460d]"
                  >
                    {lang === "VN" ? "Yêu cầu báo cáo" : lang === "KR" ? "보고서 요청" : "Request reports"}
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <a
                    href="#reports"
                    className="inline-flex items-center gap-3 rounded-full border border-[#d6d3cc] bg-white/60 px-8 py-4 text-base font-semibold text-[#141414] transition-colors hover:border-[#141414]/20 hover:bg-white/90"
                  >
                    {t.viewAll}
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
                      src="/images/market-insight-background.png"
                      alt="Market insight hero visual"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-white">
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] backdrop-blur-sm">
                        HDP Insights
                      </span>
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] backdrop-blur-sm">
                        2026
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                        <div className="text-2xl font-semibold">150+</div>
                        <div className="mt-1 text-sm text-white/80">{t.reportsPublished}</div>
                      </div>
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                        <div className="text-2xl font-semibold">25+</div>
                        <div className="mt-1 text-sm text-white/80">{t.marketsAnalyzed}</div>
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

        <section id="reports" className="relative overflow-hidden py-24 md:py-32">
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
                  {t.latestReports}
                </motion.span>
                <motion.h2
                  ref={reportsRef}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 font-serif text-[2.3rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl"
                >
                  {t.latestReportsDesc}
                </motion.h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#5a5a5a]">
                {lang === "VN"
                  ? "Bộ báo cáo chọn lọc được thiết kế theo phong cách trình bày của homepage: rõ ràng, trực quan và dễ theo dõi."
                  : lang === "KR"
                    ? "홈페이지 스타일로 구성된 선별 보고서 세트입니다. 명확하고 직관적으로 구성되었습니다."
                    : "A curated report set presented with the homepage's clean, visual-first rhythm."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {reports.map((report, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-[2rem] border border-[#d6d3cc] bg-white/80 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e2da]">
                    <Image src={report.image} alt={report.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-[#FF4F11] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {report.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#777]">
                      <Calendar className="h-3.5 w-3.5" />
                      {report.date}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[#141414] transition-colors duration-300 group-hover:text-[#FF4F11]">
                      {report.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5a5a5a]">{report.description}</p>
                    <a
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#141414] transition-colors duration-300 group-hover:text-[#FF4F11]"
                    >
                      {t.downloadReport}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
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
                  {t.marketTrends}
                </motion.span>
                <h2 className="mt-4 font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl">
                  {t.marketTrendsDesc}
                </h2>

                <div className="mt-8 space-y-4 text-[#232323]">
                  {[
                    lang === "VN" ? "Dữ liệu cập nhật theo tháng" : lang === "KR" ? "월별 업데이트 데이터" : "Monthly updated data",
                    lang === "VN" ? "Theo dõi hành vi thị trường" : lang === "KR" ? "시장 행동 추적" : "Track market behavior",
                    lang === "VN" ? "Tập trung vào cơ hội tăng trưởng" : lang === "KR" ? "성장 기회 집중" : "Focused on growth opportunities",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4F11]/15 text-[#FF4F11]">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <span className="text-sm md:text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trends.map((item, index) => (
                  <div key={index} className="group overflow-hidden rounded-[1.75rem] border border-[#d6d3cc] bg-white/80 shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e2da]">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-[#141414]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5a5a5a]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                  {t.industryAnalysis}
                </motion.span>
                <motion.h2
                  ref={analysisRef}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 font-serif text-[2.3rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl"
                >
                  {t.industryAnalysisDesc}
                </motion.h2>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {analysisBlocks.map((item, index) => (
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
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-[#141414]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5a5a5a]">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center rounded-[2rem] border border-[#d6d3cc] bg-gradient-to-br from-white/90 via-[#efe8d8]/85 to-white/90 p-8 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md md:p-12">
              <div>
                <h2 className="font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl">
                  {t.subscribeTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a5a5a]">{t.subscribeDesc}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-xl">
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="flex-1 rounded-full border border-[#d6d3cc] bg-white/80 px-5 py-4 text-[#141414] placeholder:text-[#8a8478] outline-none transition-colors focus:border-[#141414]/25"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4F11] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#eb460d]">
                    {t.subscribe}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "/images/gettyimages-1661448219-2048x2048.jpg",
                  "/elegant-modern-furniture-showroom-with-wooden-chai.jpg",
                  "/images/78a3bcf5-fa86-41f6-bca3-2f97ce980501.png",
                  "/international-business-expansion-korea.jpg",
                ].map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e5e2da] shadow-lg">
                    <Image src={image} alt={`Market subscribe visual ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 pb-24">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 text-center">
            <div className="rounded-[2rem] border border-[#d6d3cc] bg-white/80 p-8 shadow-[0_10px_40px_rgba(20,20,20,0.05)] backdrop-blur-md md:p-12">
              <h2 className="font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] text-[#141414] sm:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5a5a5a]">{t.ctaDesc}</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF4F11] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#eb460d]"
              >
                {t.contactUs}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
