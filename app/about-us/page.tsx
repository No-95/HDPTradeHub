import AboutUsPage from "./AboutUsContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const titles = { vi: "Về Chúng Tôi", en: "About Us", ko: "회사 소개" };
  const descriptions = {
    vi: "HDP Holdings - Đối tác tư vấn chiến lược hàng đầu tại Việt Nam",
    en: "HDP Holdings - A leading strategic consulting partner in Vietnam",
    ko: "HDP Holdings - 베트남 최고의 전략 컨설팅 파트너"
  };
  
  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return { 
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/about-us?lang=${currentLang}`,
      languages: { 'vi': '?lang=vi', 'en': '?lang=en', 'ko': '?lang=ko' }
    }
  };
}

export default function Page() { return <AboutUsPage />; }
