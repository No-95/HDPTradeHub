import SeafoodExpoHome from "./SeafoodExpoContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const titles = { vi: "Triển Lãm Thủy Sản", en: "Seafood Expo", ko: "수산물 박람회" };
  const descriptions = {
    vi: "Chương trình mở rộng mạng lưới phân phối toàn cầu hải sản của Việt Nam",
    en: "Global distribution program for Vietnamese seafood",
    ko: "베트남 수산물 글로벌 유통망 확대 프로그램"
  };
  
  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return { 
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/seafood-expo?lang=${currentLang}`,
      languages: { 'vi': '?lang=vi', 'en': '?lang=en', 'ko': '?lang=ko' }
    }
  };
}

export default function Page() { return <SeafoodExpoHome />; }
