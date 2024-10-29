"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/variants";

const benefitsData = [
  {
    id: 1,
    title: "Ứng Dụng Được Tối Ưu Hóa",
    description:
      "Giao diện đẹp, dễ sử dụng và phù hợp với trải nghiệm người dùng hiện đại.",
  },
  {
    id: 2,
    title: "Thương Hiệu Nâng Tầm",
    description:
      "Ứng dụng chuyên nghiệp góp phần xây dựng hình ảnh và uy tín của doanh nghiệp.",
  },
  {
    id: 3,
    title: "Dễ Dàng Mở Rộngo",
    description:
      "Ứng dụng có cấu trúc linh hoạt, hỗ trợ tốt cho các tính năng mới trong tương lai.",
  },
  {
    id: 4,
    title: "Tiết Kiệm Thời Gian",
    description:
      "Được phát triển theo lộ trình rõ ràng, tiết kiệm thời gian và chi phí cho bạn.",
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
              Khi chọn thiết kế App Mobile với React Native, GraphQL, Node.js,
              MongoDB, và Express tại iMovn Bạn sẽ có hiệu suất tối ưu với tốc
              độ tải nhanh & trải nghiệm người dùng mượt mà. Giao diện hiện đại
              và tùy chỉnh linh hoạt giúp app nổi bật hơn so với đối thủ. Ngoài
              ra, bạn còn được bảo mật tốt và khả năng mở rộng dễ dàng theo nhu
              cầu phát triển của doanh nghiệp ở tương lai.
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
