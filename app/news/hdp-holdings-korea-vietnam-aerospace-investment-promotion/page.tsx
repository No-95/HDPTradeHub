import Image from "next/image"
import MainLayout from "@/components/main-layout"

export const metadata = {
  title: "HDP HOLDINGS XUC TIEN HOP TAC DAU TU HANG KHONG VU TRU GIUA HAN QUOC VA VIET NAM",
  description:
    "HDP HOLDINGS to chuc chuong trinh ket noi dau tu va khao sat moi truong san xuat tai Viet Nam cho doan lanh dao cap cao nganh hang khong vu tru Han Quoc.",
}

const paragraphs = [
  "Trong boi canh nganh cong nghiep hang khong vu tru toan cau dang day manh tai cau truc chuoi cung ung va mo rong san xuat tai chau A, HDP HOLDINGS da to chuc chuong trinh xuc tien hop tac dau tu va khao sat moi truong san xuat tai Viet Nam danh cho doan lanh dao cap cao cua nganh hang khong vu tru Han Quoc.",
  "Doan cong tac gom Pho Chu tich Tap doan Hang khong Vu tru Han Quoc (KAI) phu trach chuoi cung ung, Giam doc chien luoc cua tap doan cung Tong Giam doc Cong ty Composite Korea (KCI) - doanh nghiep chuyen ve vat lieu composite va linh kien cong nghe cao trong linh vuc hang khong vu tru.",
  "Trong khuon kho chuyen lam viec, doan da tien hanh khao sat moi truong dau tu, nang luc cong nghiep ho tro, he thong nha may va tiem nang hop tac voi cac doanh nghiep Viet Nam trong cac linh vuc co khi chinh xac, vat lieu composite, cong nghe cao va chuoi cung ung cong nghiep hang khong vu tru. Day duoc xem la buoc di quan trong trong qua trinh tim kiem doi tac chien luoc va mo rong mang luoi san xuat cua cac doanh nghiep Han Quoc tai khu vuc Dong Nam A.",
  "KAI hien la tap doan hang khong vu tru lon nhat Han Quoc, hoat dong trong cac linh vuc may bay quan su, may bay dan dung, UAV, cong nghe quoc phong va cong nghiep hang khong cong nghe cao. Trong boi canh nhu cau san xuat toan cau gia tang, cung ap luc toi uu chi phi va da dang hoa chuoi cung ung, phia Han Quoc dang co nhu cau mo rong hop tac san xuat voi cac quoc gia co tiem nang phat trien cong nghiep nhu Viet Nam.",
  "Theo danh gia cua doan cong tac, Viet Nam dang so huu nhieu loi the quan trong nhu vi tri chien luoc tai chau A, toc do phat trien cong nghiep nhanh, nguon nhan luc tre va nang luc co khi che tao ngay cang duoc nang cao. Dac biet, su phat trien manh me cua cac linh vuc dien tu, co khi chinh xac, cong nghiep ho tro va FDI trong nhieu nam qua dang tao nen tang quan trong de Viet Nam tung buoc tham gia sau hon vao chuoi cung ung cong nghe cao toan cau, bao gom ca linh vuc hang khong vu tru.",
  "Trong qua trinh ket noi va xuc tien hop tac, HDP HOLDINGS dong vai tro cau noi giua doanh nghiep Viet Nam va he sinh thai cong nghiep - cong nghe Han Quoc. HDP ho tro ket noi doi tac, khao sat nha may, trao doi cong nghe, ho tro ngon ngu - van hoa doanh nghiep va thuc day xay dung mang luoi hop tac dai han giua cac doanh nghiep hai nuoc.",
  "Theo dai dien HDP HOLDINGS, muc tieu cua doanh nghiep khong chi dung o viec ket noi dau tu, ma con huong toi thuc day chuyen giao cong nghe, phat trien nguon nhan luc ky thuat chat luong cao va xay dung he sinh thai hop tac cong nghiep cong nghe cao giua Viet Nam va Han Quoc.",
  "HDP HOLDINGS cho biet se tiep tuc dong hanh cung cac doi tac quoc te trong cac hoat dong xuc tien FDI, ket noi chuoi cung ung, phat trien cong nghiep ho tro va thuc day hop tac cong nghe cao. Day duoc xem la mot trong nhung dinh huong chien luoc nham gop phan nang cao nang luc cong nghiep cua doanh nghiep Viet Nam va mo ra co hoi tham gia sau hon vao chuoi gia tri toan cau trong giai doan phat trien moi.",
]

export default function Page() {
  return (
    <MainLayout>
      <article className="bg-[#F5F3ED] pb-20">
        <section className="border-b border-[#141414]/10 bg-gradient-to-b from-[#ece7dc] to-[#F5F3ED] py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6b6b6b]">Aerospace Investment · 13 May 2026</p>
            <h1 className="mt-4 font-serif text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              HDP HOLDINGS XUC TIEN HOP TAC DAU TU HANG KHONG VU TRU GIUA HAN QUOC VA VIET NAM
            </h1>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/41.png"
                alt="Doan lanh dao nganh hang khong vu tru Han Quoc khao sat hop tac tai Viet Nam"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#e7e2d6]">
              <Image
                src="/Articles/51.png"
                alt="Hinh anh bo sung ve chuong trinh xuc tien hop tac hang khong vu tru"
                fill
                className="object-cover"
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
