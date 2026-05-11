"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Building2,
  Handshake,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import KofurnFooter from "@/components/kofurn-footer"
import KofurnGallery from "@/components/kofurn-gallery"

const kofurnTranslations = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      benefits: "Benefits",
      process: "Process",
      faq: "FAQ",
      register: "Register Now",
    },
    hero: {
      badge: "KOFURN 2026 Seoul",
      title: "Connect Korean Furniture Orders",
      subtitle: "Join Vietnam's Exclusive Enterprise Selection Program at KOFURN 2026",
      intro:
        "The program is designed to connect Vietnamese furniture manufacturing enterprises with Korean partners through the KOFURN exhibition at KINTEX, Korea",
      date: "August 27-30, 2026",
      location: "Korea International Exhibition Center (KINTEX), Goyang-si, Gyeonggi-do, Korea",
      organizer: "Organized by: HDP Holdings in partnership with Korea Furniture Industry Association",
      sponsors: [
        "Korea Ministry of Commerce, Industry and Energy (MOTIE)",
        "Korea International Trade Association (KITA)",
        "Korea Trade-Investment Promotion Agency (KOTRA)",
        "Gyeonggi Province Government and related organizations"
      ],
      benefit:
        "Participating enterprises will have the opportunity to directly access Korean buyers seeking suppliers, expand OEM/ODM cooperation, and develop sustainable export market opportunities.",
      cta: "Register for Program Information & Screening",
    },
    marketTrends: {
      title: "Korean Businesses Expanding Sourcing in Vietnam",
      subtitle: "Why Vietnamese Manufacturers Are in High Demand",
      description:
        "Rising manufacturing costs in Korea and restructuring global supply chains have made Vietnam the priority destination for Korean furniture enterprises.",
      items: [
        {
          title: "Seeking OEM/ODM Factories",
          description: "Korean companies actively searching for qualified manufacturing partners with production capacity",
        },
        {
          title: "Component Supply Chain",
          description: "Building stable sourcing networks for furniture components and materials from Vietnam",
        },
        {
          title: "Custom Manufacturing",
          description: "Expanding partnerships for design-based manufacturing and production cooperation",
        },
      ],
    },
    valueProposition: {
      title: "Exclusive Benefits for Selected Enterprises",
      subtitle: "What Your Company Gains from KOFURN Participation",
      items: [
        {
          icon: "users",
          title: "Direct Access to Korean Buyers",
          description: "Meet 150+ verified Korean companies with real sourcing needs and purchase power",
        },
        {
          icon: "handshake",
          title: "1-on-1 Matching Sessions",
          description: "Personalized introductions based on your manufacturing capabilities and product specifications",
        },
        {
          icon: "globe",
          title: "Global Exhibition Platform",
          description: "Display products at KOFURN 2026 in Seoul with visibility to international partners",
        },
        {
          icon: "award",
          title: "Professional Support",
          description: "Interpretation, negotiation support, and follow-up assistance throughout the partnership",
        },
        {
          icon: "building2",
          title: "Long-term Ecosystem",
          description: "Join a network of vetted suppliers and establish sustainable trade relationships",
        },
        {
          icon: "trending",
          title: "Market Access",
          description: "Develop export capabilities and access new international markets through Korean partnerships",
        },
      ],
    },
    criteria: {
      title: "Selection Criteria",
      subtitle: "Your Company Must Meet These Standards",
      items: [
        "Established manufacturing facility with real production capacity",
        "OEM/ODM manufacturing capabilities demonstrated",
        "Export experience or clear export orientation",
        "Products meeting international quality standards",
        "Commitment to long-term partnership with Korean partners",
      ],
    },
    process: {
      title: "4-Step Participation Process",
      subtitle: "From Registration to Seoul Partnership",
      steps: [
        {
          number: "1",
          title: "Register & Submit Information",
          description: "Complete the registration form with your company details and production capabilities",
        },
        {
          number: "2",
          title: "Receive Partner Requirements",
          description: "Get specific sourcing needs and buyer profiles from our Korean partners",
        },
        {
          number: "3",
          title: "Capability Assessment & Matching",
          description: "We evaluate your fit and match you with suitable Korean companies",
        },
        {
          number: "4",
          title: "Confirm & Prepare for KOFURN",
          description: "Finalize participation and prepare for Seoul exhibition and B2B meetings",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Can companies without export experience participate?",
          a: "Yes, if your company has strong manufacturing capabilities and clear export orientation, you're welcome to apply.",
        },
        {
          q: "Is participation guaranteed to bring orders?",
          a: "We guarantee connections with Korean companies with real sourcing needs, but actual orders depend on mutual capability and requirements match.",
        },
        {
          q: "What are the program costs?",
          a: "Detailed cost information will be provided after registration and capacity assessment.",
        },
        {
          q: "What support do we receive?",
          a: "Full support including partner introductions, translation services, negotiation assistance, and ongoing partnership support.",
        },
        {
          q: "How long is the registration process?",
          a: "Typically 2-3 weeks from registration to final confirmation, depending on assessment complexity.",
        },
      ],
    },
    cta: {
      title: "Ready to Connect with Korean Buyers?",
      subtitle: "Apply now for KOFURN 2026 and expand your business internationally",
      button: "Start Registration",
    },
  },
  VN: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      benefits: "Quyền Lợi",
      process: "Quy Trình",
      faq: "Câu Hỏi",
      register: "Đăng Ký",
    },
    hero: {
      badge: "KOFURN 2026 Seoul",
      title: "Kết Nối Đơn Hàng Nội Thất Từ Hàn Quốc",
      subtitle: "Tham gia chương trình tuyển chọn doanh nghiệp Việt Nam tại KOFURN 2026",
      intro:
        "Chương trình được thiết kế nhằm kết nối các doanh nghiệp sản xuất nội thất Việt Nam với đối tác Hàn Quốc thông qua triển lãm KOFURN tại Trung tâm triển lãm quốc tế KINTEX- Hàn Quốc",
      date: "27 – 30 tháng 08 năm 2026",
      location: "Trung tâm Triển lãm Quốc tế KINTEX (Korea International Exhibition Center) Goyang-si, Gyeonggi-do, Hàn Quốc",
      organizer: "Đơn vị tổ chức: HDP Holdings phối hợp cùng Liên đoàn công nghiệp Gỗ - Nội thất Hàn Quốc",
      sponsors: [
        "Bộ Thương mại, Công nghiệp và Năng lượng Hàn Quốc (MOTIE)",
        "Hiệp hội Thương mại Quốc tế Hàn Quốc (KITA)",
        "Cơ quan Xúc tiến Thương mại & Đầu tư Hàn Quốc (KOTRA)",
        "Chính quyền tỉnh Gyeonggi và các tổ chức liên quan"
      ],
      benefit:
        "Doanh nghiệp tham gia sẽ có cơ hội tiếp cận trực tiếp các buyer Hàn Quốc đang tìm kiếm nhà cung cấp, mở rộng hợp tác OEM/ODM và phát triển thị trường xuất khẩu bền vững.",
      cta: "Đăng ký nhận thông tin & xét duyệt tham gia chương trình",
    },
    marketTrends: {
      title: "Các Doanh Nghiệp Hàn Quốc Mở Rộng Sourcing Tại Việt Nam",
      subtitle: "Vì Sao Nhà Sản Xuất Nội Thất Việt Nam Được Yêu Cầu Cao",
      description:
        "Chi phí sản xuất gia tăng tại Hàn Quốc và tái cấu trúc chuỗi cung ứng toàn cầu khiến Việt Nam trở thành điểm đến ưu tiên của các doanh nghiệp nội thất Hàn Quốc.",
      items: [
        {
          title: "Tìm Kiếm Nhà Máy OEM/ODM",
          description: "Các công ty Hàn Quốc đang tích cực tìm kiếm đối tác sản xuất với năng lực lớn",
        },
        {
          title: "Xây Dựng Chuỗi Cung Ứng",
          description: "Mở rộng mạng lưới sourcing linh kiện nội thất và vật liệu từ Việt Nam",
        },
        {
          title: "Gia Công Theo Thiết Kế",
          description: "Phát triển quan hệ hợp tác sản xuất và gia công sản phẩm theo yêu cầu",
        },
      ],
    },
    valueProposition: {
      title: "Quyền Lợi Độc Quyền Cho Doanh Nghiệp Được Chọn",
      subtitle: "Doanh Nghiệp Của Bạn Sẽ Nhận Được Gì",
      items: [
        {
          icon: "users",
          title: "Tiếp Cận Trực Tiếp Các Nhà Mua Hàng Hàn Quốc",
          description: "Gặp gỡ 150+ công ty Hàn Quốc có nhu cầu sourcing thực tế và khả năng mua hàng",
        },
        {
          icon: "handshake",
          title: "Phiên Matching 1-1 Cá Nhân Hóa",
          description: "Giới thiệu theo năng lực sản xuất và đặc điểm sản phẩm của công ty bạn",
        },
        {
          icon: "globe",
          title: "Nền Tảng Triển Lãm Quốc Tế",
          description: "Trưng bày sản phẩm tại KOFURN 2026 ở Seoul với khả năng tiếp cận toàn cầu",
        },
        {
          icon: "award",
          title: "Hỗ Trợ Chuyên Nghiệp",
          description: "Phiên dịch, hỗ trợ đàm phán và theo dõi cơ hội hợp tác suốt quá trình",
        },
        {
          icon: "building2",
          title: "Hệ Sinh Thái Dài Hạn",
          description: "Gia nhập mạng lưới các nhà cung cấp được xác minh và thiết lập quan hệ thương mại bền vững",
        },
        {
          icon: "trending",
          title: "Tiếp Cận Thị Trường",
          description: "Phát triển khả năng xuất khẩu và tiếp cận thị trường quốc tế mới qua đối tác Hàn Quốc",
        },
      ],
    },
    criteria: {
      title: "Tiêu Chí Lựa Chọn",
      subtitle: "Doanh Nghiệp Của Bạn Phải Đáp Ứng Những Tiêu Chuẩn Này",
      items: [
        "Có nhà máy sản xuất thực tế với năng lực sản xuất rõ ràng",
        "Năng lực sản xuất OEM/ODM được chứng minh",
        "Kinh nghiệm xuất khẩu hoặc định hướng xuất khẩu rõ ràng",
        "Sản phẩm đáp ứng tiêu chuẩn chất lượng quốc tế",
        "Cam kết hợp tác dài hạn với các đối tác Hàn Quốc",
      ],
    },
    process: {
      title: "Quy Trình Tham Gia 4 Bước",
      subtitle: "Từ Đăng Ký Đến Hợp Tác Tại Seoul",
      steps: [
        {
          number: "1",
          title: "Đăng Ký & Gửi Thông Tin",
          description: "Hoàn tất mẫu đăng ký với thông tin công ty và năng lực sản xuất",
        },
        {
          number: "2",
          title: "Nhận Nhu Cầu Từ Đối Tác",
          description: "Cấp thông tin nhu cầu sourcing cụ thể và hồ sơ các nhà mua hàng",
        },
        {
          number: "3",
          title: "Đánh Giá & Matching",
          description: "Chúng tôi đánh giá sự phù hợp và kết nối bạn với các công ty Hàn Quốc thích hợp",
        },
        {
          number: "4",
          title: "Xác Nhận & Chuẩn Bị",
          description: "Hoàn tất tham gia và chuẩn bị cho triển lãm KOFURN và các cuộc họp B2B tại Seoul",
        },
      ],
    },
    faq: {
      title: "Câu Hỏi Thường Gặp",
      items: [
        {
          q: "Công ty chưa có kinh nghiệm xuất khẩu có thể tham gia không?",
          a: "Có thể, nếu công ty có năng lực sản xuất tốt và định hướng xuất khẩu rõ ràng.",
        },
        {
          q: "Chương trình có đảm bảo đơn hàng không?",
          a: "Chúng tôi đảm bảo kết nối với các công ty Hàn Quốc có nhu cầu thực tế, nhưng đơn hàng phụ thuộc vào năng lực và nhu cầu của hai bên.",
        },
        {
          q: "Chi phí tham gia chương trình bao nhiêu?",
          a: "Thông tin chi tiết sẽ được cung cấp sau khi hoàn tất đăng ký và đánh giá năng lực.",
        },
        {
          q: "Doanh nghiệp sẽ được hỗ trợ những gì?",
          a: "Hỗ trợ toàn diện bao gồm kết nối đối tác, phiên dịch, hỗ trợ đàm phán và theo dõi cơ hội.",
        },
        {
          q: "Thời gian xét duyệt mất bao lâu?",
          a: "Thường là 2-3 tuần từ đăng ký đến xác nhận cuối cùng, tùy thuộc vào độ phức tạp của đánh giá.",
        },
      ],
    },
    cta: {
      title: "Sẵn Sàng Kết Nối Với Các Nhà Mua Hàng Hàn Quốc?",
      subtitle: "Đăng ký ngay cho KOFURN 2026 và mở rộng kinh doanh quốc tế",
      button: "Bắt Đầu Đăng Ký",
    },
  },
  KR: {
    nav: {
      home: "홈",
      about: "소개",
      benefits: "혜택",
      process: "프로세스",
      faq: "자주 묻는 질문",
      register: "등록",
    },
    hero: {
      badge: "KOFURN 2026 Seoul",
      title: "한국 가구 주문 연결",
      subtitle: "KOFURN 2026에서 베트남 기업 선별 프로그램에 참여하세요",
      intro:
        "본 프로그램은 KINTEX 국제전시회를 통해 베트남 가구 제조 기업과 한국 파트너를 연결하도록 설계되었습니다",
      date: "2026년 8월 27-30일",
      location: "한국 국제전시센터(KINTEX), 고양시, 경기도, 한국",
      organizer: "조직자: HDP Holdings, 한국 가구산업연합회와 협력",
      sponsors: [
        "한국 상무부, 산업통상자원부 (MOTIE)",
        "한국 국제무역협회 (KITA)",
        "한국 무역투자진흥공사 (KOTRA)",
        "경기도청 및 관련 기관"
      ],
      benefit:
        "참여 기업은 한국 구매자들에게 직접 접근하고, OEM/ODM 협력을 확대하며, 지속 가능한 수출 시장 개발 기회를 갖게 됩니다.",
      cta: "프로그램 정보 등록 및 심사",
    },
    marketTrends: {
      title: "한국 기업의 베트남 소싱 확장",
      subtitle: "베트남 가구 제조업체가 높은 수요를 받는 이유",
      description:
        "한국의 제조 비용 증가와 글로벌 공급망 재구성으로 베트남이 한국 가구 기업의 우선 대상지가 되었습니다.",
      items: [
        {
          title: "OEM/ODM 공장 찾기",
          description: "한국 기업들이 생산 역량을 갖춘 제조 파트너를 적극 모색 중",
        },
        {
          title: "공급망 구축",
          description: "베트남의 가구 부품 및 자재 소싱 네트워크 확대",
        },
        {
          title: "주문 제작 제조",
          description: "설계 기반 제조 및 생산 협력 파트너십 발전",
        },
      ],
    },
    valueProposition: {
      title: "선정된 기업을 위한 독점 혜택",
      subtitle: "귀사가 KOFURN 참여로 얻을 수 있는 것",
      items: [
        {
          icon: "users",
          title: "한국 바이어와의 직접 접근",
          description: "실제 소싱 수요와 구매력을 가진 150개 이상의 한국 회사 만남",
        },
        {
          icon: "handshake",
          title: "맞춤형 1:1 매칭 세션",
          description: "귀사의 제조 역량 및 제품 사양에 맞는 개인 소개",
        },
        {
          icon: "globe",
          title: "글로벌 전시 플랫폼",
          description: "서울 KOFURN 2026에서 제품 전시 및 국제 파트너 접근",
        },
        {
          icon: "award",
          title: "전문 지원",
          description: "통역, 협상 지원 및 파트너십 전 과정 지원",
        },
        {
          icon: "building2",
          title: "장기 생태계",
          description: "검증된 공급업체 네트워크에 가입하고 지속 가능한 무역 관계 구축",
        },
        {
          icon: "trending",
          title: "시장 접근",
          description: "한국 파트너를 통한 수출 역량 개발 및 신규 국제 시장 진출",
        },
      ],
    },
    criteria: {
      title: "선정 기준",
      subtitle: "귀사가 충족해야 할 표준",
      items: [
        "생산 역량이 명확한 설립된 제조 시설",
        "입증된 OEM/ODM 제조 역량",
        "수출 경험 또는 명확한 수출 지향",
        "국제 품질 기준을 충족하는 제품",
        "한국 파트너와의 장기 파트너십 약속",
      ],
    },
    process: {
      title: "4단계 참여 프로세스",
      subtitle: "등록에서 서울 파트너십까지",
      steps: [
        {
          number: "1",
          title: "등록 및 정보 제출",
          description: "회사 세부 정보 및 생산 역량을 포함한 등록 양식 작성",
        },
        {
          number: "2",
          title: "파트너 요구 사항 수령",
          description: "한국 파트너의 구체적 소싱 수요 및 바이어 프로필 수령",
        },
        {
          number: "3",
          title: "역량 평가 및 매칭",
          description: "귀사의 적합성을 평가하고 적합한 한국 기업과 매칭",
        },
        {
          number: "4",
          title: "확정 및 준비",
          description: "참여 최종 확정 및 서울 전시회 및 B2B 회의 준비",
        },
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          q: "수출 경험이 없는 회사도 참여할 수 있습니까?",
          a: "예, 회사가 강력한 제조 역량과 명확한 수출 방향성이 있다면 신청할 수 있습니다.",
        },
        {
          q: "참여가 주문을 보장합니까?",
          a: "실제 소싱 수요가 있는 한국 기업과의 연결을 보장하지만, 실제 주문은 상호 역량 및 요구 사항의 일치에 따라 결정됩니다.",
        },
        {
          q: "프로그램 비용은 얼마입니까?",
          a: "자세한 비용 정보는 등록 후 역량 평가 후 제공됩니다.",
        },
        {
          q: "어떤 지원을 받게 됩니까?",
          a: "파트너 소개, 통역 서비스, 협상 지원 및 지속적인 파트너십 지원을 포함한 전체 지원.",
        },
        {
          q: "등록 심사 기간은 얼마나 걸립니까?",
          a: "등록부터 최종 확정까지 일반적으로 2-3주 소요되며, 평가 복잡도에 따라 다를 수 있습니다.",
        },
      ],
    },
    cta: {
      title: "한국 바이어와 연결할 준비가 되셨습니까?",
      subtitle: "KOFURN 2026에 지금 신청하고 국제 비즈니스 확장",
      button: "등록 시작",
    },
  },
}

