'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUserCheck, FiLayers, FiSettings, FiCheckCircle, FiGlobe, FiAirplay, FiHeadphones } from "react-icons/fi";

const steps = [
  {
    step: "Tư Vấn và Phân Tích Nhu Cầu",
    description:
      "Khảo sát yêu cầu chi tiết, nghiên cứu đối thủ cạnh tranh để phát triển chiến lược phù hợp cho doanh nghiệp của bạn.",
    icon: <FiUserCheck />,
  },
  {
    step: "Lên Ý Tưởng và Thiết Kế Giao Diện",
    description:
      "Thiết kế giao diện UX/UI thân thiện, cung cấp nhiều phương án và chỉnh sửa đến khi bạn hài lòng.",
    icon: <FiLayers />,
  },
  {
    step: "Phát Triển Website và Tính Năng",
    description:
      "Chọn công nghệ phù hợp, phát triển website với các tính năng đặc thù như đặt hàng, thanh toán, SEO on-page.",
    icon: <FiSettings />,
  },
  {
    step: "Kiểm Tra và Tối Ưu Hiệu Suất",
    description:
      "Kiểm tra chức năng, tối ưu tốc độ tải trang, bảo mật và đảm bảo tương thích trên mọi thiết bị.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Chạy Thử Nghiệm và Điều Chỉnh",
    description:
      "Chạy thử nghiệm beta, thu thập phản hồi và điều chỉnh trước khi ra mắt chính thức.",
    icon: <FiGlobe />,
  },
  {
    step: "Ra Mắt Website Chính Thức",
    description:
      "Triển khai trên server, đào tạo quản trị viên và tích hợp công cụ phân tích.",
    icon: <FiAirplay />,
  },
  {
    step: "Hỗ Trợ Sau Bán Hàng và Bảo Trì",
    description:
      "Bảo trì định kỳ, nâng cấp tính năng và hỗ trợ kỹ thuật 24/7 để website luôn hoạt động tối ưu.",
    icon: <FiHeadphones />,
  },
];

const FaqsItem = ({ step, description, icon, isOpen, onClick }: any) => (
  <div className="border-b border-gray-300 py-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="text-secondary bg-white p-2 rounded-full shadow-md text-2xl">
          {icon}
        </div>
        <h3 className="ml-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {step}
        </h3>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-600"
      >
        ▼
      </motion.div>
    </div>
    {isOpen && (
      <motion.div
        className="mt-3"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700">{description}</p>
      </motion.div>
    )}
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 w-1/2 mx-auto">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {steps.map((step, index) => (
            <FaqsItem
              key={index}
              step={step.step}
              description={step.description}
              icon={step.icon}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
