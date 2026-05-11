"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useContactWidget } from "@/lib/contact-widget-context"
import { translations } from "@/lib/translations"

export default function PackageDetailsPage() {
  const params = useParams()
  const packageId = params?.id as string
  const { lang } = useLanguage()
  const { openContactWidget } = useContactWidget()
  const t = translations[lang]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [packageId])

  const packages: Record<string, any> = {
    core: {
      level: "01",
      name: "CORE",
      subtitle: t.coreFullSubtitle,
      description: t.coreFullDesc,
      shortDesc: t.coreShortDesc,
      features: [
        lang === "VN"
          ? "Vé vào Korea Seafood Show 2026: Bao gồm tham dự Lễ khai mạc, International Forum và các lớp K-Cooking & Tasting."
          : lang === "KR"
            ? "Korea Seafood Show 2026 입장권: 개막식, International Forum, K-Cooking & Tasting 클래스 참가 포함."
            : "Korea Seafood Show 2026 entry: Includes Opening Ceremony, International Forum, and K-Cooking & Tasting classes.",
        lang === "VN"
          ? "Market Immersion Tour : Khảo sát thị trường và gặp gỡ đại diện cơ quan xúc tiến thương mại tại Hàn Quốc"
          : lang === "KR"
            ? "Market Immersion Tour: 시장 조사 및 한국 무역 촉진 기관 대표 만남"
            : "Market Immersion Tour: Market survey and meeting with Korea trade promotion representatives",
        lang === "VN"
          ? "Briefing & Pitch Rehearsal: Tập dượt giới thiệu doanh nghiệp và chuẩn bị nội dung trước khi tiếp cận đối tác."
          : lang === "KR"
            ? "Briefing & Pitch Rehearsal: 파트너 접근 전 기업 소개 연습 및 콘텐츠 준비"
            : "Briefing & Pitch Rehearsal: Practice company introduction and prepare content before approaching partners.",
        lang === "VN"
          ? "Tài liệu & Báo cáo: Cung cấp tài liệu chuyên sâu và báo cáo tổng quan hội chợ chung."
          : lang === "KR"
            ? "자료 & 보고서: 심층 자료 및 종합 박람회 보고서 제공"
            : "Materials & Reports: Provide in-depth materials and general expo overview report.",
        lang === "VN"
          ? "Hỗ trợ Phiên dịch chung: Phiên dịch viên hỗ trợ đoàn tại các hoạt động tập thể theo chương trình."
          : lang === "KR"
            ? "공동 통역 지원: 프로그램 단체 활동에서 통역사 지원"
            : "Shared Interpretation Support: Interpreter supports group activities per program.",
        lang === "VN"
          ? "Hỗ trợ tổ chức chung trong nội bộ đoàn (đón đoàn, hướng dẫn, di chuyển theo đoàn)."
          : lang === "KR"
            ? "내부 그룹 조직 지원 (픽업, 가이드, 그룹 이동)"
            : "Internal group organization support (pickup, guidance, group transportation).",
      ],
      price: t.referPrice,
      color: "from-blue-600 to-blue-700",
      lightColor: "bg-blue-50",
      accentColor: "text-blue-600",
      notIncluded: [
        lang === "VN"
          ? "Vé máy bay khứ hồi (Việt Nam - Seoul)"
          : lang === "KR"
            ? "왕복 항공권 (베트남 - 서울)"
            : "Round-trip airfare (Vietnam - Seoul)",
        lang === "VN"
          ? "Lệ phí Visa và Bảo hiểm du lịch"
          : lang === "KR"
            ? "비자 수수료 및 여행 보험"
            : "Visa fees and travel insurance",
        lang === "VN"
          ? "Ăn uống cá nhân ngoài chương trình"
          : lang === "KR"
            ? "프로그램 외 개인 식사"
            : "Personal meals outside the program",
        lang === "VN"
          ? "Các chi phí phát sinh riêng khác"
          : lang === "KR"
            ? "기타 개인 발생 비용"
            : "Other personal incidental expenses",
      ],
    },
    trade: {
      level: "02",
      name: "TRADE",
      subtitle: t.tradeFullSubtitle,
      description: t.tradeFullDesc,
      shortDesc: t.tradeShortDesc,
      features: [
        lang === "VN"
          ? "Toàn Bộ gói CORE Cộng thêm :"
          : lang === "KR"
            ? "전체 CORE 패키지 포함 :"
            : "Full CORE Package Plus:",
        lang === "VN"
          ? "B2B Matching chọn lọc: Kết nối trực tiếp 1:1 với các Buyer từ E-Mart, Lotte, Coupang, GS, CJ…"
          : lang === "KR"
            ? "선별 B2B 매칭: E-Mart, Lotte, Coupang, GS, CJ 등 바이어와 1:1 직접 연결"
            : "Selective B2B Matching: Direct 1:1 connection with Buyers from E-Mart, Lotte, Coupang, GS, CJ...",
        lang === "VN"
          ? "Kịch bản & Nội dung: Hỗ trợ soạn thảo nội dung script chào hàng chuyên nghiệp khi làm việc với đối tác."
          : lang === "KR"
            ? "스크립트 & 콘텐츠: 파트너 작업 시 전문 세일즈 스크립트 작성 지원"
            : "Script & Content: Support drafting professional sales script content when working with partners.",
        lang === "VN"
          ? "AI Live Commerce: Suất trải nghiệm bán hàng trên hệ thống TMĐT và trình diễn sản phẩm trên Main Stage."
          : lang === "KR"
            ? "AI 라이브 커머스: 전자상거래 시스템에서의 판매 경험 및 메인 스테이지 제품 시연"
            : "AI Live Commerce: Sales experience on e-commerce system and product demo on Main Stage.",
        lang === "VN"
          ? "Phiên dịch riêng: Nhân sự phiên dịch 1:1 chuyên sâu trong suốt quá trình đàm phán riêng."
          : lang === "KR"
            ? "전담 통역: 개인 협상 전 과정에 걸쳐 1:1 전문 통역사"
            : "Private Interpretation: 1:1 dedicated interpreter throughout private negotiations.",
        lang === "VN"
          ? "Báo cáo cá nhân hóa: Phân tích chi tiết phản hồi của Buyer dành riêng cho sản phẩm của doanh nghiệp."
          : lang === "KR"
            ? "맞춤형 보고서: 귀사 제품에 대한 바이어 피드백 상세 분석"
            : "Personalized Report: Detailed analysis of Buyer feedback specific to your products.",
      ],
      price: t.referPrice,
      featured: true,
      color: "from-emerald-600 to-emerald-700",
      lightColor: "bg-emerald-50",
      accentColor: "text-emerald-600",
      notIncluded: [
        lang === "VN" ? "Vé máy bay khứ hồi" : lang === "KR" ? "왕복 항공권" : "Round-trip airfare",
        lang === "VN"
          ? "Lệ phí Visa và Bảo hiểm du lịch"
          : lang === "KR"
            ? "비자 수수료 및 여행 보험"
            : "Visa fees and travel insurance",
        lang === "VN"
          ? "Ăn uống cá nhân ngoài chương trình"
          : lang === "KR"
            ? "프로그램 외 개인 식사"
            : "Personal meals outside the program",
        lang === "VN"
          ? "Chi phí vận chuyển hàng mẫu (nếu có)"
          : lang === "KR"
            ? "샘플 배송비 (있는 경우)"
            : "Sample shipping costs (if any)",
      ],
    },
    "market-entry": {
      level: "03",
      name: "MARKET ENTRY",
      subtitle: t.marketEntryFullSubtitle,
      description: t.marketEntryFullDesc,
      shortDesc: t.marketEntryShortDesc,
      features: [
        lang === "VN"
          ? "Deal-making Session: Phòng họp riêng biệt để đàm phán sâu và ký kết đối tác ngay tại hội chợ."
          : lang === "KR"
            ? "딜메이킹 세션: 박람회에서 심층 협상 및 파트너 계약을 위한 전용 회의실"
            : "Deal-making Session: Dedicated meeting room for deep negotiations and partner signing at the expo.",
        lang === "VN"
          ? "Tư vấn Chiến lược: Phân tích sản phẩm, giá và lộ trình thâm nhập riêng cho doanh nghiệp."
          : lang === "KR"
            ? "전략 Strategy컨설팅: 귀사를 위한 제품, 가격 및 진입 로드맵 분석"
            : " Consulting: Product, price, and entry roadmap analysis specific to your business.",
        lang === "VN"
          ? "Hỗ trợ Pháp lý & MOU: Soạn thảo, rà soát hợp đồng mẫu và hỗ trợ đàm phán pháp lý chuyên sâu."
          : lang === "KR"
            ? "법률 & MOU 지원: 계약서 작성, 검토 및 심층 법률 협상 지원"
            : "Legal & MOU Support: Draft, review sample contracts and in-depth legal negotiation support.",
        lang === "VN"
          ? "Kết nối hạ tầng: Dịch vụ logistics, kho lạnh và các giải pháp thanh toán quốc tế."
          : lang === "KR"
            ? "인프라 연결: 물류, 냉장 창고 및 국제 결제 솔루션"
            : "Infrastructure Connection: Logistics, cold storage, and international payment solutions.",
        lang === "VN"
          ? "B2B Matching & Live Commerce : Kết nối Buyer 1:1 và ưu tiên suất livestream trên các nền tảng truyền thông của ban tổ chức."
          : lang === "KR"
            ? "B2B 매칭 & 라이브 커머스: 1:1 바이어 연결 및 주최측 미디어 플랫폼에서 우선 라이브스트림"
            : "B2B Matching & Live Commerce: 1:1 Buyer connection and priority livestream on organizer media platforms.",
        lang === "VN"
          ? "Phiên dịch riêng 1:1: Hỗ trợ ngôn ngữ xuyên suốt các buổi làm việc quan trọng."
          : lang === "KR"
            ? "1:1 전담 통역: 중요한 업무 세션 전반에 걸친 언어 지원"
            : "1:1 Private Interpretation: Language support throughout important working sessions.",
        lang === "VN"
          ? "Báo cáo cá nhân hóa và chuyên sâu về thị trường."
          : lang === "KR"
            ? "맞춤형 심층 시장 보고서"
            : "Personalized and in-depth market report.",
      ],
      price: t.referPrice,
      color: "from-purple-600 to-purple-700",
      lightColor: "bg-purple-50",
      accentColor: "text-purple-600",
      notIncluded: [
        lang === "VN" ? "Vé máy bay khứ hồi" : lang === "KR" ? "왕복 항공권" : "Round-trip airfare",
        lang === "VN"
          ? "Lệ phí Visa và Bảo hiểm du lịch"
          : lang === "KR"
            ? "비자 수수료 및 여행 보험"
            : "Visa fees and travel insurance",
        lang === "VN"
          ? "Ăn uống cá nhân ngoài chương trình"
          : lang === "KR"
            ? "프로그램 외 개인 식사"
            : "Personal meals outside the program",
        lang === "VN"
          ? "Các chi phí phát sinh riêng khác"
          : lang === "KR"
            ? "기타 개인 발생 비용"
            : "Other personal incidental expenses",
      ],
    },
  }

  const pkg = packages[packageId] || packages.trade

  const isCorePage = packageId === "core"
  const isTradePage = packageId === "trade"
  const isMarketEntryPage = packageId === "market-entry"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative">
      {isCorePage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/core-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}

      {isTradePage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/trade-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}

      {isMarketEntryPage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/market-entry-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}

      <header
        className={`sticky top-0 z-40 ${isCorePage || isTradePage || isMarketEntryPage ? "bg-white/90" : "bg-white/95"} backdrop-blur-sm border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/seafood-expo"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.backToHomePage}
          </Link>
        </div>
      </header>

      <main className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-gradient-to-br opacity-75 ${pkg.color} rounded-2xl p-8 sm:p-12 lg:p-16 text-white mb-16 shadow-lg`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider">
                {t.levelLabel} {pkg.level}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-balance">
              {pkg.name} Level
            </h1>

            <p className="text-lg text-white/80 max-w-2xl font-medium">{pkg.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className={`${pkg.lightColor} rounded-2xl p-8 sm:p-10`}>
                <h2 className={`text-2xl sm:text-3xl font-bold ${pkg.accentColor} mb-8 flex items-center gap-3`}>
                  <Check className="w-8 h-8" />
                  {t.includedServices}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {pkg.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-1`}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  {t.notIncluded}
                </h2>
                <div className="space-y-3">
                  {pkg.notIncluded.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className={`bg-white rounded-2xl border border-slate-200 p-8 sticky top-24 shadow-lg`}>
                {pkg.featured && (
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${pkg.color} text-white text-xs font-bold rounded-full mb-4 shadow-sm`}
                  >
                    {t.mostPopular}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.packageInfo}</h3>

                <div className={`${pkg.lightColor} rounded-xl p-6 mb-8`}>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">{t.servicePrice}</p>
                  <p className={`text-4xl font-bold ${pkg.accentColor}`}>{pkg.price}</p>
                  <p className="text-xs text-slate-600 mt-2">{t.contactForPrice}</p>
                </div>

                <div className="space-y-3">
                  <Link href="/seafood-expo/register">
                    <Button
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg transition-all py-6 text-base font-semibold rounded-xl`}
                    >
                      {t.registerThisPackage}
                    </Button>
                  </Link>

                  <Button
                    onClick={() => openContactWidget()}
                    variant="link"
                    className="w-full py-6 text-base font-semibold rounded-xl border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent mt-3 hover:scale-[1.02] transition-transform duration-200"
                  >
                    {t.contactConsult}
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-xs text-slate-600 mb-3 font-semibold uppercase tracking-wider">
                    {t.ourCommitment}
                  </p>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pkg.color}`}></div>
                      <span>{t.expertSupport}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pkg.color}`}></div>
                      <span>{t.measurableResults}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pkg.color}`}></div>
                      <span>{t.fullTimeSupport}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.exploreOtherPackages}</h2>
            <p className="text-slate-600 mb-10 text-lg">{t.comparePackages}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(packages)
                .filter(([id]) => id !== packageId)
                .map(([id, otherPkg]) => (
                  <Link key={id} href={`/seafood-expo/packages/${id}`}>
                    <div
                      className={`bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 p-8 cursor-pointer h-full flex flex-col`}
                    >
                      <span
                        className={`inline-block w-fit px-3 py-1 bg-gradient-to-r ${otherPkg.color} text-white text-xs font-bold rounded-full mb-4`}
                      >
                        {t.levelLabel} {otherPkg.level}
                      </span>
                      <h3 className={`text-2xl font-bold ${otherPkg.accentColor} mb-2`}>{otherPkg.name}</h3>
                      <p className="text-sm text-slate-600 font-semibold mb-3">{otherPkg.subtitle}</p>
                      <p className="text-slate-700 flex-grow">{otherPkg.description}</p>
                      <div className={`mt-6 inline-flex items-center gap-2 font-semibold ${otherPkg.accentColor}`}>
                        {t.viewDetails}
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