export default function KofurnPage() {
  const { lang } = useLanguage()
  const t = kofurnTranslations[lang]
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-amber-50">

      {/* Hero Section */}
      <section 
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kofurnhr-sTH8rACHbFurDtb7jwYm4xwu4KTMBj.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay - Sophisticated Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700/40 border border-amber-400/40 rounded-full">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <p className="text-sm font-semibold text-amber-200">KOFURN 2026 Seoul</p>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-pretty">
                  {t.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-amber-100 font-light leading-relaxed max-w-lg">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-amber-50/90 leading-relaxed max-w-lg">
                {t.hero.intro}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <KofurnGallery />
                <Link href="/global-furniture-business-roadshow/register">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 font-semibold text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Event Info Card */}
            <div className="lg:block hidden">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-8">
                {/* Key Info */}
                <div className="space-y-6">
                  {/* Date */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Calendar className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">Date</p>
                      <p className="text-base text-white font-medium">{t.hero.date}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-base text-white font-medium">{t.hero.location}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10"></div>

                {/* Benefits Highlight */}
                <div>
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-3">Opportunities</p>
                  <p className="text-sm text-amber-50 leading-relaxed">
                    {t.hero.benefit}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10"></div>

                {/* Organizer */}
                <div>
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-2">Organizer</p>
                  <p className="text-sm text-amber-100">{t.hero.organizer}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Sponsors Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-6">Supporting Organizations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.hero.sponsors.map((sponsor, idx) => (
                <div key={idx} className="group">
                  <p className="text-sm text-amber-50 leading-relaxed font-light group-hover:text-amber-200 transition-colors">
                    {sponsor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">{t.marketTrends.title}</h2>
            <p className="text-lg text-amber-800 text-balance">{t.marketTrends.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.marketTrends.items.map((item, idx) => (
              <div key={idx} className="p-6 bg-amber-50 rounded-xl border border-amber-200 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-amber-950 mb-3">{item.title}</h3>
                <p className="text-amber-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-fixed overflow-hidden"
        style={{
          backgroundImage: 'url(/images/kofurn-benefits-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{t.valueProposition.title}</h2>
            <p className="text-lg text-amber-50">{t.valueProposition.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.valueProposition.items.map((item, idx) => {
              const IconMap: { [key: string]: any } = {
                users: Users,
                handshake: Handshake,
                globe: Globe,
                award: Award,
                building2: Building2,
                trending: TrendingUp,
              }
              const Icon = IconMap[item.icon] || Users
              return (
                <div key={idx} className="p-6 bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-amber-950 mb-2">{item.title}</h3>
                      <p className="text-amber-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">{t.criteria.title}</h2>
            <p className="text-lg text-amber-800">{t.criteria.subtitle}</p>
          </div>
          <div className="space-y-4">
            {t.criteria.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-amber-200">
                <CheckCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">{t.process.title}</h2>
            <p className="text-lg text-amber-800">{t.process.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 bg-white rounded-xl border border-amber-200 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-700 text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-amber-950 mb-2">{step.title}</h3>
                  <p className="text-amber-700 text-sm">{step.description}</p>
                </div>
                {idx < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 text-amber-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">{t.faq.title}</h2>
          </div>
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <div key={idx} className="border border-amber-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-yellow-50 hover:bg-amber-100 transition"
                >
                  <p className="font-semibold text-amber-950 text-left">{item.q}</p>
                  <span className="text-amber-700">{openFAQ === idx ? "−" : "+"}</span>
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-white border-t border-amber-200">
                    <p className="text-amber-800">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-800 to-yellow-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-amber-50 mb-8">{t.cta.subtitle}</p>
          <Link href="/global-furniture-business-roadshow/register">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-amber-950 text-lg px-8 py-6 font-semibold">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <KofurnFooter />
      </div>
    </>
  )
}
