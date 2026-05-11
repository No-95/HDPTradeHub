import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// Import the Google Tag Manager component
import { GoogleTagManager } from '@next/third-parties/google'
import FloatingContactWidget from "@/components/floating-contact-widget"
import ScrollToTop from "@/components/scroll-to-top"
import WaitingScreen from "@/components/waiting-screen"
import { LanguageProvider } from "@/lib/language-context"
import { ContactWidgetProvider } from "@/lib/contact-widget-context"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "HDP Trade Hub | Khai Thác Cơ Hội Giao Thương & Kết Nối Đối Tác Toàn Cầu",
    template: "%s | HDP Trade Hub"
  },
  description: "Nền tảng xúc tiến thương mại quốc tế hỗ trợ doanh nghiệp Việt kết nối giao thương, tìm đối tác nước ngoài và phát triển thị trường toàn cầu",
  verification: {
    google: [
      "ul8Nr406HOixs5oZ_DnDVnI-khbYoOtKrUROwIBWlcs", // Your first code
      "LIkw4spSHWkc1RC_QzFze-bHZcaGNvy3s0Owi5-WSRw"
    ],
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
  metadataBase: new URL('https://www.hdptradehub.com'),
  authors: [{ name: "HDP Holdings" }],
  alternates: {
    canonical: 'https://www.hdptradehub.com',
    languages: {
      'vi-VN': 'https://www.hdptradehub.com?lang=vi',
      'en-US': 'https://www.hdptradehub.com?lang=en',
      'ko-KR': 'https://www.hdptradehub.com?lang=ko',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 1. Google Tag Manager ID ONLY - This will trigger FB Pixel automatically */}
      <GoogleTagManager gtmId="GTM-TC7NMDVH" />
      
      <head>
        <style>{`
          /* Global CSS override to hide v0 branding */
          [style*="position: fixed"][style*="bottom"][style*="right"],
          [class*="v0"],
          [data-v0],
          div:has(> :contains("Built with v0")) {
            transform: scale(0.1) !important;
            transform-origin: bottom right !important;
            opacity: 0 !important;
            pointer-events: none !important;
            bottom: 20px !important;
            right: 20px !important;
          }
        `}</style>
      </head>
      
      <body className={`${beVietnamPro.variable} ${lora.variable} font-sans antialiased`}>
        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "HDP Trade Hub",
              "url": "https://www.hdptradehub.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.hdptradehub.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        <LanguageProvider>
          <ContactWidgetProvider>
            <WaitingScreen />
            <ScrollToTop />
            {children}
            <FloatingContactWidget />
          </ContactWidgetProvider>
        </LanguageProvider>
        
        {/* Vercel Speed Insights/Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
