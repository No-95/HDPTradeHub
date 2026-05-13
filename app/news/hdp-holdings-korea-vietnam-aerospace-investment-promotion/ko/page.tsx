import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS, 한국-베트남 항공우주 투자 협력 촉진",
  description:
    "HDP HOLDINGS가 한국 항공우주 산업 고위급 대표단을 위해 베트남 투자 및 생산 환경 조사 프로그램을 진행했습니다.",
}

const paragraphs = [
  "글로벌 항공우주 산업이 공급망 재편과 아시아 생산 확대를 가속화하는 가운데, HDP HOLDINGS는 한국 항공우주 산업 고위급 대표단을 대상으로 베트남 투자 협력 및 생산 환경 조사 프로그램을 운영했습니다.",
  "대표단에는 공급망을 담당하는 한국항공우주산업(KAI) 부사장, 그룹 전략총괄, 그리고 복합소재 및 항공우주 고기술 부품 전문 기업인 Composite Korea(KCI) 대표이사가 포함되었습니다.",
  "방문 기간 동안 대표단은 베트남의 투자 환경, 지원 산업 역량, 공장 시스템, 그리고 정밀기계, 복합소재, 첨단기술, 항공우주 산업 공급망 분야에서 베트남 기업들과의 협력 가능성을 조사했습니다. 이는 동남아 지역에서 한국 기업의 전략적 파트너 발굴과 생산 네트워크 확장을 위한 중요한 단계로 평가됩니다.",
  "KAI는 군용기, 민항기, UAV, 국방기술, 첨단 항공우주 산업을 아우르는 한국 최대 항공우주 기업입니다. 글로벌 생산 수요 증가와 비용 최적화, 공급망 다변화 압력이 커지는 상황에서 한국 측은 베트남과 같은 산업 잠재력이 높은 국가와의 생산 협력 확대를 추진하고 있습니다.",
  "대표단 평가에 따르면, 베트남은 아시아 내 전략적 위치, 빠른 산업 성장, 젊은 인력, 지속적으로 향상되는 제조 역량이라는 강점을 보유하고 있습니다. 특히 전자, 정밀기계, 지원 산업, FDI의 강한 성장세는 베트남이 항공우주를 포함한 글로벌 첨단 공급망에 더 깊이 참여할 수 있는 기반을 마련하고 있습니다.",
  "협력 연계 과정에서 HDP HOLDINGS는 베트남 기업과 한국 산업·기술 생태계를 잇는 가교 역할을 수행하고 있습니다. HDP는 파트너 매칭, 공장 실사, 기술 교류, 언어 및 비즈니스 문화 지원, 장기 협력 네트워크 구축을 지원합니다.",
  "HDP HOLDINGS는 단순 투자 연결을 넘어 기술 이전 촉진, 고급 기술 인재 양성, 베트남-한국 간 첨단 산업 협력 생태계 구축을 목표로 하고 있다고 밝혔습니다.",
  "HDP HOLDINGS는 앞으로도 국제 파트너들과 함께 FDI 유치, 공급망 연계, 지원 산업 육성, 첨단기술 협력을 지속적으로 추진할 계획입니다. 이는 베트남 기업의 산업 역량을 강화하고 새로운 성장 단계에서 글로벌 가치사슬 참여 기회를 확대하기 위한 핵심 전략으로 평가됩니다.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Aerospace Investment · 13 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS, 한국-베트남 항공우주 투자 협력 촉진
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/41.png"
                alt="한국 항공우주 대표단의 베트남 협력 조사"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/51.png"
                alt="한-베 항공우주 투자 협력 프로그램 추가 현장 이미지"
                fill
                className="object-cover"
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
