"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/moduls/variants";
import Image from "next/image";

const headCommit = {
  heading: {
    title: "Cam Kết Của iMovn Đến Quý Khách Hàng",
    subTitle: "Dịch vụ thiết kế App theo yêu cầu",
    description: (
      <>
        Để có được hàng trăm app mobilr hoạt động ổn định & mang lại hiệu quả
        cao như hiện tại. Trong từng dự án, iMovn luôn tập trung tìm hiểu mong
        muốn, phân tích nhu cầu phù hợp từ khách hàng & Insight của người dùng
        để đưa ra các{" "}
        <strong>giải pháp thiết kế & lập trình app theo yêu cầu</strong> tối ưu
        nhất, mang lại tối đa hiệu quả song song việc tiết kiệm chi phí với các
        cam kết cụ thể.
      </>
    ),
  },
};

interface Commitment {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const commitMentsRight: Commitment[] = [
  {
    id: 1,
    title: "Chất Lượng Hàng Đầu",
    description:
      "Chúng tôi cam kết mỗi ứng dụng đều đạt chất lượng tốt nhất với quy trình kiểm tra nghiêm ngặt, từ tính năng đến giao diện người dùng.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-dung-yeu-cau-nhan-dien-thuong-hieu.jpg",
  },
  {
    id: 2,
    title: "Hiệu Suất Mượt Mà",
    description:
      "Ứng dụng được tối ưu hóa để chạy nhanh, giảm thời gian tải và mang đến trải nghiệm mượt mà trên mọi thiết bị.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-cong-nghe-tien-tien.jpg",
  },
  {
    id: 3,
    title: "Bảo Mật Hàng Đầu",
    description:
      "Đội ngũ chúng tôi cam kết bảo mật toàn diện, sử dụng các công nghệ tiên tiến để bảo vệ dữ liệu người dùng và doanh nghiệp.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-cms-quan-ly-tien-ich.jpg",
  },
];

const commitMentsLeft: Commitment[] = [
  {
    id: 4,
    title: "Thiết Kế UX/UI Đẳng Cấp",
    description:
      "Chúng tôi tạo ra giao diện hiện đại, trực quan, thu hút, giúp ứng dụng của bạn không chỉ đẹp mắt mà còn dễ sử dụng.",
    imageUrl: "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-seo-web.jpg",
  },
  {
    id: 5,
    title: "Hỗ Trợ Kỹ Thuật Dài Hạn",
    description:
      "Dịch vụ của chúng tôi đi kèm hỗ trợ bảo trì và nâng cấp sau khi phát hành, luôn sẵn sàng để giải quyết mọi vấn đề.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-chi-phi-thiet-ke.jpg",
  },
  {
    id: 6,
    title: "Tối Ưu Chi Phí & Thời Gian",
    description:
      "Với quy trình chuyên nghiệp, chúng tôi cam kết tối ưu hóa tài nguyên, đảm bảo tiến độ và tiết kiệm tối đa chi phí cho khách hàng.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-tu-van-nhiet-tinh.jpg",
  },
];

const Commit = () => {
  return (
    <>
      <section>
        <div className="container pt-10 mb-12 mx-auto">
          <div className="md:flex justify-center my-1 md:my-1 overflow-hidden">
            <div className="w-full md:w-11/12 md:flex gap-5 items-center">
              <div className="md:w-5/12 mb-5 md:mb-0">
                {headCommit.heading.subTitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-[13px] inline-block text-thirdary"
                  >
                    {headCommit.heading.subTitle}
                  </motion.span>
                )}
                <motion.h2
                  variants={fadeIn("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="font-secondary md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary"
                >
                  {headCommit.heading.title}
                </motion.h2>
              </div>

              <div className="md:w-7/12 self-end">
                {headCommit.heading.description && (
                  <motion.p
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-lg text-justify"
                  >
                    {headCommit.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {commitMentsRight.map((commitment) => (
            <motion.div
              key={commitment.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <figure className="overflow-hidden">
                <Image
                  src={commitment.imageUrl}
                  alt={commitment.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "top right",
                  }}
                  className="h-[230px] w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
              </figure>

              <div className="p-6">
                <p className="text-base">{commitment.description}</p>
              </div>
            </motion.div>
          ))}

          {commitMentsLeft.map((commitment) => (
            <motion.div
              key={commitment.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <figure className="overflow-hidden">
                <Image
                  src={commitment.imageUrl}
                  alt={commitment.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "top right",
                  }}
                  className="h-[230px] w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
              </figure>

              <div className="p-6">
                <p className="text-base">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Commit;
