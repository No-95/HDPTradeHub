import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title:
    "CEO HDP HOLDINGS tham dự chương trình gặp gỡ Thủ tướng Phạm Minh Chính cùng cộng đồng doanh nghiệp và trí thức Việt Nam tại Hàn Quốc",
  description:
    "CEO HDP HOLDINGS tham dự chương trình gặp gỡ Thủ tướng Chính phủ Phạm Minh Chính, góp phần thúc đẩy hợp tác Việt Nam - Hàn Quốc trong giai đoạn mới.",
}

const introParagraphs = [
  "Trong khuôn khổ chuyến thăm cấp Nhà nước tới Hàn Quốc vào tháng 7/2024, Thủ tướng Chính phủ Phạm Minh Chính đã có buổi gặp gỡ cộng đồng doanh nghiệp, trí thức, chuyên gia và kiều bào Việt Nam đang sinh sống, học tập và làm việc tại Hàn Quốc.",
  "Tham dự chương trình có đại diện nhiều doanh nghiệp, tổ chức và trí thức tiêu biểu trong các lĩnh vực công nghệ, thương mại, giáo dục, công nghiệp, đầu tư và đổi mới sáng tạo giữa Việt Nam - Hàn Quốc. CEO HDP HOLDINGS cũng vinh dự tham gia chương trình với tư cách đại diện doanh nghiệp hoạt động trong lĩnh vực kết nối hợp tác song phương Việt - Hàn.",
  "Buổi gặp gỡ diễn ra trong không khí thân tình, cởi mở và thể hiện rõ sự quan tâm sâu sắc của Chính phủ Việt Nam đối với cộng đồng người Việt Nam tại Hàn Quốc - một trong những cộng đồng kiều bào năng động và có nhiều đóng góp trong quan hệ hợp tác giữa hai quốc gia.",
  "Sau hơn 30 năm thiết lập quan hệ ngoại giao, Việt Nam và Hàn Quốc hiện đã trở thành đối tác chiến lược toàn diện với sự phát triển mạnh mẽ trên nhiều lĩnh vực như:",
]

const bilateralFields = [
  "Kinh tế",
  "Thương mại",
  "Đầu tư",
  "Công nghệ",
  "Giáo dục",
  "Lao động",
  "Giao lưu văn hóa",
]

const middleParagraphs = [
  "Hàn Quốc hiện là một trong những nhà đầu tư lớn nhất tại Việt Nam, đồng thời Việt Nam cũng đang trở thành đối tác trọng điểm của Hàn Quốc trong chiến lược phát triển tại châu Á.",
  "Trong bối cảnh đó, cộng đồng doanh nghiệp và trí thức kiều bào được xem là cầu nối quan trọng giữa hai quốc gia, góp phần thúc đẩy hợp tác thực chất và bền vững trong nhiều lĩnh vực.",
  "Phát biểu và trao đổi tại chương trình, nhiều đại biểu cho rằng thế hệ doanh nghiệp Việt Nam tại Hàn Quốc hiện nay không chỉ đóng vai trò kết nối thương mại, mà còn đang từng bước tham gia vào:",
]

const diasporaContributions = [
  "Chuyển giao công nghệ",
  "Kết nối đầu tư",
  "Phát triển nguồn nhân lực",
  "Xây dựng hệ sinh thái hợp tác đổi mới sáng tạo",
  "Quảng bá hình ảnh Việt Nam trong cộng đồng quốc tế",
]

const hdpParagraphs = [
  "Đại diện HDP HOLDINGS cho biết, doanh nghiệp luôn xác định vai trò của mình là cầu nối giữa doanh nghiệp, nguồn nhân lực và hệ sinh thái hợp tác Việt Nam - Hàn Quốc. Trong thời gian qua, HDP đã thúc đẩy nhiều hoạt động kết nối trong các lĩnh vực:",
]

const hdpActivities = [
  "Giáo dục và đào tạo nhân lực",
  "Xúc tiến thương mại",
  "Hỗ trợ doanh nghiệp",
  "Chuyển giao công nghệ",
  "Hợp tác công nghiệp",
  "Kết nối cộng đồng Việt Nam tại Hàn Quốc",
]

const strategicParagraphs = [
  "Theo đại diện HDP, trong giai đoạn mới, quan hệ Việt Nam - Hàn Quốc không chỉ dừng lại ở hợp tác sản xuất và đầu tư, mà đang mở rộng sang các lĩnh vực chiến lược như:",
]

const strategicSectors = [
  "Công nghệ cao",
  "AI và chuyển đổi số",
  "Công nghiệp bán dẫn",
  "Logistics",
  "Chuỗi cung ứng",
  "Phát triển nguồn nhân lực chất lượng cao",
]

const finalParagraphs = [
  "Điều này mở ra nhiều cơ hội cho cộng đồng doanh nghiệp và trí thức kiều bào tham gia sâu hơn vào quá trình phát triển kinh tế - công nghệ giữa hai nước.",
  "Buổi gặp gỡ với Thủ tướng Phạm Minh Chính không chỉ thể hiện sự gắn kết giữa Chính phủ với cộng đồng người Việt Nam tại nước ngoài, mà còn tiếp thêm động lực cho các doanh nghiệp và trí thức trẻ tiếp tục đóng góp vào sự phát triển chung của Việt Nam trong thời kỳ hội nhập quốc tế sâu rộng.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Diplomatic Engagement · Jul 2024</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              CEO HDP HOLDINGS THAM DỰ CHƯƠNG TRÌNH GẶP GỠ THỦ TƯỚNG PHẠM MINH CHÍNH CÙNG CỘNG ĐỒNG DOANH NGHIỆP VÀ TRÍ THỨC VIỆT NAM TẠI HÀN QUỐC
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/3.png"
                alt="CEO HDP HOLDINGS tham dự chương trình gặp gỡ Thủ tướng Phạm Minh Chính tại Hàn Quốc"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {introParagraphs.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Lĩnh vực hợp tác Việt Nam - Hàn Quốc</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {bilateralFields.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {middleParagraphs.map((paragraph, index) => (
                <p key={`middle-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Vai trò của doanh nghiệp và trí thức kiều bào</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {diasporaContributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {hdpParagraphs.map((paragraph, index) => (
                <p key={`hdp-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Các hoạt động kết nối HDP đã thúc đẩy</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {hdpActivities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {strategicParagraphs.map((paragraph, index) => (
                <p key={`strategic-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3 rounded-lg border border-[#ddd6c8] bg-[#efeadf] p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#454545]">Các lĩnh vực chiến lược mở rộng giai đoạn mới</p>
                <ul className="list-disc space-y-2 pl-5 text-base leading-[1.8] md:text-[1.03rem]">
                  {strategicSectors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {finalParagraphs.map((paragraph, index) => (
                <p key={`final-${index}`} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  )
}
