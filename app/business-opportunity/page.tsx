import BusinessOpportunityContent from "./BusinessOpportunityContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const titles = { vi: "Cơ Hội Hợp Tác", en: "Business Opportunities", ko: "비즈니스 기회" };
  const descriptions = {
    vi: "Khám phá các cơ hội đầu tư và hợp tác kinh doanh quốc tế.",
    en: "Explore international business cooperation and investment opportunities.",
    ko: "국제 비즈니스 협력 및 투자 기회를 탐색하십시오."
  };
  
  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return { 
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/business-opportunity?lang=${currentLang}`,
      languages: { 'vi': '?lang=vi', 'en': '?lang=en', 'ko': '?lang=ko' }
    }
  };
}

export default function Page() { return <BusinessOpportunityContent />; }
