'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay  } from 'swiper/modules';
import { FiGitlab, FiDatabase, FiLayers, FiLogIn, FiLoader, FiHeadphones } from "react-icons/fi";

const contentItem = {
    item_1: {
        id:1,
        icon: <FiGitlab/>,
        title: "Thiết kế độc quyền",
        desc: "Mỗi website đều được lập trình & thiết kế từ đầu, phù hợp với đặc thù và chiến lược kinh doanh của bạn."
    },
    item_2: {
        id:2,
        icon: <FiLayers/>,
        title: "Tối ưu chuẩn SEO",
        desc: "Được tối ưu theo Technical SEO, giúp tăng thứ hạng tìm kiếm trên & mang lại lượt truy cập tự nhiên, bền vững."
    },
    item_3: {
        id:3,
        icon: <FiLogIn/>,
        title: "Tương thích mọi thiết bị",
        desc: "Website của bạn sẽ hiển thị hoàn hảo trên các nền tảng từ máy tính đến các thiết bị di động: tablet & mobile."
    },
    item_4: {
        id:4,
        icon: <FiLoader/>,
        title: "Tốc độ tải trang nhanh",
        desc: "Đội ngũ chuyên viên iMovn đảm bảo tốc độ tải load trang nhanh, tăng trải nghiệm người dùng & điểm SEO."
    },
    item_5: {
        id:5,
        icon: <FiDatabase/>,
        title: "Bảo mật cao",
        desc: "Hệ thống VPS, Clound bảo mật vững chắc, bảo vệ thông tin & dữ liệu doanh nghiệp của bạn an toàn tuyệt đối."
    },
    item_6: {
        id:6,
        icon: <FiHeadphones/>,
        title: "Hỗ trợ 24/7",
        desc: "Luôn đồng hành cùng bạn trong suốt quá trình vận hành website, hỗ trợ nâng cấp nhanh chóng khi bạn cần."
    }
}

const Benefits = () => {
  return (
<Swiper 
            spaceBetween={30} 
            slidesPerView={1}
            breakpoints={{
                1024: { slidesPerView: 3 }, // Show 3 slides on desktop
                768: { slidesPerView: 2 },  // Show 2 slides on tablet
                640: { slidesPerView: 1 },  // Show 1 slide on mobile
            }}
            autoplay={{ // Cấu hình autoplay
                delay: 3000,  // Thời gian dừng giữa các slide (3000ms = 3 giây)
                disableOnInteraction: false  // Swiper vẫn tự chạy sau khi người dùng tương tác
            }}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
        >
        {Object.values(contentItem).map((item) => (
            <SwiperSlide key={item.id}>
                <div className="bg-[#F7F8FC] rounded-lg overflow-hidden mb-6 h-60 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="p-6 flex flex-col items-start">
                        <div className="bg-gray-100 p-4 rounded-full shadow-lg mb-4"> {/* Khung bo tròn icon */}
                        <span className="text-3xl text-thirdary">{item.icon}</span>
                        </div>
                        <h4 className="text-xl capitalize font-semibold text-primary mb-2 text-center">{item.title}</h4> {/* Tiêu đề */}
                        <p className="text-gray-600 text-base">{item.desc}</p> {/* Mô tả */}
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
  );
};

export default Benefits;
