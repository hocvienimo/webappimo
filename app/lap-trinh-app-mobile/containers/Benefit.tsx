"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FiGitlab,
  FiDatabase,
  FiLayers,
  FiLogIn,
  FiLoader,
} from "react-icons/fi";

const contentItem = {
  item_1: {
    id: 1,
    icon: <FiGitlab />,
    title: "Hiệu Suất Tối Ưu",
    desc: "Ứng dụng được lập trình với công nghệ tiên tiến, tốc độ mượt mà, giảm thiểu tối đa thời gian tải và tăng trải nghiệm người dùng.",
  },
  item_2: {
    id: 2,
    icon: <FiLayers />,
    title: "Thiết Kế UX/UI Đỉnh Cao",
    desc: "Giao diện trực quan, dễ sử dụng, mang lại trải nghiệm độc đáo và giữ chân người dùng lâu dài.",
  },
  item_3: {
    id: 3,
    icon: <FiLogIn />,
    title: "Bảo Mật Hàng Đầu",
    desc: "Chúng tôi triển khai các biện pháp bảo mật mạnh mẽ, đảm bảo an toàn cho dữ liệu người dùng và hệ thống của bạn.",
  },
  item_4: {
    id: 4,
    icon: <FiLoader />,
    title: "Dễ Mở Rộng",
    desc: "Ứng dụng có kiến trúc linh hoạt, sẵn sàng tích hợp các tính năng mới khi doanh nghiệp phát triển.",
  },
  item_5: {
    id: 5,
    icon: <FiDatabase />,
    title: "SEO App Store & Play Store",
    desc: "Ứng dụng được tối ưu hóa để xuất hiện trên các bảng xếp hạng của App Store và Play Store, giúp bạn tiếp cận nhiều người dùng hơn.",
  },
};

const Benefits = () => {
  return (
    <section className="benefits-top">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Show 3 slides on desktop
          768: { slidesPerView: 2 }, // Show 2 slides on tablet
          640: { slidesPerView: 1 }, // Show 1 slide on mobile
        }}
        autoplay={{
          // Cấu hình autoplay
          delay: 3000, // Thời gian dừng giữa các slide (3000ms = 3 giây)
          disableOnInteraction: false, // Swiper vẫn tự chạy sau khi người dùng tương tác
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        {Object.values(contentItem).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#F7F8FC] rounded-lg overflow-hidden mb-6 h-60 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6 flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-full shadow-lg mb-4">
                  {" "}
                  {/* Khung bo tròn icon */}
                  <span className="text-3xl text-thirdary">{item.icon}</span>
                </div>
                <h4 className="text-xl capitalize font-semibold text-primary mb-2 text-center">
                  {item.title}
                </h4>{" "}
                {/* Tiêu đề */}
                <p className="text-gray-600 text-base">{item.desc}</p>{" "}
                {/* Mô tả */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Benefits;
