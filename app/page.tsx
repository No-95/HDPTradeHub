import HomeContent from "./HomeContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  
  // SEO Titles
  const titles = {
    vi: "HDP Trade Hub - Khai Thác Cơ Hội Giao Thương & Kết Nối Đối Tác Toàn Cầu",
    en: "HDP Trade Hub - Leveraging Trade Opportunities & Connecting Global Partners",
    ko: "HDP Trade Hub - 글로벌 비즈니스 기회 발굴 및 파트너십 연결"
  };

  // SEO Descriptions
  const descriptions = {
    vi: "Giải pháp xúc tiến thương mại quốc tế, kết nối giao thương và tìm kiếm đối tác nước ngoài cho doanh nghiệp Việt mở rộng thị trường toàn cầu.",
    en: "International trade solutions to connect Vietnamese businesses with global partners and expand into world markets",
    ko: "베트남 기업의 글로벌 시장 확대를 위한 국제 무역 증진 및 해외 파트너 연결 솔루션"
  };

  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return {
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com?lang=${currentLang}`,
      languages: {
        'vi': '?lang=vi',
        'en': '?lang=en',
        'ko': '?lang=ko',
      },
    },
    openGraph: {
      title: titles[currentLang],
      description: descriptions[currentLang],
      url: `https://www.hdptradehub.com?lang=${currentLang}`,
      siteName: 'HDP Trade Hub',
      images: [
        {
          url: '/og-image.jpg', // Make sure this exists in your /public folder
          width: 1200,
          height: 630,
        },
      ],
      locale: currentLang === 'vi' ? 'vi_VN' : currentLang === 'ko' ? 'ko_KR' : 'en_US',
      type: 'website',
    },
  };
}

export default function Page() {
  return <HomeContent />;
}
