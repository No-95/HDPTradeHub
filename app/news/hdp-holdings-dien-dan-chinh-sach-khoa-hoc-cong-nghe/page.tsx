import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title:
    "Lãnh đạo HDP HOLDINGS tham gia diễn đàn trao đổi chính sách khoa học công nghệ cùng Phó Thủ tướng Nguyễn Chí Dũng",
  description:
    "HDP HOLDINGS tham gia diễn đàn tại NIC cùng Phó Thủ tướng Nguyễn Chí Dũng và cộng đồng trí thức Việt toàn cầu, thảo luận định hướng khoa học công nghệ và đổi mới sáng tạo.",
}

const introParagraphs = [
  "Ngày 04/10/2025, tại Trung tâm Đổi mới Sáng tạo Quốc gia (NIC), lãnh đạo HDP HOLDINGS đã tham gia chương trình gặp mặt, đối thoại và trao đổi chính sách cùng Phó Thủ tướng Nguyễn Chí Dũng, các nhà khoa học, chuyên gia và trí thức người Việt trên toàn thế giới nhằm thảo luận về định hướng phát triển khoa học công nghệ, đổi mới sáng tạo và chiến lược nâng cao năng lực cạnh tranh quốc gia trong giai đoạn mới.",
  "Sự kiện diễn ra trong bối cảnh Việt Nam đang bước vào thời kỳ chuyển đổi mạnh mẽ về mô hình tăng trưởng, từ nền kinh tế dựa vào lao động chi phí thấp sang nền kinh tế dựa trên công nghệ, tri thức và đổi mới sáng tạo. Đây được xem là một trong những giai đoạn quan trọng nhất đối với sự phát triển dài hạn của đất nước trong bối cảnh cạnh tranh toàn cầu ngày càng khốc liệt.",
]

const policyTopics = [
  "Phát triển hệ sinh thái đổi mới sáng tạo quốc gia",
  "Thu hút nguồn lực chất lượng cao",
  "Thúc đẩy chuyển giao công nghệ",
  "Nâng cao năng lực doanh nghiệp Việt Nam trong chuỗi cung ứng toàn cầu",
  "Xây dựng cơ chế kết nối hiệu quả giữa Nhà nước, doanh nghiệp, viện nghiên cứu và cộng đồng trí thức quốc tế",
]

const midParagraphs = [
  "Theo đánh giá của các chuyên gia tham dự, Việt Nam hiện đang đứng trước cả cơ hội lớn lẫn nhiều thách thức. Bên cạnh lợi thế về dân số trẻ, tốc độ số hóa nhanh và vị trí chiến lược trong khu vực, Việt Nam vẫn đối mặt với các hạn chế về năng lực công nghệ lõi, chất lượng nguồn nhân lực, khả năng nghiên cứu phát triển (R&D) và mức độ tham gia vào chuỗi giá trị công nghệ cao toàn cầu.",
  "Trong bối cảnh đó, việc thúc đẩy liên kết giữa doanh nghiệp - công nghệ - giáo dục - đầu tư quốc tế được xem là yếu tố quan trọng để tạo ra động lực phát triển mới cho nền kinh tế.",
  "Đại diện HDP HOLDINGS cho biết, doanh nghiệp xác định khoa học công nghệ, chuyển đổi số và phát triển nhân lực chất lượng cao là những lĩnh vực chiến lược trong giai đoạn tới. HDP đang từng bước xây dựng hệ sinh thái kết nối Việt Nam - Hàn Quốc và quốc tế trong các lĩnh vực:",
]

const strategicAreas = [
  "Công nghệ và IT outsourcing",
  "Đào tạo nguồn nhân lực",
  "Xúc tiến FDI",
  "Chuyển giao công nghệ",
  "Thương mại quốc tế",
  "Công nghiệp hỗ trợ",
  "Kết nối doanh nghiệp sản xuất công nghệ cao",
]

const closingParagraphs = [
  "HDP HOLDINGS cũng nhấn mạnh vai trò của cộng đồng trí thức và chuyên gia Việt Nam toàn cầu trong việc hỗ trợ Việt Nam tiếp cận các xu hướng công nghệ mới, mô hình quản trị hiện đại và mạng lưới hợp tác quốc tế.",
  "Trong thời gian tới, HDP định hướng tiếp tục đẩy mạnh các hoạt động:",
]

const upcomingActivities = [
  "Kết nối doanh nghiệp Việt Nam với đối tác quốc tế",
  "Hỗ trợ thu hút đầu tư nước ngoài",
  "Thúc đẩy hợp tác công nghệ Việt Nam - Hàn Quốc",
  "Phát triển nhân tài trẻ",
  "Xây dựng các nền tảng đào tạo gắn với nhu cầu thực tiễn của doanh nghiệp và nền kinh tế số",
]

const finalParagraph =
  "Việc tham gia các diễn đàn chính sách và đổi mới sáng tạo cấp quốc gia không chỉ thể hiện định hướng phát triển dài hạn của HDP HOLDINGS, mà còn cho thấy tinh thần đồng hành cùng tiến trình nâng cao năng lực khoa học công nghệ và hội nhập quốc tế của Việt Nam trong thời kỳ mới."

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Policy Forum · 04 Oct 2025</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              LÃNH ĐẠO HDP HOLDINGS THAM GIA DIỄN ĐÀN TRAO ĐỔI CHÍNH SÁCH KHOA HỌC CÔNG NGHỆ CÙNG PHÓ THỦ TƯỚNG NGUYỄN CHÍ DŨNG VÀ CỘNG ĐỒNG TRÍ THỨC VIỆT TOÀN CẦU
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/21.png"
                alt="Lãnh đạo HDP HOLDINGS tham gia diễn đàn chính sách khoa học công nghệ tại NIC"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/22.png"
                alt="Không khí thảo luận tại diễn đàn chính sách khoa học công nghệ"
                fill
                className="object-cover"
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {introParagraphs.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Các chủ đề trọng tâm tại diễn đàn</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {policyTopics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {midParagraphs.map((paragraph, index) => (
                <p key={`mid-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Các lĩnh vực chiến lược HDP đang thúc đẩy</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {strategicAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {closingParagraphs.map((paragraph, index) => (
                <p key={`closing-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Định hướng hoạt động thời gian tới</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {upcomingActivities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">{finalParagraph}</p>
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  )
}
