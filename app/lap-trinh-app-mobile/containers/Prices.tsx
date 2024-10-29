"use client";

import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/variants";
import {
  GiBookmarklet,
  GiBookPile,
  GiBookmark,
  GiBlackBook,
} from "react-icons/gi";
import {
  TfiCheck,
  TfiClose,
  TfiAngleDoubleDown,
  TfiPencilAlt,
  TfiBackLeft,
} from "react-icons/tfi";

interface ServicePackage {
  id: number;
  name: string;
  page: ReactNode;
  object: string;
  icon: JSX.Element;
  price: string;
  imageUrl: string;
  features: string[];
}

const headCommit = {
  heading: {
    title: "Bảng Giá Dịch Vụ thiết kế & lập trình App Mobile",
    subTitle: "Dịch vụ thiết kế website",
    description:
      "Giá dịch vụ thiết kế app mobile và nhu cầu trên thị trường hiện nay có nhiều yếu tố ảnh hưởng, đặc biệt khi bạn sử dụng công nghệ hiện đại như React Native, GraphQL, Node.js, MongoDB, và Express. Dưới đây là các gói chủ đạo tại iMovn cung cấp thịnh hành hiện nay.",
  },
};

const servicePackages: ServicePackage[] = [
  {
    id: 1,
    name: "Gói Cơ Bản",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">5-10 màn hình</span>{" "}
        cơ bản (đăng nhập, đăng ký, trang chủ, trang thông tin, tìm kiếm)
      </>
    ),
    object:
      "Dành cho các startup hoặc doanh nghiệp nhỏ cần một ứng dụng đơn giản để phục vụ nhu cầu cơ bản của người dùng.",
    price: "từ $2.000",
    icon: <GiBookPile color="#104276" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: ["Đăng ký", "Đăng nhập", "Thông báo", "Bộ lọc hoặc tìm kiếm"],
  },
  {
    id: 2,
    name: "Gói Nâng Cao",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">10-20 màn hình</span>{" "}
        với tính năng mở rộng và UI/UX tối ưu
      </>
    ),
    object:
      "Phù hợp cho doanh nghiệp có nhu cầu tùy biến thêm một số tính năng nâng cao, phục vụ nhiều nhu cầu đa dạng của người dùng.",
    price: "từ $4,000",
    icon: <GiBookmarklet color="#2194E7" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Đăng ký qua mạng xã hội",
      "Tích hợp bản đồ hoặc vị trí",
      "API tích hợp các dịch vụ khác",
      "Thông báo đẩy nâng cao",
      "Đa ngôn ngữ cơ bản",
    ],
  },
  {
    id: 3,
    name: "Gói Chuyên Nghiệp",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">20+ màn hình</span>{" "}
        với tính năng phức hợp
      </>
    ),
    object:
      "Dành cho các doanh nghiệp cần ứng dụng với tính năng phong phú, phức tạp, phục vụ người dùng chuyên sâu và trải nghiệm mượt mà.",
    price: "từ $8,000",
    icon: <GiBookmark color="#FE7432" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Tính năng mua sắm",
      "Quản lý đơn hàng",
      "API liên kết với các hệ thống",
      "Thanh toán qua nhiều cổng",
      "Hỗ trợ đa ngôn ngữ",
      "Bảo mật cao",
      "Mã hóa dữ liệu người dùng",
    ],
  },
  {
    id: 4,
    name: "Gói Doanh Nghiệp",
    page: (
      <>
        Không giới hạn số màn hình, tập trung vào tính năng chuyên sâu và mở
        rộng.
      </>
    ),
    object:
      "Phù hợp cho các doanh nghiệp lớn cần một ứng dụng có tính năng đa dạng, bảo mật cao và khả năng tích hợp sâu với hệ thống quản lý.",
    price: "từ $15,000",
    icon: <GiBlackBook color="#37929E" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Hệ thống quản lý Big Data",
      "Machine Learning",
      "Chatbot hỗ trợ",
      "Bảo mật cao cấp",
      "Xác thực 2 lớp",
      "Mã hóa đầu cuối",
      "Quản lý nội dung (CMS)",
      "API liên kết phức tạp",
      "Phân tích dữ liệu",
      "Quản lý khách hàng",
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
    <div className="mb-16">
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
      {/* Options */}
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePackages.map((servicePackage) => {
            return (
              <motion.div
                key={servicePackage.id}
                className={`rounded-xl shadow-md border-2 border-white cursor-pointer 
                ${
                  servicePackage.name === "Gói Nâng Cao"
                    ? "bg-[#FAFAFA] shadow-2xl shadow-thirdary/50"
                    : "bg-[#FAFAFA] border-transparent hover:border-white"
                }`}
                whileHover={{ scale: 1.05 }}
                style={{
                  backgroundImage: `url(${servicePackage.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Nội dung */}
                <div className="px-5 mb-9">
                  <div className="group-1">
                    <div className="text-7xl mt-9 mb-4 flex justify-center items-center">
                      {servicePackage.icon}
                    </div>
                    <h3
                      className={`font-secondary text-2xl font-bold mb-4 ${
                        servicePackage.name === "Gói Nâng Cao"
                          ? "text-thirdary"
                          : " text-primary"
                      }`}
                    >
                      {servicePackage.name}
                    </h3>

                    <p className="text-left text-base mb-3 h-28 text-gray-600 border-b-2 border-dashed border-gray-200">
                      {servicePackage.page}
                    </p>
                    {/* start toggle see more */}
                    <div className="group-features relative">
                      <input
                        type="checkbox"
                        id={`toggle-more-${servicePackage.id}`}
                        className="peer hidden"
                      />
                      <div className="max-h-32 overflow-hidden peer-checked:max-h-full transition-all duration-300">
                        {/* Render các tính năng riêng */}
                        <ul>
                          {servicePackage.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-primary text-left items-center"
                            >
                              <TfiCheck
                                color="#3D91A0"
                                width={14}
                                height={14}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <label
                        htmlFor={`toggle-more-${servicePackage.id}`}
                        className="cursor-pointer text-white mt-4 flex items-center justify-center"
                      >
                        <TfiAngleDoubleDown className="bg-thirdary/90 hover:bg-secondary/90 shadow-xl p-2 text-3xl rounded-full" />
                      </label>
                      {/* end toggle see more */}
                    </div>
                  </div>

                  <div className="group-2 mt-5">
                    <p className="text-base text-gray-600 h-32">
                      {servicePackage.object}
                    </p>
                    <p className="text-2xl text-primary font-bold mb-4">
                      {servicePackage.price}
                    </p>
                    <button
                      onClick={() => openModal(servicePackage)}
                      className="bg-secondary text-sm text-white py-2 px-4 rounded-2xl hover:bg-primary"
                    >
                      Đăng ký tư vấn
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-thirdary font-secondary">
              Tư Vấn {selectedPackage?.name}
            </h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-left mb-2 font-bold text-primary"
                >
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
                <label
                  htmlFor="email"
                  className="block text-left mb-2 font-bold text-primary"
                >
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
                <label
                  htmlFor="message"
                  className="block text-left mb-2 font-bold text-primary"
                >
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
                className="bg-secondary group text-white text-sm font-bold py-2 px-4 flex items-center gap-2 rounded-xl hover:bg-primary transition duration-300"
              >
                <TfiPencilAlt className="group-hover:text-thirdary" /> Gửi yêu
                cầu
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-5 ml-2 text-primary group flex items-center gap-1"
            >
              Đóng{" "}
              <TfiBackLeft className="group-hover:text-primary text-thirdary" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
