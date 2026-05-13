"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import MainLayout from "@/components/main-layout"

const newsItems = [
  {
    id: "news-1",
    date: "08 May 2026",
    category: "Trade Promotion",
    title: "HDP HOLDINGS THÚC ĐẨY KẾT NỐI CHUỖI CUNG ỨNG HÀNG KHÔNG VŨ TRỤ VIỆT NAM - HÀN QUỐC",
    excerpt:
      "HDP HOLDINGS đã phối hợp tổ chức buổi gặp mặt giữa lãnh đạo KAI và doanh nghiệp Việt Nam nhằm thúc đẩy hợp tác chuỗi cung ứng công nghiệp hàng không vũ trụ.",
    image: "/Articles/1.png",
    href: "/news/vietnam-korea-aerospace-supply-chain",
  },
  {
    id: "news-2",
    date: "04 Oct 2025",
    category: "Policy Forum",
    title: "LÃNH ĐẠO HDP HOLDINGS THAM GIA DIỄN ĐÀN TRAO ĐỔI CHÍNH SÁCH KHOA HỌC CÔNG NGHỆ",
    excerpt:
      "Lãnh đạo HDP HOLDINGS tham gia đối thoại chính sách cùng Phó Thủ tướng Nguyễn Chí Dũng và cộng đồng trí thức Việt toàn cầu tại NIC.",
    image: "/Articles/21.png",
    href: "/news/hdp-holdings-dien-dan-chinh-sach-khoa-hoc-cong-nghe",
  },
  {
    id: "news-3",
    date: "Jul 2024",
    category: "Diplomatic Engagement",
    title: "CEO HDP HOLDINGS THAM DỰ CHƯƠNG TRÌNH GẶP GỠ THỦ TƯỚNG PHẠM MINH CHÍNH",
    excerpt:
      "CEO HDP HOLDINGS tham dự chương trình gặp gỡ Thủ tướng cùng cộng đồng doanh nghiệp và trí thức Việt Nam tại Hàn Quốc, thúc đẩy kết nối hợp tác song phương.",
    image: "/Articles/3.png",
    href: "/news/ceo-hdp-holdings-gap-go-thu-tuong-pham-minh-chinh",
  },
  {
    id: "news-4",
    date: "13 May 2026",
    category: "Aerospace Investment",
    title: "HDP HOLDINGS XUC TIEN HOP TAC DAU TU HANG KHONG VU TRU GIUA HAN QUOC VA VIET NAM",
    excerpt:
      "HDP HOLDINGS da to chuc chuong trinh ket noi dau tu va khao sat moi truong san xuat tai Viet Nam cho doan lanh dao cap cao nganh hang khong vu tru Han Quoc.",
    image: "/Articles/41.png",
    href: "/news/hdp-holdings-korea-vietnam-aerospace-investment-promotion",
  },
]

export default function NewsContent() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <MainLayout>
      <div className="relative overflow-hidden bg-[#F5F3ED]">
        <section className="relative border-b border-[#141414]/10 bg-gradient-to-b from-[#f1ede3] to-[#F5F3ED] py-20 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-sm tracking-[0.18em] text-[#151515]"
            >
              {t.homeNewsLabel}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-4xl font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-5xl"
            >
              {t.homeNewsTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-3xl text-base leading-relaxed text-[#5a5a5a] md:text-lg"
            >
              Curated updates on market expansion, strategic partnerships, and trade programs led by HDP Holdings.
            </motion.p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={item.href} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#e5e2da]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="mt-5 flex items-center gap-3 text-xs tracking-wide text-[#888]">
                      <span>{item.date}</span>
                      <span className="h-px w-4 bg-[#ccc]" />
                      <span className="uppercase tracking-widest">{item.category}</span>
                    </div>

                    <h2 className="mt-3 text-lg font-semibold leading-snug text-[#141414] transition-colors duration-300 group-hover:text-[#f28018]">
                      {item.title}
                    </h2>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#5a5a5a]">{item.excerpt}</p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#141414] transition-colors duration-300 group-hover:text-[#f28018]">
                      {t.homeNewsReadMore}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
