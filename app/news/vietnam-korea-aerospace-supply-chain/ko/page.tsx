import Image from "next/image"
import MainLayout from "@/components/main-layout"

const paragraphs = [
  "글로벌 항공우주 산업이 공급망을 재편하는 가운데, 한국의 주요 기술·산업 그룹들은 동남아 생산 파트너 발굴을 확대하고 있습니다. 베트남은 빠른 산업 성장, 개선되는 정밀 제조 역량, 젊은 기술 인력을 바탕으로 유망 시장으로 평가받고 있습니다.",
  "HDP HOLDINGS는 한국항공우주산업(KAI) 경영진과 베트남 기업 간 교류 프로그램을 공동 기획해 항공우주 산업 공급망 협력을 촉진했습니다.",
  "이번 행사에는 공급망을 담당하는 KAI 부사장, 그룹 전략총괄, 그리고 Giza Group, Thang Long Metal, SAVIMEC, ATH, 하노이공대 등 베트남 정밀기계·지원산업·첨단기술 분야 기업 및 기관이 참여했습니다.",
  "프로그램 논의에 따르면 한국 측은 정밀가공, CNC machining, tooling, jig and fixture, 엔지니어링 소재, 첨단 산업 부품 분야에서 협력 확대 수요가 높습니다. 이는 베트남 기업이 항공우주 글로벌 공급망에 단계적으로 진입할 중요한 기회로 평가됩니다.",
  "다만 이 산업은 품질관리, 생산 정밀도, 데이터 보안, 안정적 운영 등 매우 높은 기준을 요구합니다. 참여를 희망하는 기업은 AS9100, ISO, 추적성(traceability), 현대적 생산관리 체계를 단계적으로 충족해야 합니다.",
  "한국 전문가들은 베트남 기업 다수가 이미 정밀기계 및 지원산업에서 좋은 기반을 갖추고 있다고 평가했습니다. 적절한 파트너 연계와 경영 시스템 고도화가 이뤄지면 베트남은 지역 첨단 공급망의 핵심 축이 될 수 있습니다.",
  "HDP HOLDINGS는 무역 촉진, 파트너 매칭, 언어·비즈니스 문화 지원, 공장 실사, 양국 협력 네트워크 구축을 통해 베트남 기업과 한국 산업 생태계를 연결하는 가교 역할을 수행하고 있습니다.",
  "HDP HOLDINGS는 단순한 거래 연결을 넘어 베트남-한국 간 장기 산업·기술 협력 생태계 구축을 목표로 하며, 이를 통해 베트남 기업의 첨단 산업 및 글로벌 공급망 역량 강화를 지원하고 있습니다.",
]

export const metadata = {
  title: "HDP HOLDINGS, 한-베 항공우주 공급망 협력 강화",
  description:
    "HDP HOLDINGS가 베트남 기업과 한국 산업 생태계를 연결해 항공우주 첨단 공급망 협력을 촉진합니다.",
}

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Trade Promotion · 08 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS, 한-베 항공우주 공급망 협력 강화
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/1.png"
                alt="한-베 항공우주 공급망 협력 미팅"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  )
}
