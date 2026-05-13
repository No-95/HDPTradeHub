import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS CEO, 한국에서 Pham Minh Chinh 총리와 베트남 기업·지식인 간담회 참석",
  description:
    "HDP HOLDINGS CEO가 한국에서 열린 Pham Minh Chinh 총리 간담회에 참석해 한-베 협력 확대에 기여했습니다.",
}

const introParagraphs = [
  "2024년 7월 한국 국빈 방문 기간 중 Pham Minh Chinh 베트남 총리는 한국에 거주·유학·근무 중인 베트남 기업인, 지식인, 전문가, 교민들과 간담회를 가졌습니다.",
  "이번 프로그램에는 기술, 무역, 교육, 산업, 투자, 혁신 분야의 다양한 베트남-한국 관계자들이 참석했습니다. HDP HOLDINGS CEO 역시 한-베 양국 협력 연계를 추진하는 기업 대표로 참석했습니다.",
  "행사는 따뜻하고 개방적인 분위기 속에서 진행되었으며, 이는 한국 내 베트남 커뮤니티에 대한 베트남 정부의 높은 관심을 보여주었습니다. 해당 커뮤니티는 양국 협력에서 매우 역동적인 역할을 수행하고 있습니다.",
  "수교 30여 년을 거치며 베트남과 한국은 포괄적 전략 동반자 관계로 발전했으며, 다음 분야에서 협력이 빠르게 확대되고 있습니다:",
]

const bilateralFields = ["경제", "무역", "투자", "기술", "교육", "노동", "문화 교류"]

const middleParagraphs = [
  "한국은 현재 베트남의 최대 투자국 중 하나이며, 베트남 역시 한국의 아시아 발전 전략에서 핵심 파트너로 부상하고 있습니다.",
  "이러한 맥락에서 해외 베트남 기업과 지식인 커뮤니티는 양국 간 실질적이고 지속가능한 협력을 촉진하는 중요한 가교로 평가됩니다.",
  "참석자들은 특히 한국 내 베트남 기업이 단순 무역 연결을 넘어 다음 영역으로 역할을 확대하고 있다고 강조했습니다:",
]

const diasporaContributions = [
  "기술 이전",
  "투자 연계",
  "인재 개발",
  "혁신 협력 생태계 구축",
  "국제사회에서 베트남 이미지 제고",
]

const hdpParagraphs = [
  "HDP HOLDINGS는 기업, 인재, 한-베 협력 생태계를 연결하는 가교 역할을 핵심 정체성으로 삼고 있다고 밝혔습니다. HDP는 최근 다음 분야에서 다양한 연계 활동을 추진해 왔습니다:",
]

const hdpActivities = [
  "교육 및 인력 양성",
  "무역 진흥",
  "기업 지원",
  "기술 이전",
  "산업 협력",
  "한국 내 베트남 커뮤니티 연계",
]

const strategicParagraphs = [
  "HDP에 따르면 새로운 단계에서 한-베 협력은 제조·투자를 넘어 다음 전략 분야로 확장되고 있습니다:",
]

const strategicSectors = ["첨단기술", "AI 및 디지털 전환", "반도체 산업", "물류", "공급망", "고급 인재 양성"]

const finalParagraphs = [
  "이는 해외 베트남 기업과 지식인 커뮤니티가 양국의 경제·기술 발전에 보다 깊이 기여할 수 있는 기회를 확대합니다.",
  "Pham Minh Chinh 총리와의 간담회는 정부와 해외 베트남 커뮤니티의 유대를 강화했을 뿐 아니라, 젊은 기업인과 전문가들에게도 국제통합 시대 베트남 발전에 기여할 새로운 동력을 제공했습니다.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Diplomatic Engagement · Jul 2024</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS CEO, 한국에서 Pham Minh Chinh 총리 간담회 참석
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/3.png"
                alt="한국에서 열린 총리 간담회에 참석한 HDP HOLDINGS CEO"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {introParagraphs.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">한-베 협력 분야</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {bilateralFields.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {middleParagraphs.map((paragraph, index) => (
                <p key={`middle-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">해외 베트남 기업·지식인 커뮤니티의 역할</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {diasporaContributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {hdpParagraphs.map((paragraph, index) => (
                <p key={`hdp-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">HDP가 추진한 협력 활동</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {hdpActivities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {strategicParagraphs.map((paragraph, index) => (
                <p key={`strategic-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">신규 전략 확장 분야</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {strategicSectors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {finalParagraphs.map((paragraph, index) => (
                <p key={`final-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
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
