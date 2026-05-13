import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title:
    "HDP HOLDINGS CEO Attends Prime Minister Pham Minh Chinh's Meeting with Vietnamese Businesses and Intellectuals in Korea",
  description:
    "HDP HOLDINGS CEO attended Prime Minister Pham Minh Chinh's engagement program in Korea, helping strengthen Vietnam-Korea cooperation in the new phase.",
}

const introParagraphs = [
  "During the Prime Minister's state visit to Korea in July 2024, Prime Minister Pham Minh Chinh met with Vietnamese businesses, intellectuals, experts, and overseas Vietnamese living, studying, and working in Korea.",
  "The program brought together representatives from enterprises, organizations, and experts in technology, trade, education, industry, investment, and innovation across Vietnam and Korea. The CEO of HDP HOLDINGS attended as a business representative focused on bilateral Vietnam-Korea cooperation.",
  "The dialogue took place in an open and warm atmosphere, reflecting the Vietnamese Government's strong attention to the Vietnamese community in Korea, one of the most active overseas communities contributing to bilateral relations.",
  "After more than 30 years of diplomatic relations, Vietnam and Korea are now comprehensive strategic partners with strong growth in areas such as:",
]

const bilateralFields = ["Economy", "Trade", "Investment", "Technology", "Education", "Labor", "Cultural exchange"]

const middleParagraphs = [
  "Korea is currently one of the largest investors in Vietnam, while Vietnam is becoming a key partner in Korea's broader Asia development strategy.",
  "In this context, overseas Vietnamese businesses and experts are seen as an important bridge between the two countries, promoting practical and sustainable cooperation.",
  "Many delegates noted that Vietnamese enterprises in Korea are no longer limited to trade linkage but are increasingly contributing to:",
]

const diasporaContributions = [
  "Technology transfer",
  "Investment connectivity",
  "Human resource development",
  "Innovation ecosystem building",
  "Promoting Vietnam's image in the international community",
]

const hdpParagraphs = [
  "HDP HOLDINGS shared that the company consistently positions itself as a bridge among enterprises, talent, and the Vietnam-Korea cooperation ecosystem. In recent years, HDP has advanced many initiatives in:",
]

const hdpActivities = [
  "Education and workforce training",
  "Trade promotion",
  "Business support",
  "Technology transfer",
  "Industrial cooperation",
  "Connecting the Vietnamese community in Korea",
]

const strategicParagraphs = [
  "According to HDP representatives, in the new phase, Vietnam-Korea cooperation is expanding beyond manufacturing and investment into strategic fields such as:",
]

const strategicSectors = [
  "High technology",
  "AI and digital transformation",
  "Semiconductor industry",
  "Logistics",
  "Supply chain",
  "High-quality talent development",
]

const finalParagraphs = [
  "This opens greater opportunities for overseas Vietnamese businesses and experts to contribute more deeply to bilateral economic and technological growth.",
  "The meeting with Prime Minister Pham Minh Chinh not only reinforced the connection between the Government and overseas Vietnamese communities, but also gave renewed motivation to younger entrepreneurs and experts to contribute to Vietnam's development in a deeply integrated global era.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Diplomatic Engagement · Jul 2024</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS CEO ATTENDS PRIME MINISTER PHAM MINH CHINH'S PROGRAM WITH VIETNAMESE BUSINESSES AND INTELLECTUALS IN KOREA
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/3.png"
                alt="HDP HOLDINGS CEO attends the Prime Minister's meeting program in Korea"
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Vietnam-Korea cooperation areas</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Role of overseas Vietnamese business and expert communities</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">HDP's promoted cooperation activities</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Strategic expansion sectors in the new phase</p>
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
