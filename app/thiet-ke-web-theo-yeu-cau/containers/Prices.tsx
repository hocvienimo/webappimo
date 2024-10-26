"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/variants";
interface ServicePackage {
  id: number;
  name: string;
  price: string;
  features: string[];
}

const headCommit = {
  heading: {
    title:
      "Bảng Giá Dịch Vụ thiết kế & lập trình website theo yêu cầu khách hàng",
    subTitle: "Dịch vụ thiết kế web theo yêu cầu",
    description: (
      <>
        Giá dịch vụ thiết kế website và nhu cầu trên thị trường hiện nay có
        nhiều yếu tố ảnh hưởng, đặc biệt khi bạn sử dụng công nghệ hiện đại như
        Next.js, Tailwind CSS, Node.js, MongoDB, và Express. Dưới đây là các gói
        chủ đạo tại iMovn cung cấp thịnh hành hiện nay.
      </>
    ),
  },
};

const servicePackages: ServicePackage[] = [
  {
    id: 1,
    name: "Gói Cơ Bản",
    price: "2,000,000 VND",
    features: ["Thiết kế đơn giản", "Tối ưu hóa SEO cơ bản", "Hỗ trợ 1 tháng"],
  },
  {
    id: 2,
    name: "Gói Tiêu Chuẩn",
    price: "5,000,000 VND",
    features: [
      "Thiết kế hiện đại",
      "SEO nâng cao",
      "Hỗ trợ 3 tháng",
      "Tích hợp biểu mẫu liên hệ",
    ],
  },
  {
    id: 3,
    name: "Gói Cao Cấp",
    price: "10,000,000 VND",
    features: [
      "Thiết kế tùy chỉnh",
      "SEO chuyên sâu",
      "Hỗ trợ 6 tháng",
      "Tích hợp thương mại điện tử",
    ],
  },
  {
    id: 4,
    name: "Gói Doanh Nghiệp",
    price: "20,000,000 VND",
    features: [
      "Thiết kế cao cấp",
      "SEO toàn diện",
      "Hỗ trợ 12 tháng",
      "Tích hợp nhiều ngôn ngữ",
      "Bảo mật nâng cao",
    ],
  },
];

const PricingTable: FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (servicePackage: ServicePackage) => {
    setSelectedPackage(servicePackage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container pt-10 mb-12 mx-auto">
        <div className="md:flex justify-center my-1 md:my-1 overflow-hidden">
          <div className="w-full md:w-11/12 md:flex gap-10">
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

            <div className="md:w-7/12 self-center">
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

      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePackages.map((servicePackage) => (
            <motion.div
              key={servicePackage.id}
              className={`rounded-lg shadow-lg p-6 border-2 transition duration-300 
                ${
                  servicePackage.name === "Gói Cao Cấp"
                    ? "bg-yellow-200 border-yellow-500"
                    : "bg-white border-transparent hover:border-blue-500"
                }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {servicePackage.name}
              </h3>
              <p className="text-2xl font-bold mb-4">{servicePackage.price}</p>
              <ul className="text-left mb-6">
                {servicePackage.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal(servicePackage)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Đăng ký tư vấn
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">
              Tư Vấn {selectedPackage?.name}
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-left mb-2">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded"
                  placeholder="Nhập họ và tên của bạn"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded"
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-left mb-2">
                  Nội dung yêu cầu
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded"
                  placeholder="Nhập nội dung yêu cầu"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Gửi yêu cầu
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 text-blue-500 hover:underline"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
