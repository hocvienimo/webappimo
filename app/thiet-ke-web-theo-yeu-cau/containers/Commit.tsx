"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/moduls/variants";
import Image from "next/image";

const headCommit = {
  heading: {
    title: "Cam Kết Của iMovn Đến Quý Khách Hàng",
    subTitle: "Dịch vụ thiết kế web theo yêu cầu",
    description: (
      <>
        Để có được hàng trăm website hoạt động ổn định & mang lại hiệu quả cao
        như hiện tại. Trong từng dự án, iMovn luôn tập trung tìm hiểu mong muốn,
        phân tích nhu cầu phù hợp từ khách hàng & Insight của người dùng để đưa
        ra các{" "}
        <strong>giải pháp thiết kế & lập trình website theo yêu cầu</strong> tối
        ưu nhất, mang lại tối đa hiệu quả song song việc tiết kiệm chi phí với
        các cam kết cụ thể.
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
    title: "thiet-ke-web-dung-yeu-cau",
    description:
      "Thiết kế giao diện website theo đúng yêu cầu của khách hàng với sự sáng tạo, bố cục và cách phối màu sắc phù hợp với nhận diện thương hiệu của khách hàng.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-dung-yeu-cau-nhan-dien-thuong-hieu.jpg",
  },
  {
    id: 2,
    title: "tinh-nang-tich-hop-cho-website",
    description:
      "Tính năng được tích hợp đầy đủ với các công nghệ lập trình tiên tiến giúp cho quá trình vận hành đơn giản hơn, website luôn hoạt động ổn định & bảo mật cao.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-cong-nghe-tien-tien.jpg",
  },
  {
    id: 3,
    title: "he-thong-quan-tri-admin-da-nang",
    description:
      "Dễ nâng cấp giao diện & các tính năng mới sau này. Hệ thống admin website hiện đại cho các tác vụ thêm, sửa, xóa, update, quản lý & phân quyền thành viên.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-cms-quan-ly-tien-ich.jpg",
  },
];

const commitMentsLeft: Commitment[] = [
  {
    id: 4,
    title: "toi-uu-seo",
    description:
      "Thiết kế website theo yêu cầu của khách hàng luôn đảm bảo tiêu chuẩn SEO không chỉ thân thiện với các bộ máy tìm kiếm mà còn thân thiện với người dùng.",
    imageUrl: "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-seo-web.jpg",
  },
  {
    id: 5,
    title: "chi-phi-thiet-ke-seo-hop-ly",
    description:
      "Chi phí thiết kế & lập trình website theo yêu cầu tiết kiệm & hợp lý theo các option đồng thời phù hợp với ngân sách thiết kế website của từng ngành hàng.",
    imageUrl:
      "/images/commit/cam-ket-thiet-ke-web-theo-yeu-cau-chi-phi-thiet-ke.jpg",
  },
  {
    id: 6,
    title: "tu-van-thiet-ke-wen-theo-yeu-cau",
    description:
      "Tư vấn nhiệt tình, tận tâm lấy sự hài lòng của khách hàng làm trung tâm cho chất lượng dịch vụ. Cam kết hỗ trợ khách hàng trong suốt quá trình vận hành.",
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
