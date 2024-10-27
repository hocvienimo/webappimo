"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/variants";
import {
  GiBookmarklet,
  GiBookPile,
  GiBookmark,
  GiBlackBook,
} from "react-icons/gi";
import { TfiCheck, TfiClose } from "react-icons/tfi";

interface ServicePackage {
  id: number;
  name: string;
  icon: JSX.Element;
  price: string;
  imageUrl: string;
}

const headCommit = {
  heading: {
    title:
      "Bảng Giá Dịch Vụ thiết kế & lập trình website theo yêu cầu khách hàng",
    subTitle: "Dịch vụ thiết kế website",
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
    icon: <GiBookPile color="#104276" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
  },
  {
    id: 2,
    name: "Gói Tiêu Chuẩn",
    price: "5,000,000 VND",
    icon: <GiBookmarklet color="#2194E7" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
  },
  {
    id: 3,
    name: "Gói Cao Cấp",
    price: "10,000,000 VND",
    icon: <GiBookmark color="#FE7432" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
  },
  {
    id: 4,
    name: "Gói Doanh Nghiệp",
    price: "20,000,000 VND",
    icon: <GiBlackBook color="#37929E" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
  },
];

const commonFeatures = [
  "Thiết kế đáp ứng chuẩn",
  "Tối ưu hóa SEO toàn diện",
  "Tích hợp biểu mẫu liên hệ",
  "Hỗ trợ nhiều ngôn ngữ",
  "Bảo mật và tối ưu hiệu suất",
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

  const getTickLimit = (packageName: string) => {
    switch (packageName) {
      case "Gói Cơ Bản":
        return 2;
      case "Gói Tiêu Chuẩn":
        return 3;
      case "Gói Cao Cấp":
        return 4;
      default:
        return 5;
    }
  };

  return (
    <div className="mb-10">
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
                className="font-secondary capitalize md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary"
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
          {servicePackages.map((servicePackage) => {
            const tickLimit = getTickLimit(servicePackage.name);
            return (
              <motion.div
                key={servicePackage.id}
                onClick={() => openModal(servicePackage)}
                className={`rounded-xl shadow-md border-2 border-white cursor-pointer 
                ${
                  servicePackage.name === "Gói Cao Cấp"
                    ? "bg-[#FAFAFA] shadow-2xl shadow-thirdary/50"
                    : "bg-[#FAFAFA] border-transparent hover:border-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundImage: `url(${servicePackage.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Nội dung */}
                <div className="px-5 mb-9">
                  <div className="text-7xl mt-9 mb-4 flex justify-center items-center">
                    {servicePackage.icon}
                  </div>
                  <h3
                    className={`font-secondary text-2xl font-bold mb-4 ${
                      servicePackage.name === "Gói Cao Cấp"
                        ? "text-thirdary"
                        : " text-primary"
                    }`}
                  >
                    {servicePackage.name}
                  </h3>

                  <ul className="text-left mb-6">
                    {commonFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2  ${
                          index < tickLimit
                            ? "text-primary hover:text-secondary"
                            : "text-gray-500 hover:text-thirdary line-through font-thin"
                        }`}
                      >
                        {index < tickLimit ? (
                          <TfiCheck color="#3D91A0" size={14} />
                        ) : (
                          <TfiClose color="#FF8740" size={13} />
                        )}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl font-extrabold mb-4">
                    {servicePackage.price}
                  </p>
                  <button className="bg-secondary text-sm text-white py-2 px-4 rounded-2xl hover:bg-primary">
                    Đăng ký tư vấn
                  </button>
                </div>
              </motion.div>
            );
          })}
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
