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
    title:
      "Bảng Giá Dịch Vụ thiết kế & lập trình website theo yêu cầu khách hàng",
    subTitle: "Dịch vụ thiết kế website",
    description:
      "Giá dịch vụ thiết kế website và nhu cầu trên thị trường hiện nay có nhiều yếu tố ảnh hưởng, đặc biệt khi bạn sử dụng công nghệ hiện đại như Next.js, Tailwind CSS, Node.js, MongoDB, và Express. Dưới đây là các gói chủ đạo tại iMovn cung cấp thịnh hành hiện nay.",
  },
};

const servicePackages: ServicePackage[] = [
  {
    id: 1,
    name: "Gói Cơ Bản",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">3-4 trang</span>{" "}
        (Trang chủ - Giới thiệu - Blog - Liên hệ)
      </>
    ),
    object:
      "Các cá nhân, freelancer hoặc các doanh nghiệp nhỏ cần một website giới thiệu dịch vụ đơn giản để nâng cấp sau này.",
    price: "9.000.000đ",
    icon: <GiBookPile color="#104276" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Thiết kế & tùy chỉnh cơ bản",
      "Quản trị nội dung cơ bản",
      "Cài đặt cơ bản cho SEO",
      "Tích hợp biểu mẫu liên hệ",
    ],
  },
  {
    id: 2,
    name: "Gói Tiêu Chuẩn",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">5-7 trang</span>{" "}
        (Trang chủ, giới thiệu, dịch vụ, liên hệ, blog, categories)
      </>
    ),
    object:
      "Doanh nghiệp vừa và nhỏ muốn có website chuyên nghiệp để xây dựng thương hiệu dịch vụ dễ năng cấp sau này.",
    price: "20.000.000 VND",
    icon: <GiBookmarklet color="#2194E7" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Thiết kế UX/UI",
      "Tối ưu hóa SEO On-page",
      "Quản trị nội dung cơ bản",
      "Chức năng blog/danh mục",
      "Các công cụ phân tích",
    ],
  },
  {
    id: 3,
    name: "Gói Doanh Nghiệp",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">7-10 trang</span>{" "}
        (Trang chủ, giới thiệu, dịch vụ, dự án, blog, categories, liên hệ, tuyển
        dụng, FAQ…)
      </>
    ),
    object:
      "Các doanh nghiệp lớn hoặc công ty cần một website phức tạp đa nhiệm để hỗ trợ hoạt động quảng bá & kinh doanh.",
    price: "từ 39.000.000đ",
    icon: <GiBookmark color="#FE7432" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Giao diện thiết kế riêng",
      "Quản trị nội dung (CMS)",
      "Tối ưu SEO nâng cao",
      "Đa ngôn ngữ (Việt & khác)",
      "Bảo mật nâng cao",
      "Thành viên & quản lý user",
      "Chức năng blog/danh mục",
      "Các công cụ phân tích",
    ],
  },
  {
    id: 4,
    name: "Gói Ecommerce",
    page: (
      <>
        Code từ <span className="text-thirdary font-bold">10-20 trang</span>{" "}
        (Trang chủ, giới thiệu, sản phẩm, danh mục sản phẩm, giỏ hàng, thanh
        toán, blog, danh mục bài viết, liên hệ)
      </>
    ),
    object:
      "Các doanh nghiệp kinh doanh bán lẻ, cửa hàng online, hoặc các doanh nghiệp muốn phát triển nền tảng thương mại điện tử.",
    price: "từ 59.000.000đ",
    icon: <GiBlackBook color="#37929E" />,
    imageUrl: "/images/prices/goi-thiet-ke-wevsite-01.png",
    features: [
      "Quản lý sản phẩm",
      "Quản lý kho hàng",
      "Cổng thanh toán trực tuyến",
      "Chức năng giỏ hàng",
      "Chức năng thanh toán",
      "Chức năng quản lý đơn hàng",
      "Đánh giá sản phẩm",
      "Coupon khuyến mãi, giảm giá",
      "Gửi mail đơn hàng cho khách",
    ],
  },
];

const commonFeatures = [
  "Responsive",
  "Tối ưu tốc độ tải trang.",
  "Tích hợp biểu mẫu liên hệ",
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
        return 4;
      case "Gói Tiêu Chuẩn":
        return 4;
      case "Gói Cao Cấp":
        return 4;
      default:
        return 4;
    }
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
            const tickLimit = getTickLimit(servicePackage.name);
            return (
              <motion.div
                key={servicePackage.id}
                className={`rounded-xl shadow-md border-2 border-white cursor-pointer 
                ${
                  servicePackage.name === "Gói Tiêu Chuẩn"
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
                        servicePackage.name === "Gói Tiêu Chuẩn"
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
                                <TfiCheck
                                  color="#3D91A0"
                                  width={14}
                                  height={14}
                                />
                              ) : (
                                <TfiClose color="#FF8740" size={13} />
                              )}
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
