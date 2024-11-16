"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/moduls/variants";
import { FiLayers } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const images = [
    "/images/templates/hero-demo.webp",
    "/images/templates/hero-demo-1.webp",
    // Thêm các ảnh khác nếu cần
  ];

  return (
    <div className="container mx-auto bg-webcustom-text py-14">
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] justify-center items-center gap-8">
        <div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="group"
          >
            <h1 className="md:text-4xl text-[28px] md:leading-[43px] leading-[36px] font-extrabold mb-4 text-primary font-primary">
              Thiết Kế Web Nhanh Chóng
              <br />
              Theo Mẫu Dựng Sẵn
            </h1>
            <TypeAnimation
              sequence={[
                "Website Bán Hàng",
                500,
                "Tập đoàn & Công ty", // thêm chuỗi rỗng để xóa text trước khi lặp lại
                500, // delay trước khi bắt đầu lại
                "Thực Phẩm & Nhà Hàng",
                500,
                "Giáo Dục & Đào Tạo", // thêm chuỗi rỗng để xóa text trước khi lặp lại
                500, // delay trước khi bắt đầu lại
                "Sự Kiện & Tiệc Cưới",
                500,
              ]}
              wrapper="h6"
              speed={50}
              className="text-thirdary font-primary font-extrabold mb-4 md:text-2xl text-[21px]"
              repeat={Infinity}
            />
            <p className="text-lg text-gray-600 mb-4">
              Tiết kiệm thời gian và chi phí với các mẫu giao diện đẹp, chuyên
              nghiệp, và tối ưu hóa cho doanh nghiệp của bạn!
            </p>
          </motion.div>
          <motion.button
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-secondary text-white py-3 px-6 font-semibold mt-[50px] text-base rounded-full hover:bg-primary transition-colors flex items-center gap-2 group"
          >
            <FiLayers className="group-hover:text-thirdary transition-colors" />
            Xem giao diện
          </motion.button>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          className="bg-white p-4 rounded-lg shadow-lg"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative md:h-[500px] h-[300px] w-full">
                  <Image
                    src={image}
                    alt={`Template 1 - Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
