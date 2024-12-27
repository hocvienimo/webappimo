"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/moduls/variants";

const benefitsData = [
  {
    id: 1,
    title: "Tốc độ và hiệu suất",
    description:
      "Next.js giúp website tải nhanh nhờ render trên server, cải thiện trải nghiệm người dùng và thứ hạng SEO, tăng tỷ lệ chuyển đổi.",
  },
  {
    id: 2,
    title: "Thiết kế hiện đại UX/UI",
    description:
      "Tailwind tạo giao diện đẹp, cá nhân hóa, tương thích mọi thiết bị. Web của bạn sẽ nổi bật hơn so với các web mẫu đại trà",
  },
  {
    id: 3,
    title: "Tối ưu SEO nâng cao",
    description:
      "Từ tốc độ tải trang đến cấu trúc SEO chuẩn, website sẽ có cơ hội xếp hạng cao trên Google, thu hút truy cập tự nhiên lớn.",
  },
  {
    id: 4,
    title: "Tùy chỉnh theo đặc thù",
    description:
      "Website được xây dựng chính xác theo yêu cầu và loại hình kinh doanh, không bị ràng buộc bởi các giải pháp có sẵn.",
  },
  {
    id: 5,
    title: "Giảm chi phí bảo trì dài hạn",
    description:
      "Đầu tư vào công nghệ thiết kế & lập trình webapp hiện đại giúp giảm các vấn đề kỹ thuật, lỗi thời & sửa chữa tương lai.",
  },
  {
    id: 6,
    title: "Bảo mật cao",
    description:
      "Node.js & MongoDB đảm bảo dữ liệu an toàn với nhiều lớp bảo vệ, rất quan trọng cho các web chứa thông tin nhạy cảm.",
  },
  {
    id: 7,
    title: "Khả năng mở rộng dễ",
    description:
      "Kiến trúc linh hoạt giúp thêm tính năng mới khi doanh nghiệp phát triển mà không làm gián đoạn hoạt động.",
  },
  {
    id: 8,
    title: "Hỗ trợ mạnh mẽ",
    description:
      "Các công nghệ sử dụng đều có cộng đồng lớn, đảm bảo nguồn tài nguyên phong phú để cập nhật và nâng cấp liên tục.",
  },
];

const VpsHost = () => {
  return (
    <>
      <section
        className="relative md:h-[480px] h-[490px] w-full"
        style={{
          backgroundImage: `url("/images/bg-benefit.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "59% 23%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>

        {/* Text on top */}
        <div className="absolute container md:mt-28 mt-20 inset-0">
          <div className="md:w-[55%]">
            <motion.h5
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white md:text-[37px] text-3xl leading-[55px] mb-3 font-bold font-secondary"
            >
              Bạn sẽ nhận được gì..?
            </motion.h5>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-base text-gray-900"
            >
              Khi chọn thiết kế website với Nodejs (Nestjs, Express), Mongodb,
              Typescript, Reactjs (Nextjs), Vuejs (Nuxtjs), Angular, Tailwind
              CSS tại iMovn Bạn sẽ có hiệu suất tối ưu với tốc độ tải nhanh &
              trải nghiệm người dùng mượt mà. Giao diện hiện đại và tùy chỉnh
              linh hoạt giúp website nổi bật hơn so với đối thủ. Ngoài ra, bạn
              còn được bảo mật tốt và khả năng mở rộng dễ dàng theo nhu cầu phát
              triển của doanh nghiệp.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="benefits-after-prices container mx-auto md:-mt-20 -mt-16 mb-12"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            1024: { slidesPerView: 4 }, // Show 3 slides on desktop
            768: { slidesPerView: 2 }, // Show 2 slides on tablet
            640: { slidesPerView: 2 }, // Show 1 slide on mobile
          }}
        >
          {benefitsData.map((benefit) => (
            <SwiperSlide key={benefit.id}>
              <div className="rounded-2xl shadow-inner border-b-2 border-secondary/50 p-4 text-base cursor-pointer bg-gray-50 bg-gradient-to-br from-[#FCBA7A]/20 to-transparent">
                <h3 className="font-extrabold uppercase text-justify mb-2 text-md text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default VpsHost;
