import ContactPage from "./ContactContent";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  const titles = { vi: "Liên Hệ", en: "Contact Us", ko: "문의하기" };
  const descriptions = {
    vi: "Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn",
    en: "We are always ready to listen and support you",
    ko: "언제나 경청하고 도와드리겠습니다"
  };
  
  const currentLang = (lang === 'en' || lang === 'ko') ? lang : 'vi';

  return { 
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/contact?lang=${currentLang}`,
      languages: { 'vi': '?lang=vi', 'en': '?lang=en', 'ko': '?lang=ko' }
    }
  };
}

export default function Page() { return <ContactPage />; }
