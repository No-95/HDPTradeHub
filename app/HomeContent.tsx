"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { useScroll, useTransform, motion, useInView, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import MainLayout from "@/components/main-layout"
import FeaturedProjects, { FeaturedProject } from "@/components/featured-projects"
import ProcessSlider from "@/components/process-slider"

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string
          playerVars: Record<string, number | string>
          events: {
            onReady?: (event: { target: YTPlayer }) => void
            onStateChange?: (event: { data: number }) => void
          }
        },
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  playVideo: () => void
  setPlaybackRate: (rate: number) => void
  mute: () => void
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void
  getCurrentTime: () => number
}

const testimonials = [
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "HDP HOLDINGS was founded with the aspiration of becoming a strategic bridge between Vietnam and the international market, where technology, industry, trade, and high-quality human resources converge.",
      vi: "HDP HOLDINGS được thành lập với khát vọng trở thành cầu nối chiến lược giữa Việt Nam và thị trường quốc tế, nơi hội tụ công nghệ, công nghiệp, thương mại và nguồn nhân lực chất lượng cao.",
      ko: "HDP HOLDINGS는 기술, 산업, 무역, 그리고 우수한 인적자원이 수렴하는 베트남과 국제시장 사이의 전략적 다리가 되려는 염원으로 설립되었습니다.",
    }
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "We believe that sustainable value is not built through short-term relationships, but through genuine partnership, credibility in every commitment, and the capability to execute with consistency and dedication.",
      vi: "Chúng tôi tin rằng giá trị bền vững không được xây dựng từ các mối quan hệ ngắn hạn, mà từ hợp tác thực sự, tính tin cậy trong mỗi cam kết, và khả năng thực hiện nhất quán và tận tâm.",
      ko: "우리는 지속 가능한 가치가 단기적 관계에서 비롯되는 것이 아니라, 진정한 파트너십, 모든 약속에서의 신뢰성, 그리고 일관성 있고 헌신적인 실행 능력에서 비롯된다고 믿습니다.",
    }
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "HDP HOLDINGS aims to collaborate with domestic and international partners to build a long-term cooperation ecosystem, where businesses can grow together, expand into new markets, and create meaningful value for communities and regional economies.",
      vi: "HDP HOLDINGS hướng tới hợp tác với các đối tác trong nước và quốc tế để xây dựng hệ sinh thái hợp tác dài hạn, nơi các doanh nghiệp có thể phát triển cùng nhau, mở rộng thị trường và tạo ra giá trị ý nghĩa cho cộng đồng và nền kinh tế khu vực.",
      ko: "HDP HOLDINGS는 국내 및 국제 파트너와 협력하여 장기 협력 생태계를 구축하고자 하며, 여기서 기업들이 함께 성장하고, 새로운 시장으로 확장하며, 지역사회 및 지역 경제에 의미 있는 가치를 창출합니다.",
    }
  },
  {
    name: "Dương Thu Hương (Hanny)",
    role: "CEO HDPHoldings",
    quote: {
      en: "We deeply appreciate every opportunity for collaboration and are always ready to accompany partners who share a bold vision, a strong spirit of action, and the ambition to reach global markets.",
      vi: "Chúng tôi trân trọng mỗi cơ hội hợp tác và luôn sẵn sàng đồng hành cùng những đối tác có tầm nhìn táo bạo, tinh thần hành động mạnh mẽ, và tham vọng chinh phục thị trường toàn cầu.",
      ko: "우리는 모든 협력 기회를 소중히 여기며, 대담한 비전, 강한 실행 정신, 그리고 글로벌 시장을 향한 야망을 공유하는 파트너들과 항상 함께할 준비가 되어 있습니다.",
    }
  },
]

const partnerLogos = Array.from({ length: 15 }, (_, idx) => ({
  id: idx + 1,
  src: `/logo/${idx + 1}.jpg`,
  alt: `Partner logo ${idx + 1}`,
}))

const aboutSlideshowImages = [
  {
    src: "/images/enterprise-meeting-discussion.jpg",
    title: "Enterprise Strategy Discussion",
  },
  {
    src: "/images/korea-agreement-signing.jpg",
    title: "Korea Partnership Agreement",
  },
  {
    src: "/images/bilateral-mou-agreement.jpg",
    title: "Bilateral MOU Ceremony",
  },
  {
    src: "/images/airport-aviation-cooperation.jpg",
    title: "Aviation Cooperation Dialogue",
  },
  {
    src: "/images/investment-partnership-agreement.jpg",
    title: "Investment Partnership Signing",
  },
]

