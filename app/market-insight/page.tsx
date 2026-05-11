import MarketInsightContent from "./MarketInsightContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const titles = { vi: "Market Insight", en: "Market Insight", ko: "시장 인사이트" };
  const descriptions = {
    vi: "Cập nhật xu hướng và phân tích thị trường xuất nhập khẩu mới nhất.",
    en: "Stay updated with the latest import-export market trends and analysis.",
    ko: "최신 수출입 시장 동향 및 분석을 확인하세요."
  };
  
  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return { 
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/market-insight?lang=${currentLang}`,
      languages: { 'vi': '?lang=vi', 'en': '?lang=en', 'ko': '?lang=ko' }
    }
  };
}

export default function Page() { return <MarketInsightContent />; }
