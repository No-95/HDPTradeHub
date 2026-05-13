import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS Leadership Joins National Science and Technology Policy Forum",
  description:
    "HDP HOLDINGS participated in a policy dialogue at NIC with Deputy Prime Minister Nguyen Chi Dung and global Vietnamese experts on science, technology, and innovation.",
}

const introParagraphs = [
  "On October 4, 2025, at the National Innovation Center (NIC), HDP HOLDINGS leadership joined a policy dialogue with Deputy Prime Minister Nguyen Chi Dung, scientists, experts, and Vietnamese intellectuals worldwide to discuss science and technology development, innovation, and strategies to strengthen national competitiveness in the new era.",
  "The event took place as Vietnam enters a strong economic transition from a low-cost labor model to a technology-, knowledge-, and innovation-driven model. This period is considered one of the most critical stages for Vietnam's long-term development amid intensifying global competition.",
]

const policyTopics = [
  "Developing Vietnam's national innovation ecosystem",
  "Attracting high-quality talent",
  "Accelerating technology transfer",
  "Strengthening Vietnamese enterprise capability in global supply chains",
  "Building an effective connection mechanism among government, businesses, research institutions, and global expert communities",
]

const midParagraphs = [
  "Experts at the forum highlighted both major opportunities and significant challenges for Vietnam. Alongside strengths such as a young population, rapid digitalization, and a strategic regional location, Vietnam still faces limitations in core technology capability, workforce quality, R&D capacity, and depth of participation in global high-tech value chains.",
  "In this context, stronger linkages among business, technology, education, and international investment are considered essential to creating new growth momentum.",
  "HDP HOLDINGS shared that science and technology, digital transformation, and high-quality talent development are strategic priorities in the next phase. HDP is building a Vietnam-Korea and international cooperation ecosystem in the following areas:",
]

const strategicAreas = [
  "Technology and IT outsourcing",
  "Workforce education and training",
  "FDI promotion",
  "Technology transfer",
  "International trade",
  "Supporting industries",
  "Linking high-tech manufacturing enterprises",
]

const closingParagraphs = [
  "HDP HOLDINGS also emphasized the role of global Vietnamese experts and intellectual communities in helping Vietnam access emerging technology trends, modern management practices, and international cooperation networks.",
  "In the coming period, HDP will continue to promote:",
]

const upcomingActivities = [
  "Connecting Vietnamese companies with international partners",
  "Supporting foreign investment attraction",
  "Advancing Vietnam-Korea technology cooperation",
  "Developing young talent",
  "Building training platforms aligned with practical enterprise and digital economy needs",
]

const finalParagraph =
  "Participation in national-level policy and innovation forums not only reflects HDP HOLDINGS' long-term strategy but also demonstrates its commitment to Vietnam's science and technology advancement and international integration in the new era."

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Policy Forum · 04 Oct 2025</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS LEADERSHIP JOINS SCIENCE AND TECHNOLOGY POLICY DIALOGUE WITH DEPUTY PRIME MINISTER NGUYEN CHI DUNG
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/21.png"
                alt="HDP HOLDINGS leadership participates in policy forum at NIC"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/22.png"
                alt="Panel discussion at the national science and technology policy forum"
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Core policy topics discussed at the forum</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Strategic areas HDP is advancing</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Upcoming operational directions</p>
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