const allNewsItems = [
  {
    id: "news-1",
    date: "08 May 2026",
    category: "Trade Promotion",
    title: "HDP Holdings Leads Vietnam-Korea Aerospace Supply Chain Mission",
    excerpt:
      "A high-level delegation of Vietnamese manufacturing enterprises visited Seoul to explore integration opportunities within Korea's aerospace supply chain ecosystem.",
    image: "/Articles/1.png",
    href: "/news/vietnam-korea-aerospace-supply-chain",
  },
  {
    id: "news-2",
    date: "04 Oct 2025",
    category: "Policy Forum",
    title: "HDP Holdings Leadership Joins National Science and Technology Policy Forum",
    excerpt:
      "HDP HOLDINGS participated in a policy dialogue at NIC with Deputy Prime Minister Nguyen Chi Dung and global Vietnamese experts.",
    image: "/Articles/21.png",
    href: "/news/hdp-holdings-dien-dan-chinh-sach-khoa-hoc-cong-nghe",
  },
  {
    id: "news-3",
    date: "Jul 2024",
    category: "Diplomatic Engagement",
    title: "HDP Holdings CEO Attends PM Pham Minh Chinh Program in Korea",
    excerpt:
      "HDP HOLDINGS CEO joined the Prime Minister's engagement with Vietnamese businesses and intellectuals in Korea.",
    image: "/Articles/3.png",
    href: "/news/ceo-hdp-holdings-gap-go-thu-tuong-pham-minh-chinh",
  },
  {
    id: "news-4",
    date: "13 May 2026",
    category: "Aerospace Investment",
    title: "HDP Holdings Promotes Korea-Vietnam Aerospace Investment Cooperation",
    excerpt:
      "HDP HOLDINGS organized an investment promotion and manufacturing assessment program in Vietnam for Korea's aerospace leadership delegation.",
    image: "/Articles/41.png",
    href: "/news/hdp-holdings-korea-vietnam-aerospace-investment-promotion",
  },
]

const featuredProjects: FeaturedProject[] = [
  {
    id: "seafood-export",
    title: "Seafood Export Promotion Program",
    location: "VN",
    image: "/images/seafood-expo.png",
    href: "/seafood-expo",
  },
  {
    id: "furniture-wood",
    title: "Furniture & Wood Industry Trade and Investment Promotion",
    location: "VN",
    image: "/images/kofurn.png",
    href: "/global-furniture-business-roadshow",
  },
  {
    id: "aerospace-supply",
    title: "Aerospace Supply Chain Integration Program",
    location: "KR",
    image: "/images/aerospace.png",
    href: "/coming-soon",
  },
  {
    id: "machinery-supply",
    title: "Machinery & Mechanical Supply Chain Integration",
    location: "KR",
    image: "/images/tech.png",
    href: "/coming-soon",
  },
  {
    id: "busan-seafood",
    title: "Busan Seafood Export Promotion Program",
    location: "KR",
    image: "/images/seafoodexpo2.png",
    href: "/coming-soon",
  },
]

