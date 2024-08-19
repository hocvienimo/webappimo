import Image from 'next/image';
import Link from 'next/link';

const infoGet = {
    title: "Giải Pháp Toàn Diện Cho Doanh Nghiệp Số",
    subtitle: "Chi phí thấp - Hiệu quả cao - Uy tín tuyệt đối",
    description: "Với tiêu chí “Nhỏ gọn – An toàn, bảo mật – Đơn giản – Độc đáo“, iMovn luôn nỗ lực tạo ra những giải pháp marketing online & sản phẩm web-app hoàn thiện với hiệu quả tối ưu. Đến với chúng tôi, khách hàng sẽ luôn được cung cấp những dịch vụ tốt nhất!",
}

const InfoBox = () => {
  return (
    <section className="relative w-full h-[580px]">
      <Image
        src="/images/bg-lien-he-imovn.jpg"
        alt="Banner Image"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="z-[-1]"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-[#333] bg-opacity-65 text-white p-4">
        <div className="max-w-7xl w-full mx-auto">
            <h3 className="md:text-4xl text-3xl font-secondary font-semibold mb-2">{infoGet.title}</h3>
            <h6 className="md:text-2xl text-xl font-semibold mb-7">{infoGet.subtitle}</h6>
            <p className="text-lg font-light text-[#e7e7e7] md:w-1/2 w-full mb-8">{infoGet.description}</p>
            <Link href="/#" className="bg-primary hover:bg-[#f0f0f0] hover:text-gray-600 text-white py-3 px-10 rounded-full">
                Liên Hệ iMovn
            </Link>
        </div>
      </div>
    </section>
  )
}

export default InfoBox