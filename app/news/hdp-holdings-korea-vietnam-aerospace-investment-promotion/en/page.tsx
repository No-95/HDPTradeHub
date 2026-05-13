import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS Promotes Korea-Vietnam Aerospace Investment Cooperation",
  description:
    "HDP HOLDINGS organized an investment promotion and production environment assessment program in Vietnam for senior executives from Korea's aerospace industry.",
}

const paragraphs = [
  "As the global aerospace industry accelerates supply-chain restructuring and expands production across Asia, HDP HOLDINGS organized an investment cooperation and manufacturing assessment program in Vietnam for a high-level Korean aerospace delegation.",
  "The delegation included the Vice President of Korea Aerospace Industries (KAI) in charge of supply chain, the group's strategy director, and the CEO of Composite Korea (KCI), a company specializing in composite materials and high-tech aerospace components.",
  "During the working program, the delegation assessed Vietnam's investment environment, supporting industry capability, factory systems, and cooperation potential with Vietnamese companies in precision engineering, composite materials, high technology, and aerospace supply chains. This is considered a key step in identifying strategic partners and expanding Korean production networks in Southeast Asia.",
  "KAI is currently the largest aerospace group in Korea, operating across military aircraft, civil aircraft, UAVs, defense technology, and advanced aerospace manufacturing. As global demand rises and pressure increases to optimize costs and diversify supply chains, Korean enterprises are seeking to broaden manufacturing partnerships with industrially promising countries such as Vietnam.",
  "According to the delegation's assessment, Vietnam has major strengths including a strategic location in Asia, rapid industrial growth, a young workforce, and steadily improving manufacturing capability. The strong development of electronics, precision mechanics, supporting industries, and FDI over recent years is creating a strong foundation for Vietnam to move deeper into global high-tech supply chains, including aerospace.",
  "Throughout this cooperation process, HDP HOLDINGS serves as a bridge between Vietnamese businesses and the Korean industrial-technology ecosystem. HDP supports partner matching, factory visits, technology exchange, language and business-culture support, and long-term bilateral cooperation networks.",
  "According to HDP HOLDINGS, its objective is not limited to connecting investment. The company also aims to accelerate technology transfer, develop high-quality technical talent, and build a high-tech industrial cooperation ecosystem between Vietnam and Korea.",
  "HDP HOLDINGS will continue working with international partners on FDI promotion, supply-chain connectivity, supporting-industry development, and advanced technology cooperation. This is considered one of the strategic directions to strengthen Vietnamese industrial capability and open deeper participation in global value chains in the next development phase.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Aerospace Investment · 13 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS PROMOTES KOREA-VIETNAM AEROSPACE INVESTMENT COOPERATION
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/41.png"
                alt="Korean aerospace delegation surveys cooperation opportunities in Vietnam"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/51.png"
                alt="Additional image from the Korea-Vietnam aerospace investment promotion program"
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