export default function HomePage() {
  const [heroHeight, setHeroHeight] = useState(700)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const playerRef = useRef<YTPlayer | null>(null)
  const loopCheckRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Hero Framer Motion
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const aboutHeadingRef = useRef<HTMLHeadingElement | null>(null)
  const isHeadingInView = useInView(aboutHeadingRef, { once: true, margin: "0px 0px -80px 0px" })

  const { scrollY } = useScroll()

  // Background scales from 1 to 1.2 as user scrolls through hero
  const bgScale = useTransform(scrollY, [0, heroHeight], [1, 1.2])
  const overlayOpacity = useTransform(scrollY, [0, heroHeight], [0, 0.9])

  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight)
      }
    }

    updateHeroHeight()
    window.addEventListener("resize", updateHeroHeight)

    return () => window.removeEventListener("resize", updateHeroHeight)
  }, [])

  const { lang } = useLanguage()
  const t = translations[lang]

  const newsItems = useMemo(() => {
    const shuffled = [...allNewsItems]
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = temp
    }
    return shuffled.slice(0, 3)
  }, [])

  const aboutHeading = t.homeAboutHeading
  const aboutParagraphs = [
    t.homeAboutParagraph1,
    t.homeAboutParagraph2,
    t.homeAboutParagraph3,
    t.homeAboutParagraph4,
  ]



  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "ksmOG4I0tOs",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          origin: typeof window !== "undefined" ? window.location.origin : "",
        },
        events: {
          onReady: (event) => {
            event.target.mute()
            event.target.setPlaybackRate(1.3)
            event.target.playVideo()
          },
          onStateChange: (event) => {
            // Keep playback seamless by rewinding just before 110s.
            if (event.data === 1) {
              if (loopCheckRef.current) clearInterval(loopCheckRef.current)
              loopCheckRef.current = setInterval(() => {
                const currentTime = playerRef.current?.getCurrentTime()
                if (typeof currentTime === "number" && currentTime >= 110) {
                  playerRef.current?.seekTo(0, true)
                  playerRef.current?.playVideo()
                }
              }, 250)
            } else if (loopCheckRef.current) {
              clearInterval(loopCheckRef.current)
              loopCheckRef.current = null
            }
          },
        },
      })
    }

    return () => {
      if (loopCheckRef.current) {
        clearInterval(loopCheckRef.current)
        loopCheckRef.current = null
      }
      window.onYouTubeIframeAPIReady = () => {}
    }
  }, [])

  useEffect(() => {
    if (isTestimonialPaused) return
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isTestimonialPaused])

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <MainLayout>
      <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50/50 to-white">
        <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
          {/* YouTube Video Background Container with scroll-driven scale */}
          <motion.div
            className="absolute inset-0 overflow-hidden bg-slate-900"
            style={{ scale: bgScale }}
          >
            <div
              id="youtube-player"
              className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
            />
          </motion.div>

          {/* Black overlay ramps up as the hero scrolls out */}
          <motion.div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

          {/* Decorative top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f28018] to-transparent" />

          {/* Subtle static dark overlay for text readability */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/8" />

          {/* Hero content overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
            <div className="w-full max-w-5xl px-6 py-10 text-center text-white md:px-12 md:py-14">
              <h1 className="font-sans text-[1.9rem] font-bold leading-[1.15] tracking-[-0.02em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] sm:text-[2.5rem] md:text-[3.1rem]">
                HDP HOLDINGS
              </h1>

              <div className="mx-auto mt-8 h-px w-[80%] bg-white/70" />

              <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[1.3rem] font-semibold leading-[1.25] tracking-[-0.01em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] sm:text-[1.55rem] md:text-[1.95rem]" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.7)" }}>
                HIGH-TECH INDUSTRY DEVELOPMENT PIONEER
              </h2>

              <div className="mx-auto mt-5 h-px w-[80%] bg-white/70" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"></div>
        </section>

        <section
          id="about"
          ref={aboutRef}
          data-nav-theme-to="light"
          className="relative overflow-hidden bg-[#F5F3ED] py-20 md:py-24"
        >
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-10 md:gap-y-0 items-end">
              {/* Row 1: (About) label + full-width heading */}
              <div className="md:col-span-1 md:col-start-1 md:pt-2">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.homeAboutLabel}
                </motion.span>
              </div>

              <div className="md:col-span-11 md:col-start-2 md:pb-16 text-center">
                <h2
                  ref={aboutHeadingRef}
                  aria-label={aboutHeading}
                  className="mx-auto max-w-[52ch] font-serif text-[1.65rem] leading-[1.25] tracking-[-0.02em] text-[#141414] sm:text-4xl md:text-5xl lg:text-[3.75rem]"
                >
                  {aboutHeading.split(" ").map((word, wordIndex) => (
                    <span key={`word-${wordIndex}`} className="mr-[0.22em] inline-flex overflow-hidden align-top">
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={`char-${wordIndex}-${charIndex}`}
                          initial={{ y: "115%" }}
                          animate={isHeadingInView ? { y: "0%" } : { y: "115%" }}
                          transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                            delay: wordIndex * 0.025 + charIndex * 0.008,
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="md:col-span-6 md:col-start-1 md:row-start-3 flex items-end justify-center">
                <div className="relative w-11/12 aspect-square overflow-hidden bg-[#F5F3ED] rounded-2xl shadow-lg flex items-center justify-center">
                  {!isVideoLoaded ? (
                    <button
                      onClick={() => setIsVideoLoaded(true)}
                      className="relative w-full h-full cursor-pointer group flex items-center justify-center"
                      aria-label="Play video"
                    >
                      <div className="relative w-4/5 h-4/5">
                        <Image
                          src="/images/hdp-logo.png"
                          alt="HDP Holdings"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-[#FF4F11] border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ksmOG4I0tOs?autoplay=1&controls=1&modestbranding=1"
                      title="HDP Holdings - About"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  )}
                </div>
              </div>


              <div className="md:col-span-6 md:col-start-7 md:row-start-3 flex items-end">
                <div className="mx-auto max-w-[62ch] space-y-7 text-[#232323]">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p key={`about-paragraph-${index}`} className="text-base leading-[1.9] text-left md:text-justify md:text-[1.05rem]">
                      {paragraph}
                    </p>
                  ))}

                  <Link
                    href="/about-us"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#FF4F11] px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#eb460d]"
                  >
                    <span className="relative block h-6 overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        {t.homeAboutCta}
                      </span>
                      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        {t.homeAboutCta}
                      </span>
                    </span>
                    <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/45 bg-white/10">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
                      <ArrowRight className="absolute h-5 w-5 -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProjects 
          projects={featuredProjects}
          featuredLabel={t.featuredLabel}
        />

        <ProcessSlider
          processLabel={t.processLabel}
          heading={t.processHeading}
        />

        {/* ── Logo Carousel ─────────────────────────────────────────── */}
        <section
          id="partners"
          data-nav-theme-to="light"
          className="relative overflow-hidden bg-[#F5F3ED] pt-8 pb-32 md:pt-10 md:pb-40"
        >
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 mb-12 md:mb-16">
            <div className="flex items-baseline gap-12">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-sm tracking-[0.18em] text-[#151515]"
              >
                {t.homePartnersLabel}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.4rem] font-semibold tracking-tight text-[#141414] sm:text-5xl"
              >
                {t.homePartnersTitle}
              </motion.h2>
            </div>
          </div>

          {/* Infinite marquee */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-logo-marquee gap-24 items-center">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={`${logo.id}-${idx}`}
                  className="flex h-36 w-88 shrink-0 items-center justify-center rounded-xl border border-[#D6D3CC] bg-white px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={272}
                    height={112}
                    className="h-28 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial / Quote ───────────────────────────────────── */}
        <section
          id="testimonials"
          data-nav-theme-to="dark"
          className="relative overflow-hidden bg-[#0f0f0f] py-4 md:py-6"
          onMouseEnter={() => setIsTestimonialPaused(true)}
          onMouseLeave={() => setIsTestimonialPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,128,24,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid gap-3 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#1a1a1a]">
                  <Image
                    src="/images/hanny.png"
                    alt="Dương Thu Hương (Hanny)"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    priority
                  />
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold tracking-tight text-white md:text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="mt-1 text-sm tracking-[0.12em] text-white/60 uppercase">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                  <div className="text-right text-xs tracking-[0.2em] text-white/45">
                    {String(currentTestimonial + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:p-4 lg:p-5 flex flex-col justify-between">
                <div className="relative min-h-[96px] md:min-h-[120px]">
                  {testimonials.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      animate={
                        idx === currentTestimonial
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 16 }
                      }
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute inset-0 flex flex-col justify-between gap-8 ${
                        idx === currentTestimonial ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                    >
                      <div>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f28018]/15 text-lg text-[#f6a153]">
                          “
                        </span>
                        <blockquote className="mt-3 max-w-4xl font-serif text-[1.9rem] leading-[1.45] tracking-[-0.02em] text-white/90 sm:text-[1.7rem] md:text-[1.95rem]">
                          {typeof item.quote === 'string' ? item.quote : item.quote[(lang === 'VN' ? 'vi' : lang === 'KR' ? 'ko' : 'en') as keyof typeof item.quote]}
                        </blockquote>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={prevTestimonial}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={nextTestimonial}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial ? "bg-[#f28018] w-12" : "bg-white/20 w-5"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── News ─────────────────────────────────────────────────── */}
        <section
          id="news"
          data-nav-theme-to="light"
          className="relative overflow-hidden bg-[#F5F3ED] py-24 md:py-32"
        >
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            {/* Header row */}
            <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-sm tracking-[0.18em] text-[#151515]"
                >
                  {t.homeNewsLabel}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 font-serif text-[2.4rem] leading-[1.3] tracking-[-0.02em] text-[#141414] sm:text-5xl"
                >
                  {t.homeNewsTitle}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="/news"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#141414] underline underline-offset-4 decoration-transparent hover:decoration-[#141414] transition-all duration-300"
                >
                  {t.homeNewsViewAll}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* News grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={item.href} className="group block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#e5e2da]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Meta */}
                    <div className="mt-5 flex items-center gap-3 text-xs text-[#888] tracking-wide">
                      <span>{item.date}</span>
                      <span className="h-px w-4 bg-[#ccc]" />
                      <span className="uppercase tracking-widest">{item.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#141414] transition-colors duration-300 group-hover:text-[#f28018]">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2 text-sm leading-relaxed text-[#5a5a5a] line-clamp-3">{item.excerpt}</p>

                    {/* Read more */}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#141414] group-hover:text-[#f28018] transition-colors duration-300">
                      {t.homeNewsReadMore}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
