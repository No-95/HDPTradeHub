"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export interface ProcessStep {
  id: string
  number: string
  title: { en: string; vi: string; ko: string }
  shortDesc: { en: string; vi: string; ko: string }
  longDesc: { en: string[]; vi: string[]; ko: string[] }
  image: string
}

const defaultSteps: ProcessStep[] = [
  {
    id: "xuc-tien-thuong-mai",
    number: "01",
    title: {
      vi: "Tổ chức Đoàn Xúc Tiến Thương Mại 2 Chiều",
      en: "Trade Promotion Delegation Organization",
      ko: "양방향 무역촉진단 조직"
    },
    shortDesc: {
      vi: "Dẫn dắt doanh nghiệp tham gia hội chợ quốc tế và đón tiếp đối tác nước ngoài tại Việt Nam — kết nối hai chiều, tạo nền tảng hợp tác bền vững.",
      en: "Lead businesses to participate in international trade fairs and receive foreign partners in Vietnam — establish bidirectional connections and sustainable cooperation.",
      ko: "베트남 기업을 국제 무역박람회에 참여시키고 베트남에서 외국 파트너를 수용 — 양방향 연결 및 지속 가능한 협력 기반 구축"
    },
    longDesc: {
      vi: [
        "Chúng tôi tổ chức và điều phối các đoàn xúc tiến thương mại theo cả hai chiều: đưa doanh nghiệp Việt Nam ra nước ngoài tham gia hội chợ, triển lãm quốc tế, đồng thời đón tiếp và kết nối đoàn doanh nghiệp nước ngoài đến thăm và tìm kiếm cơ hội tại Việt Nam.",
        "Dịch vụ bao gồm toàn bộ quá trình từ lập kế hoạch, đăng ký tham gia, bố trí gian hàng, chuẩn bị tài liệu giới thiệu đến thu xếp lịch gặp gỡ với đối tác tiềm năng. Chúng tôi đảm bảo mỗi chuyến đi đều có mục tiêu thương mại rõ ràng và được chuẩn bị kỹ lưỡng.",
        "Kết quả không dừng lại ở việc tham dự — chúng tôi theo dõi và hỗ trợ sau sự kiện để chuyển các cuộc gặp gỡ thành quan hệ hợp tác thực sự."
      ],
      en: [
        "We organize and coordinate trade promotion delegations in both directions: taking Vietnamese businesses to participate in international fairs and exhibitions, while also receiving and connecting foreign business delegations visiting Vietnam for opportunities.",
        "Services include the entire process from planning, registration, booth arrangement, preparation of promotional materials to scheduling meetings with potential partners. We ensure each delegation has clear commercial objectives and thorough preparation.",
        "Results don't stop at attendance — we follow up and provide post-event support to transform meetings into real business partnerships."
      ],
      ko: [
        "우리는 양방향 무역촉진단을 조직하고 조율합니다: 베트남 기업을 국제 박람회와 전시회에 참여시키면서 베트남 방문 외국 사업 위임단을 수용하고 연결합니다.",
        "서비스는 계획, 등록, 부스 배치, 홍보 자료 준비에서 잠재적 파트너와의 회의 일정 조정까지 전체 프로세스를 포함합니다. 우리는 각 대표단이 명확한 상업 목표를 가지고 철저한 준비를 하도록 합니다.",
        "결과는 참석에서 끝나지 않습니다. 우리는 회의를 실제 비즈니스 파트너십으로 전환하기 위해 행사 후 지원과 후속 조치를 제공합니다."
      ]
    },
    image: "/services/1.png",
  },
  {
    id: "khao-sat-thi-truong",
    number: "02",
    title: {
      vi: "Dịch vụ Khảo Sát Thị Trường",
      en: "Market Research Service",
      ko: "시장 조사 서비스"
    },
    shortDesc: {
      vi: "Nghiên cứu và phân tích thị trường mục tiêu, xu hướng tiêu dùng và đối thủ cạnh tranh — cung cấp nền tảng dữ liệu để doanh nghiệp ra quyết định đầu tư đúng đắn.",
      en: "Research and analyze target markets, consumer trends, and competitors — provide data-driven foundation for sound investment decisions.",
      ko: "목표 시장, 소비자 추세 및 경쟁사 연구 및 분석 — 건전한 투자 결정을 위한 데이터 기반 제공"
    },
    longDesc: {
      vi: [
        "Trước khi bước vào bất kỳ thị trường nào, doanh nghiệp cần hiểu rõ cấu trúc thị trường, hành vi người tiêu dùng, kênh phân phối và bối cảnh cạnh tranh. Dịch vụ Khảo Sát Thị Trường của chúng tôi cung cấp đầy đủ thông tin cần thiết để hỗ trợ quá trình đó.",
        "Chúng tôi thực hiện nghiên cứu thực địa kết hợp phân tích dữ liệu thứ cấp, bao gồm phỏng vấn chuyên gia ngành, phân tích đối thủ cạnh tranh, khảo sát kênh phân phối và đánh giá tiềm năng tăng trưởng của phân khúc mục tiêu.",
        "Báo cáo khảo sát được trình bày rõ ràng với các khuyến nghị thực tế, giúp ban lãnh đạo doanh nghiệp đưa ra quyết định chiến lược dựa trên bằng chứng thay vì giả định."
      ],
      en: [
        "Before entering any market, businesses need to understand market structure, consumer behavior, distribution channels, and competitive landscape. Our Market Research Service provides comprehensive information to support this process.",
        "We conduct field research combined with secondary data analysis, including industry expert interviews, competitive analysis, distribution channel surveys, and growth potential assessment of target segments.",
        "Research reports are presented clearly with practical recommendations, helping business leaders make strategic decisions based on evidence rather than assumptions."
      ],
      ko: [
        "어느 시장에 진입하기 전에 기업은 시장 구조, 소비자 행동, 유통 채널 및 경쟁 환경을 이해해야 합니다. 우리의 시장 조사 서비스는 이 과정을 지원하기 위해 포괄적인 정보를 제공합니다.",
        "우리는 현장 조사와 2차 데이터 분석을 결합하여 수행하며, 업계 전문가 인터뷰, 경쟁 분석, 유통 채널 조사, 목표 부문의 성장 잠재력 평가를 포함합니다.",
        "조사 보고서는 명확하게 제시되고 실질적인 권장사항과 함께 제공되어 비즈니스 리더가 가정이 아닌 증거에 기반한 전략적 결정을 내릴 수 있도록 돕습니다."
      ]
    },
    image: "/services/2.png",
  },
  {
    id: "ket-noi-b2b",
    number: "03",
    title: {
      vi: "Kết nối B2B",
      en: "B2B Connection",
      ko: "B2B 연결"
    },
    shortDesc: {
      vi: "Tổ chức các buổi gặp gỡ, đàm phán trực tiếp với buyer và nhà phân phối tiềm năng — kết nối chính xác, tiết kiệm thời gian và tối đa hoá cơ hội kinh doanh.",
      en: "Organize direct meetings and negotiations with potential buyers and distributors — precise connections, save time, and maximize business opportunities.",
      ko: "잠재적 구매자 및 유통업체와의 직접 회의 및 협상 조직 — 정확한 연결, 시간 절약 및 비즈니스 기회 극대화"
    },
    longDesc: {
      vi: [
        "Kết nối B2B là dịch vụ cốt lõi của HDP, nơi chiến lược được hiện thực hoá thành các cuộc gặp gỡ thực chất. Chúng tôi xác định, sàng lọc và tiếp cận các đối tác phù hợp — nhà mua hàng, nhà nhập khẩu, nhà phân phối hoặc nhà đầu tư — và thiết kế chương trình gặp gỡ nhằm tối đa hoá hiệu quả thương mại.",
        "Mỗi buổi gặp gỡ được chuẩn bị kỹ càng. Chúng tôi cung cấp thông tin nền về cả hai phía, xây dựng chương trình nghị sự tập trung vào mục tiêu thương mại và đảm bảo các cuộc đối thoại diễn ra có chiều sâu.",
        "Chúng tôi quản lý toàn bộ hậu cần, phiên dịch và điều phối để doanh nghiệp của bạn có thể tập trung hoàn toàn vào việc xây dựng quan hệ và đàm phán hợp đồng."
      ],
      en: [
        "B2B Connection is HDP's core service, where strategy is realized into meaningful meetings. We identify, screen, and approach suitable partners — buyers, importers, distributors, or investors — and design meeting programs to maximize business effectiveness.",
        "Each meeting is carefully prepared. We provide background information on both sides, build agendas focused on business objectives, and ensure dialogues are in-depth.",
        "We manage all logistics, interpretation, and coordination so your business can focus entirely on relationship building and contract negotiation."
      ],
      ko: [
        "B2B 연결은 HDP의 핵심 서비스로, 전략이 의미 있는 회의로 실현됩니다. 우리는 적절한 파트너(구매자, 수입업체, 유통업체 또는 투자자)를 식별, 심사 및 접근하며 비즈니스 효과를 극대화하기 위해 회의 프로그램을 설계합니다.",
        "각 회의는 신중하게 준비됩니다. 우리는 양측에 대한 배경 정보를 제공하고, 비즈니스 목표에 초점을 맞춘 의제를 구축하며, 대화가 심층적이 되도록 합니다.",
        "우리는 모든 물류, 통역 및 조정을 관리하여 귀사가 관계 구축과 계약 협상에만 집중할 수 있도록 합니다."
      ]
    },
    image: "/services/3.png",
  },
  {
    id: "tu-van-van-phong",
    number: "04",
    title: {
      vi: "Tư vấn Thiết lập Văn phòng",
      en: "Office Setup Consulting",
      ko: "사무실 설립 컨설팅"
    },
    shortDesc: {
      vi: "Hỗ trợ thành lập văn phòng đại diện, chi nhánh tại thị trường nước ngoài — từ pháp lý, hành chính đến vận hành thực tế.",
      en: "Support establishment of representative offices, branches in foreign markets — from legal, administrative to practical operations.",
      ko: "해외 시장에서 대표 사무실, 지점 설립 지원 — 법률, 행정에서 실제 운영까지"
    },
    longDesc: {
      vi: [
        "Việc thiết lập hiện diện pháp lý tại thị trường nước ngoài là bước đi quan trọng trong hành trình mở rộng quốc tế. Chúng tôi hỗ trợ doanh nghiệp trong toàn bộ quy trình — từ lựa chọn cấu trúc pháp lý phù hợp, đăng ký kinh doanh, đến tìm kiếm văn phòng và thiết lập bộ máy vận hành ban đầu.",
        "Dịch vụ bao gồm tư vấn về quy định địa phương, yêu cầu cấp phép, thuế và lao động. Chúng tôi kết nối doanh nghiệp với các đối tác pháp lý và kế toán địa phương đáng tin cậy để đảm bảo tuân thủ đầy đủ ngay từ ngày đầu hoạt động.",
        "Mục tiêu của chúng tôi là giúp doanh nghiệp rút ngắn thời gian thiết lập, tránh sai sót pháp lý tốn kém và nhanh chóng đi vào hoạt động hiệu quả tại thị trường mới."
      ],
      en: [
        "Establishing legal presence in foreign markets is an important step in international expansion. We support businesses through the entire process — from choosing appropriate legal structures, business registration, to office search and initial operations setup.",
        "Services include consulting on local regulations, licensing requirements, taxes, and labor laws. We connect businesses with reliable local legal and accounting partners to ensure full compliance from day one.",
        "Our goal is to help businesses shorten setup time, avoid costly legal errors, and quickly establish efficient operations in new markets."
      ],
      ko: [
        "해외 시장에서의 법적 입지 확립은 국제 확장의 중요한 단계입니다. 우리는 기업을 전체 프로세스를 통해 지원합니다. 적절한 법적 구조 선택, 사업 등록에서 사무실 검색 및 초기 운영 설립까지입니다.",
        "서비스에는 현지 규정, 라이센스 요구 사항, 세금 및 노동법에 대한 컨설팅이 포함됩니다. 우리는 기업을 신뢰할 수 있는 현지 법률 및 회계 파트너와 연결하여 첫날부터 완전한 준수를 보장합니다.",
        "우리의 목표는 기업이 설립 시간을 단축하고, 비용이 많이 드는 법적 오류를 피하며, 새로운 시장에서 효율적인 운영을 빠르게 구축할 수 있도록 돕는 것입니다."
      ]
    },
    image: "/services/4.png",
  },
  {
    id: "mo-rong-chuoi-cung-ung",
    number: "05",
    title: {
      vi: "Mở Rộng Chuỗi Cung Ứng",
      en: "Supply Chain Expansion",
      ko: "공급망 확대"
    },
    shortDesc: {
      vi: "Kết nối với hệ thống logistics, kho bãi và nhà cung cấp dịch vụ quốc tế — tối ưu hoá chuỗi cung ứng để hỗ trợ tăng trưởng xuất khẩu bền vững.",
      en: "Connect with logistics systems, warehouses, and international service providers — optimize supply chains to support sustainable export growth.",
      ko: "물류 시스템, 창고 및 국제 서비스 제공자와 연결 — 지속 가능한 수출 성장을 지원하기 위해 공급망 최적화"
    },
    longDesc: {
      vi: [
        "Một chuỗi cung ứng vững chắc là nền tảng cho hoạt động xuất khẩu hiệu quả. Chúng tôi kết nối doanh nghiệp với các đối tác logistics, nhà vận chuyển quốc tế, đơn vị kho vận và nhà cung cấp dịch vụ hải quan tại các thị trường mục tiêu.",
        "Dịch vụ này bao gồm đánh giá chuỗi cung ứng hiện tại, xác định điểm nghẽn và đề xuất giải pháp tối ưu về chi phí và thời gian giao hàng. Chúng tôi giúp doanh nghiệp xây dựng quan hệ với các đối tác vận chuyển và lưu kho phù hợp với quy mô và ngành hàng.",
        "Mục tiêu là xây dựng một chuỗi cung ứng linh hoạt, minh bạch và có khả năng mở rộng theo đà tăng trưởng của doanh nghiệp."
      ],
      en: [
        "A robust supply chain is the foundation for efficient export operations. We connect businesses with logistics partners, international carriers, warehousing units, and customs service providers in target markets.",
        "This service includes assessing current supply chains, identifying bottlenecks, and proposing cost-optimal and timely delivery solutions. We help businesses build relationships with transportation and storage partners suited to their scale and industry.",
        "The goal is to build a flexible, transparent supply chain capable of scaling with business growth."
      ],
      ko: [
        "견고한 공급망은 효율적인 수출 운영의 기초입니다. 우리는 기업을 물류 파트너, 국제 운송업체, 창고 보관 단위 및 목표 시장의 관세 서비스 제공자와 연결합니다.",
        "이 서비스에는 현재 공급망 평가, 병목 현상 식별 및 비용 최적화 및 적시 배송 솔루션 제안이 포함됩니다. 우리는 기업이 규모 및 산업에 맞는 운송 및 보관 파트너와의 관계를 구축하도록 돕습니다.",
        "목표는 비즈니스 성장에 따라 확장할 수 있는 유연하고 투명한 공급망을 구축하는 것입니다."
      ]
    },
    image: "/services/5.png",
  },
  {
    id: "to-chuc-hoi-nghi",
    number: "06",
    title: {
      vi: "Tổ chức Hội nghị",
      en: "Conference Organization",
      ko: "회의 조직"
    },
    shortDesc: {
      vi: "Tổ chức hội nghị, hội thảo chuyên ngành và sự kiện networking — tạo ra không gian kết nối chuyên nghiệp giữa doanh nghiệp, chuyên gia và nhà đầu tư.",
      en: "Organize conferences, seminars, and networking events — create professional connection spaces for businesses, experts, and investors.",
      ko: "회의, 세미나 및 네트워킹 이벤트 조직 — 기업, 전문가 및 투자자를 위한 전문 연결 공간 창출"
    },
    longDesc: {
      vi: [
        "Hội nghị và hội thảo chuyên ngành là cơ hội để doanh nghiệp khẳng định vị thế, mở rộng mạng lưới và tiếp cận thông tin thị trường mới nhất. Chúng tôi thiết kế và tổ chức các sự kiện này từ quy mô nhỏ đến hội nghị quốc tế quy mô lớn.",
        "Dịch vụ bao gồm lựa chọn địa điểm, xây dựng chương trình nội dung, mời diễn giả, điều phối truyền thông và quản lý đăng ký tham dự. Chúng tôi đảm bảo mỗi sự kiện diễn ra chuyên nghiệp, đúng tiến độ và đạt được mục tiêu kết nối đề ra.",
        "Ngoài các sự kiện độc lập, chúng tôi còn tổ chức các hoạt động networking bên lề hội chợ quốc tế hoặc các chuyến công tác thương mại."
      ],
      en: [
        "Conferences and seminars are opportunities for businesses to establish position, expand networks, and access latest market information. We design and organize these events from small scale to large international conferences.",
        "Services include venue selection, content program development, speaker invitation, media coordination, and attendance management. We ensure each event runs professionally, on schedule, and achieves networking objectives.",
        "Beyond standalone events, we also organize networking activities alongside international trade fairs or commercial missions."
      ],
      ko: [
        "회의 및 세미나는 기업이 입지를 확립하고, 네트워크를 확대하고, 최신 시장 정보에 접근할 수 있는 기회입니다. 우리는 소규모에서 대규모 국제 회의까지 이러한 이벤트를 설계하고 조직합니다.",
        "서비스에는 장소 선택, 콘텐츠 프로그램 개발, 연사 초청, 미디어 조정 및 참석 관리가 포함됩니다. 우리는 각 이벤트가 전문적으로, 일정에 따라, 네트워킹 목표를 달성하도록 합니다.",
        "독립적인 이벤트 외에도 우리는 국제 무역박람회 또는 상업 미션과 함께 네트워킹 활동을 조직합니다."
      ]
    },
    image: "/services/6.png",
  },
  {
    id: "tu-van-dau-tu-fdi",
    number: "07",
    title: {
      vi: "Tư vấn Đầu tư FDI",
      en: "FDI Investment Consulting",
      ko: "FDI 투자 컨설팅"
    },
    shortDesc: {
      vi: "Tư vấn về thủ tục đầu tư, pháp lý và cơ hội hợp tác đầu tư — kết nối nhà đầu tư nước ngoài với cơ hội phù hợp tại Việt Nam và khu vực.",
      en: "Consulting on investment procedures, legal matters, and investment cooperation opportunities — connect foreign investors with suitable opportunities in Vietnam and the region.",
      ko: "투자 절차, 법적 문제 및 투자 협력 기회에 대한 컨설팅 — 외국 투자자를 베트남 및 지역의 적절한 기회와 연결"
    },
    longDesc: {
      vi: [
        "Môi trường đầu tư tại Việt Nam và các thị trường Đông Nam Á đang mở ra nhiều cơ hội hấp dẫn cho nhà đầu tư nước ngoài. Chúng tôi hỗ trợ toàn diện từ giai đoạn tìm hiểu cơ hội đến thực thi đầu tư.",
        "Dịch vụ bao gồm tư vấn về các hình thức đầu tư phù hợp, thủ tục cấp phép đầu tư, ưu đãi thuế theo ngành và địa bàn, cũng như kết nối với cơ quan nhà nước có liên quan. Chúng tôi cũng hỗ trợ thẩm định đối tác địa phương và đàm phán các điều khoản hợp tác.",
        "Mục tiêu là giúp nhà đầu tư hiểu rõ môi trường đầu tư, giảm thiểu rủi ro pháp lý và đưa vốn vào đúng cơ hội, đúng thời điểm."
      ],
      en: [
        "The investment environment in Vietnam and Southeast Asian markets is opening up many attractive opportunities for foreign investors. We provide comprehensive support from opportunity exploration to investment execution.",
        "Services include consulting on suitable investment forms, investment licensing procedures, tax incentives by industry and location, and connections with relevant government agencies. We also support local partner due diligence and cooperation terms negotiation.",
        "The goal is to help investors understand the investment environment clearly, minimize legal risks, and channel capital into right opportunities at right times."
      ],
      ko: [
        "베트남 및 동남아시아 시장의 투자 환경은 외국 투자자에게 많은 매력적인 기회를 열고 있습니다. 우리는 기회 탐색에서 투자 실행까지 포괄적인 지원을 제공합니다.",
        "서비스에는 적절한 투자 형태, 투자 라이센싱 절차, 산업 및 위치별 세금 인센티브에 대한 컨설팅 및 관련 정부 기관과의 연결이 포함됩니다. 우리는 또한 현지 파트너 실사 및 협력 조건 협상을 지원합니다.",
        "목표는 투자자가 투자 환경을 명확히 이해하고, 법적 위험을 최소화하며, 올바른 시간에 올바른 기회에 자본을 투입할 수 있도록 돕는 것입니다."
      ]
    },
    image: "/services/7.png",
  },
  {
    id: "tu-van-xuat-nhap-khau",
    number: "08",
    title: {
      vi: "Tư vấn Xuất Nhập Khẩu",
      en: "Import/Export Consulting",
      ko: "수출입 컨설팅"
    },
    shortDesc: {
      vi: "Hỗ trợ thủ tục hải quan, chứng từ và quy định xuất nhập khẩu — đảm bảo hàng hoá thông quan nhanh chóng, đúng quy định và tối ưu chi phí.",
      en: "Support customs procedures, documentation, and import/export regulations — ensure goods clear quickly, compliantly, and cost-effectively.",
      ko: "관세 절차, 문서 및 수출입 규정 지원 — 상품이 빠르고, 규정을 준수하며, 비용 효율적으로 통관되도록 보장"
    },
    longDesc: {
      vi: [
        "Xuất nhập khẩu đòi hỏi sự am hiểu sâu về quy trình hải quan, chứng từ thương mại và các quy định kiểm dịch, tiêu chuẩn kỹ thuật tại từng thị trường. Chúng tôi cung cấp dịch vụ tư vấn và hỗ trợ thực thi để doanh nghiệp tránh sai sót tốn kém.",
        "Dịch vụ bao gồm tư vấn phân loại mã HS, xác định thuế suất ưu đãi theo các FTA, chuẩn bị bộ chứng từ xuất nhập khẩu đầy đủ và hỗ trợ làm việc với cơ quan hải quan khi phát sinh vướng mắc.",
        "Chúng tôi cũng hỗ trợ doanh nghiệp xây dựng quy trình nội bộ quản lý hoạt động xuất nhập khẩu hiệu quả, đảm bảo tuân thủ pháp lý liên tục khi quy mô giao dịch tăng lên."
      ],
      en: [
        "Import/export requires deep understanding of customs procedures, commercial documentation, and quarantine regulations and technical standards at each market. We provide consulting and implementation support to help businesses avoid costly errors.",
        "Services include HS code classification consulting, preferential tariff determination under FTAs, preparation of complete import/export documentation, and support in dealing with customs when issues arise.",
        "We also help businesses build internal processes to efficiently manage import/export activities and ensure continuous legal compliance as transaction volumes increase."
      ],
      ko: [
        "수출입은 각 시장에서의 관세 절차, 상업 문서 및 검역 규정 및 기술 표준에 대한 심층적인 이해가 필요합니다. 우리는 기업이 비용이 많이 드는 오류를 피할 수 있도록 컨설팅 및 구현 지원을 제공합니다.",
        "서비스에는 HS 코드 분류 컨설팅, FTA에 따른 선호 관세 결정, 완전한 수출입 문서 준비 및 문제 발생 시 관세 처리 지원이 포함됩니다.",
        "우리는 또한 기업이 수출입 활동을 효율적으로 관리하고 거래량이 증가함에 따라 지속적인 법적 준수를 보장하기 위해 내부 프로세스를 구축할 수 있도록 돕습니다."
      ]
    },
    image: "/services/8.png",
  },
  {
    id: "marketing-han-quoc",
    number: "09",
    title: {
      vi: "Marketing Thị trường Hàn Quốc",
      en: "Korea Market Marketing",
      ko: "한국 시장 마케팅"
    },
    shortDesc: {
      vi: "Chiến lược marketing, quảng bá thương hiệu tại thị trường Hàn Quốc — tiếp cận đúng người mua, đúng kênh và đúng thông điệp.",
      en: "Marketing strategy, brand promotion in Korean market — reach right buyers, right channels, and right messages.",
      ko: "마케팅 전략, 한국 시장의 브랜드 홍보 — 올바른 구매자, 올바른 채널 및 올바른 메시지에 도달"
    },
    longDesc: {
      vi: [
        "Thị trường Hàn Quốc có đặc thù riêng về hành vi tiêu dùng, kênh phân phối và cách thức xây dựng thương hiệu. Để thành công tại đây, doanh nghiệp cần hơn là một chiến lược marketing tổng quát — cần sự hiểu biết văn hoá và thị trường sâu sắc.",
        "Chúng tôi xây dựng chiến lược marketing phù hợp với đặc điểm ngành hàng và đối tượng mục tiêu tại Hàn Quốc, bao gồm định vị thương hiệu, lựa chọn kênh truyền thông (online/offline), thiết kế nội dung địa phương hoá và triển khai chiến dịch quảng bá.",
        "Với mạng lưới đối tác truyền thông, agency và KOL tại Hàn Quốc, chúng tôi đảm bảo thương hiệu của bạn được tiếp cận đúng tệp khách hàng mục tiêu một cách hiệu quả và nhất quán."
      ],
      en: [
        "The Korean market has unique characteristics in consumer behavior, distribution channels, and brand building methods. To succeed here, businesses need more than general marketing strategy — they need deep cultural and market understanding.",
        "We develop marketing strategies suited to industry characteristics and target audiences in Korea, including brand positioning, media channel selection (online/offline), localized content design, and campaign implementation.",
        "With our network of media partners, agencies, and KOLs in Korea, we ensure your brand reaches the right target customer base effectively and consistently."
      ],
      ko: [
        "한국 시장은 소비자 행동, 유통 채널 및 브랜드 구축 방법에서 독특한 특성을 가지고 있습니다. 여기서 성공하려면 기업은 일반적인 마케팅 전략 이상이 필요합니다. 깊은 문화 및 시장 이해가 필요합니다.",
        "우리는 한국의 산업 특성 및 목표 대상에 맞는 마케팅 전략을 개발합니다. 여기에는 브랜드 포지셔닝, 미디어 채널 선택(온라인/오프라인), 현지화된 콘텐츠 설계 및 캠페인 구현이 포함됩니다.",
        "한국의 미디어 파트너, 에이전시 및 KOL 네트워크를 통해 귀사의 브랜드가 올바른 목표 고객층에 효과적이고 일관되게 도달하도록 보장합니다."
      ]
    },
    image: "/services/9.png",
  },
  {
    id: "phien-dich-doi-ngoai",
    number: "10",
    title: {
      vi: "Phiên dịch Đối ngoại",
      en: "Business Interpretation",
      ko: "비즈니스 통역"
    },
    shortDesc: {
      vi: "Dịch vụ phiên dịch chuyên nghiệp Việt-Hàn-Anh cho đàm phán kinh doanh — đảm bảo mọi cuộc đối thoại diễn ra chính xác, trôi chảy và đúng ngữ cảnh thương mại.",
      en: "Professional Vietnamese-Korean-English interpretation service for business negotiations — ensure all dialogues are accurate, smooth, and commercially contextual.",
      ko: "비즈니스 협상을 위한 전문 베트남-한국-영어 통역 서비스 — 모든 대화가 정확하고, 매끄럽고, 상업적으로 상황에 맞게 진행되도록 보장"
    },
    longDesc: {
      vi: [
        "Trong đàm phán kinh doanh quốc tế, chất lượng phiên dịch ảnh hưởng trực tiếp đến kết quả. Chúng tôi cung cấp dịch vụ phiên dịch chuyên nghiệp ba ngôn ngữ Việt-Hàn-Anh với đội ngũ phiên dịch viên có nền tảng kinh doanh vững chắc.",
        "Dịch vụ bao gồm phiên dịch trực tiếp tại các buổi gặp gỡ, hội nghị và đàm phán hợp đồng, cũng như biên dịch tài liệu thương mại, hợp đồng, đề xuất hợp tác và tài liệu pháp lý.",
        "Chúng tôi không chỉ dịch ngôn ngữ mà còn giải thích ngữ cảnh văn hoá và thương mại để đảm bảo cả hai phía hiểu nhau đúng nghĩa — điều đặc biệt quan trọng trong các cuộc đàm phán phức tạp hoặc nhạy cảm."
      ],
      en: [
        "In international business negotiations, interpretation quality directly affects outcomes. We provide professional three-language Vietnamese-Korean-English interpretation services with interpreters having solid business backgrounds.",
        "Services include on-site interpretation at meetings, conferences, and contract negotiations, as well as translation of business documents, contracts, cooperation proposals, and legal documents.",
        "We don't just translate language but also explain cultural and business context to ensure both parties understand each other correctly — especially important in complex or sensitive negotiations."
      ],
      ko: [
        "국제 비즈니스 협상에서 통역 품질은 결과에 직접 영향을 미칩니다. 우리는 견고한 비즈니스 배경을 가진 통역사와 함께 전문 3언어 베트남-한국-영어 통역 서비스를 제공합니다.",
        "서비스에는 회의, 회의 및 계약 협상에서의 현장 통역, 비즈니스 문서, 계약, 협력 제안 및 법적 문서의 번역이 포함됩니다.",
        "우리는 단지 언어를 번역하는 것이 아니라 문화 및 비즈니스 맥락을 설명하여 양측이 서로를 올바르게 이해하도록 합니다 — 특히 복잡하거나 민감한 협상에서 중요합니다."
      ]
    },
    image: "/services/10.png",
  },
]

