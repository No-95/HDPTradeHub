import NewsContent from "./NewsContent"

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams

  const titles = {
    vi: "Tin Tức",
    en: "News",
    ko: "뉴스",
  }

  const descriptions = {
    vi: "Tin tức mới nhất từ HDP Holdings về xúc tiến thương mại, hợp tác và mở rộng thị trường quốc tế.",
    en: "Latest updates from HDP Holdings on trade promotion, partnerships, and international market expansion.",
    ko: "HDP Holdings의 무역 진흥, 파트너십 및 글로벌 시장 확대 관련 최신 소식입니다.",
  }

  const currentLang = lang === "en" || lang === "ko" ? lang : "vi"

  return {
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://www.hdptradehub.com/news?lang=${currentLang}`,
      languages: {
        vi: "?lang=vi",
        en: "?lang=en",
        ko: "?lang=ko",
      },
    },
  }
}

export default function Page() {
  return <NewsContent />
}
