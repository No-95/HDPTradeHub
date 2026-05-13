import Image from "next/image"
import MainLayout from "@/components/main-layout"

const paragraphs = [
  "Trong bối cảnh ngành hàng không vũ trụ toàn cầu đang tái cấu trúc chuỗi cung ứng, nhiều tập đoàn công nghệ và công nghiệp lớn của Hàn Quốc đang mở rộng tìm kiếm đối tác sản xuất tại Đông Nam Á. Việt Nam được đánh giá là một trong những thị trường tiềm năng nhờ tốc độ phát triển công nghiệp nhanh, năng lực gia công cơ khí ngày càng cải thiện và nguồn nhân lực kỹ thuật trẻ.",
  "HDP HOLDINGS đã phối hợp tổ chức buổi gặp mặt và trao đổi giữa lãnh đạo Tập đoàn Hàng không Vũ trụ Hàn Quốc (KAI - Korea Aerospace Industries) và các doanh nghiệp Việt Nam nhằm thúc đẩy hợp tác trong lĩnh vực chuỗi cung ứng công nghiệp hàng không vũ trụ.",
  "Sự kiện có sự tham gia của Phó Chủ tịch KAI phụ trách chuỗi cung ứng, Giám đốc chiến lược tập đoàn cùng đại diện nhiều doanh nghiệp và đối tác công nghiệp Việt Nam như Tập đoàn Giza, Công ty CP Kim Khí Thăng Long, Công ty CP SAVIMEC, Công ty ATH, Đại học Bách Khoa Hà Nội và các đơn vị trong lĩnh vực cơ khí chính xác, công nghiệp hỗ trợ và công nghệ cao.",
  "Theo trao đổi tại chương trình, phía Hàn Quốc hiện có nhu cầu mở rộng hợp tác trong các lĩnh vực như gia công cơ khí chính xác, CNC machining, tooling, jig & fixture, vật liệu kỹ thuật và linh kiện công nghiệp công nghệ cao. Đây được xem là cơ hội quan trọng để doanh nghiệp Việt Nam từng bước tham gia vào chuỗi cung ứng toàn cầu của ngành hàng không vũ trụ.",
  "Tuy nhiên, lĩnh vực này đòi hỏi tiêu chuẩn rất cao về quản lý chất lượng, độ chính xác sản xuất, bảo mật dữ liệu và năng lực vận hành ổn định. Các doanh nghiệp muốn tham gia chuỗi cung ứng cần từng bước đáp ứng các tiêu chuẩn quốc tế như AS9100, ISO, traceability và hệ thống quản trị sản xuất hiện đại.",
  "Theo đánh giá của các chuyên gia Hàn Quốc, nhiều doanh nghiệp Việt Nam hiện đã có nền tảng tốt trong lĩnh vực cơ khí chính xác và công nghiệp hỗ trợ. Nếu được kết nối đúng hướng và nâng cấp hệ thống quản trị, Việt Nam hoàn toàn có khả năng trở thành mắt xích quan trọng trong chuỗi cung ứng công nghệ cao khu vực.",
  "Trong quá trình kết nối hợp tác, HDP HOLDINGS đóng vai trò cầu nối giữa doanh nghiệp Việt Nam và hệ sinh thái công nghiệp Hàn Quốc thông qua các hoạt động xúc tiến thương mại, kết nối đối tác, hỗ trợ ngôn ngữ - văn hóa doanh nghiệp, khảo sát nhà máy và phát triển mạng lưới hợp tác song phương.",
  "Đại diện HDP HOLDINGS cho biết, mục tiêu của doanh nghiệp không chỉ dừng ở việc kết nối giao thương, mà hướng tới xây dựng hệ sinh thái hợp tác công nghiệp - công nghệ dài hạn giữa Việt Nam và Hàn Quốc, góp phần nâng cao năng lực doanh nghiệp Việt Nam trong các lĩnh vực công nghệ cao và chuỗi cung ứng toàn cầu.",
]

export const metadata = {
  title: "HDP HOLDINGS thúc đẩy kết nối chuỗi cung ứng hàng không vũ trụ Việt Nam - Hàn Quốc",
  description:
    "HDP HOLDINGS kết nối doanh nghiệp Việt Nam với hệ sinh thái công nghiệp Hàn Quốc trong lĩnh vực chuỗi cung ứng hàng không vũ trụ công nghệ cao.",
}

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Trade Promotion · 08 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS THÚC ĐẨY KẾT NỐI CHUỖI CUNG ỨNG HÀNG KHÔNG VŨ TRỤ VIỆT NAM - HÀN QUỐC
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/1.png"
                alt="Đoàn doanh nghiệp Việt Nam - Hàn Quốc trong buổi làm việc về chuỗi cung ứng hàng không vũ trụ"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mx-auto mt-10 max-w-[80ch] space-y-7 text-[#232323]">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-[1.95] md:text-[1.06rem] md:text-justify">
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
