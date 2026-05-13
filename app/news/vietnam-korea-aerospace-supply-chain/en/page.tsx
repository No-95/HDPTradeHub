import Image from "next/image"
import MainLayout from "@/components/main-layout"

const paragraphs = [
  "As the global aerospace industry restructures supply chains, major Korean technology and industrial groups are expanding their search for production partners in Southeast Asia. Vietnam is regarded as a high-potential market thanks to rapid industrial growth, improving precision manufacturing capability, and a young technical workforce.",
  "HDP HOLDINGS coordinated a business exchange between Korea Aerospace Industries (KAI) leadership and Vietnamese companies to promote cooperation in the aerospace industrial supply chain.",
  "The event was attended by KAI's Vice President in charge of supply chain, the group's strategy director, and representatives from Vietnamese industrial partners including Giza Group, Thang Long Metal Joint Stock Company, SAVIMEC, ATH, Hanoi University of Science and Technology, and other companies in precision engineering, supporting industry, and high technology.",
  "According to discussions at the program, Korean partners are currently interested in expanding cooperation in precision mechanics, CNC machining, tooling, jig and fixture, technical materials, and high-tech industrial components. This is seen as an important opportunity for Vietnamese enterprises to gradually join global aerospace supply chains.",
  "However, this sector requires very high standards in quality management, production accuracy, data security, and stable operations. Companies that want to participate need to progressively meet international standards such as AS9100, ISO, traceability, and modern production management systems.",
  "Korean experts noted that many Vietnamese companies already have a solid foundation in precision engineering and supporting industries. With proper connection and management upgrades, Vietnam can become an important node in the regional high-tech supply chain.",
  "In this cooperation journey, HDP HOLDINGS acts as a bridge between Vietnamese businesses and the Korean industrial ecosystem through trade promotion, partner matching, language and business-culture support, factory surveys, and bilateral network building.",
  "HDP HOLDINGS stated that its goal is not only trade matchmaking but also long-term industrial and technology ecosystem building between Vietnam and Korea, helping Vietnamese enterprises strengthen capabilities in high-tech sectors and global supply chains.",
]

export const metadata = {
  title: "HDP HOLDINGS Strengthens Vietnam-Korea Aerospace Supply Chain Connectivity",
  description:
    "HDP HOLDINGS connects Vietnamese manufacturers with Korea's industrial ecosystem to support high-tech aerospace supply chain cooperation.",
}

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Trade Promotion · 08 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS STRENGTHENS VIETNAM-KOREA AEROSPACE SUPPLY CHAIN CONNECTIVITY
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/1.png"
                alt="Vietnam and Korea business meeting on aerospace supply chain collaboration"
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
