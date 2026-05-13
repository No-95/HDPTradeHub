import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS 경영진, 국가 과학기술 정책 포럼 참여",
  description:
    "HDP HOLDINGS가 NIC에서 Nguyen Chi Dung 부총리 및 글로벌 베트남 지식인들과 과학기술·혁신 정책 대화에 참여했습니다.",
}

const introParagraphs = [
  "2025년 10월 4일, 국가혁신센터(NIC)에서 HDP HOLDINGS 경영진은 Nguyen Chi Dung 부총리, 과학자, 전문가, 전 세계 베트남 지식인들과 함께 과학기술 발전, 혁신, 그리고 새로운 시대의 국가 경쟁력 강화 전략을 논의하는 정책 대화에 참여했습니다.",
  "이번 행사는 베트남이 저비용 노동 중심 성장 모델에서 기술·지식·혁신 중심 모델로 전환하는 중요한 시점에 열렸습니다. 글로벌 경쟁이 심화되는 상황에서 이는 베트남의 장기 발전에 핵심적인 전환기로 평가됩니다.",
]

const policyTopics = [
  "국가 혁신 생태계 고도화",
  "고급 인재 유치",
  "기술 이전 촉진",
  "글로벌 공급망 내 베트남 기업 역량 강화",
  "정부, 기업, 연구기관, 글로벌 지식인 커뮤니티 간 효율적 연계 체계 구축",
]

const midParagraphs = [
  "참석 전문가들은 베트남이 큰 기회와 동시에 도전 과제를 안고 있다고 평가했습니다. 젊은 인구 구조, 빠른 디지털화, 전략적 지역 위치라는 강점이 있는 반면, 핵심기술 역량, 인력 품질, R&D 역량, 글로벌 첨단 가치사슬 참여 수준에서는 개선 과제가 남아 있습니다.",
  "이러한 맥락에서 기업·기술·교육·국제투자 간 연계를 강화하는 것이 새로운 성장 동력 창출의 핵심으로 제시되었습니다.",
  "HDP HOLDINGS는 과학기술, 디지털 전환, 고급 인재 육성을 다음 단계의 전략 분야로 설정했으며, 베트남-한국 및 국제 협력 생태계를 다음 영역에서 구축하고 있다고 밝혔습니다:",
]

const strategicAreas = [
  "기술 및 IT 아웃소싱",
  "인재 교육 및 훈련",
  "FDI 유치 촉진",
  "기술 이전",
  "국제 무역",
  "지원 산업",
  "첨단 제조기업 연계",
]

const closingParagraphs = [
  "HDP HOLDINGS는 또한 글로벌 베트남 지식인 및 전문가 커뮤니티가 신기술 트렌드, 현대 경영모델, 국제 협력 네트워크 접근을 지원하는 데 중요한 역할을 한다고 강조했습니다.",
  "향후 HDP는 다음 활동을 지속적으로 확대할 계획입니다:",
]

const upcomingActivities = [
  "베트남 기업과 해외 파트너 연결",
  "외국인 투자 유치 지원",
  "베트남-한국 기술 협력 촉진",
  "청년 인재 육성",
  "기업 및 디지털 경제 수요에 맞춘 실무형 교육 플랫폼 구축",
]

const finalParagraph =
  "국가 단위 정책·혁신 포럼 참여는 HDP HOLDINGS의 장기 전략을 보여줄 뿐 아니라, 새로운 시대 베트남의 과학기술 경쟁력 강화와 국제 통합 과정에 대한 동행 의지를 나타냅니다."

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Policy Forum · 04 Oct 2025</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS 경영진, Nguyen Chi Dung 부총리와 과학기술 정책 대화 참여
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/21.png"
                alt="NIC 정책 포럼에 참여한 HDP HOLDINGS 경영진"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/22.png"
                alt="국가 과학기술 정책 포럼 토론 현장"
                fill
                className="object-cover"
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {introParagraphs.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">포럼 핵심 정책 아젠다</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {policyTopics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {midParagraphs.map((paragraph, index) => (
                <p key={`mid-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">HDP 추진 전략 영역</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {strategicAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {closingParagraphs.map((paragraph, index) => (
                <p key={`closing-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">향후 실행 방향</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {upcomingActivities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">{finalParagraph}</p>
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  )
}