interface ProcessSliderProps {
  steps?: ProcessStep[]
  processLabel?: string
  heading?: string
}

export default function ProcessSlider({
  steps,
  processLabel,
  heading,
}: ProcessSliderProps) {
  const [activeModal, setActiveModal] = useState<ProcessStep | null>(null)
  const { lang } = useLanguage()

  // Use provided steps or default steps
  const displaySteps = steps || defaultSteps

  // Get language-specific labels from translations
  const labels = {
    en: { label: "Our Services", heading: "Comprehensive services — from market research, partner connection to international trade implementation." },
    vi: { label: "Dịch Vụ", heading: "Dịch vụ toàn diện — từ khảo sát thị trường, kết nối đối tác đến triển khai thương mại quốc tế." },
    ko: { label: "서비스", heading: "종합 서비스 — 시장 조사, 파트너 연결에서 국제 무역 구현까지." }
  }

  const displayLabel = processLabel || labels[(lang === 'VN' ? 'vi' : lang === 'KR' ? 'ko' : 'en') as keyof typeof labels]?.label || labels.en.label
  const displayHeading = heading || labels[(lang === 'VN' ? 'vi' : lang === 'KR' ? 'ko' : 'en') as keyof typeof labels]?.heading || labels.en.heading

  // Heading animation
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: "0px 0px -80px 0px" })

  // Helper to get language-specific text
  const getLocalizedText = (obj: any) => {
    if (typeof obj === 'string') return obj
    const langKey = lang === 'VN' ? 'vi' : lang === 'KR' ? 'ko' : 'en'
    return obj?.[langKey] || obj?.en || obj?.vi || ""
  }

  return (
    <>
      <section id="process" data-nav-theme-to="light" className="overflow-hidden bg-[#F5F3ED] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          {/* Label + Heading */}
          <div className="mb-16 grid grid-cols-1 gap-y-8 md:mb-20 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-1">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-sm tracking-[0.18em] text-[#151515]"
              >
                {displayLabel}
              </motion.span>
            </div>

            <div className="md:col-span-11 md:col-start-2 text-center">
              <h2
                ref={headingRef}
                aria-label={displayHeading}
                className="mx-auto max-w-[52ch] font-serif text-[1.65rem] leading-[1.25] tracking-[-0.02em] text-[#141414] sm:text-4xl md:text-5xl lg:text-[3.75rem]"
              >
                {displayHeading.split(" ").map((word, wi) => (
                  <span key={`w-${wi}`} className="mr-[0.22em] inline-flex overflow-hidden align-top">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={`c-${wi}-${ci}`}
                        initial={{ y: "115%" }}
                        animate={isHeadingInView ? { y: "0%" } : { y: "115%" }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: wi * 0.025 + ci * 0.008 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>

        {/* 2 rows x 5 cards grid */}
        <div className="grid grid-cols-1 gap-4 px-6 pb-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-5 lg:px-16">
          {displaySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
              className="group flex min-h-[520px] flex-col justify-between rounded-sm border border-[#d4d0c8] bg-[#EDEAE2] p-5"
            >
              {/* Number */}
              <span className="font-serif text-[4rem] font-normal leading-none text-[#141414]/20 md:text-[5rem]">
                {step.number}
              </span>

              {/* Image */}
              <div className="my-4 h-[180px] overflow-hidden rounded-sm">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={220}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              {/* Title + desc */}
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-base font-medium tracking-[0.05em] text-[#141414] uppercase">
                  {getLocalizedText(step.title)}
                </h3>
                <p className="flex-1 text-sm leading-[1.8] text-[#4a4744]">
                  {getLocalizedText(step.shortDesc)}
                </p>

                <button
                  onClick={() => setActiveModal(step)}
                  className="group/btn flex items-center gap-2 self-start text-sm font-medium tracking-[0.05em] text-[#141414] transition-opacity hover:opacity-60"
                >
                  <span>{lang === 'KR' ? '더 알아보기' : lang === 'VN' ? 'Tìm hiểu thêm' : 'Learn more'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Side Panel Modal */}
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-stretch justify-end"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setActiveModal(null)}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full w-full max-w-lg flex-col overflow-y-auto bg-[#F5F3ED] shadow-2xl"
          >
            {/* Close */}
            <div className="sticky top-0 z-10 flex justify-end bg-[#F5F3ED] px-8 pt-8 pb-4">
              <button
                onClick={() => setActiveModal(null)}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d4d0c8] transition-colors hover:bg-[#141414] hover:border-[#141414]"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-[#141414] transition-colors group-hover:text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-8 px-8 pb-12 pt-4">
              <span className="font-serif text-[5rem] font-normal leading-none text-[#141414]/15">
                {activeModal.number}
              </span>

              <div className="h-[260px] overflow-hidden rounded-sm">
                <Image
                  src={activeModal.image}
                  alt={getLocalizedText(activeModal.title)}
                  width={600}
                  height={260}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-medium tracking-[0.04em] text-[#141414] uppercase md:text-2xl">
                {getLocalizedText(activeModal.title)}
              </h3>

              <div className="space-y-5">
                {(getLocalizedText(activeModal.longDesc) as string[]).map((para, i) => (
                  <p key={i} className="text-[0.95rem] leading-[1.85] text-[#4a4744]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
