"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import { HiCodeBracket } from "react-icons/hi2";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Company {
  name: string;
  email: string;
  hotline: string;
  address: string;
  description: string;
  zalo: string;
  messenger: string;
  map: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const servicesItem = {
  items: [
    { icon: HiCodeBracket, title: "Thiết kế website đa ngành chuẩn SEO" },
    { icon: HiCodeBracket, title: "Lập trình web, app mobile theo yêu cầu" },
    { icon: HiCodeBracket, title: "Phòng marketing online thuê ngoài" },
    { icon: HiCodeBracket, title: "Quản trị website & SEO tổng thể" },
    { icon: HiCodeBracket, title: "Thiết kế landing page chạy quảng cáo" },
    { icon: HiCodeBracket, title: "Đăng ký website với Bộ Công Thương" },
  ],
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [company, setCompany] = useState<Company | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Trạng thái hiển thị popup
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmittedData(formData); // Lưu dữ liệu đã gửi vào trạng thái submittedData
        setIsPopupVisible(true); // Hiển thị popup
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        setStatusMessage(data.message || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage(
        "Không thể gửi liên hệ, vui lòng kiểm tra kết nối mạng."
      );
    }
  };

  // Định nghĩa các biến chuyển động cho fade up
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    // Lấy dữ liệu Setting/ Company từ API
    const fetchCompany = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}setting?keys[]=company`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          console.error("Error fetching company data:", res.statusText);
          return;
        }

        const companyData = await res.json();
        setCompany(companyData.data.company);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompany();
  }, []);

  return (
    <>
      <main className="mt-20">
        <Header />

        <section className="form-company container grid md:grid-cols-[42%_52%] justify-center gap-12 mt-16 mb-12">
          <div className="bio-info bg-[#B7EAF2] p-6 rounded-3xl shadow-lg">
            {company && (
              <ul>
                <li className="flex text-primary font-secondary font-extrabold text-2xl mb-2 mt-3">
                  {company.name}
                </li>
                <li className="flex text-base mb-1">{company.description}</li>
              </ul>
            )}
            <ul>
              {servicesItem.items.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <item.icon className="text-thirdary" /> {item.title}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-5 rounded-3xl">
              <Link
                href="/gioi-thieu"
                target="_blank"
                className="text-white font-bold"
              >
                Về Chúng Tôi
              </Link>
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tên Quý khách"
                required
                className="w-full px-4 py-2 shadow-lg bg-[#F7F8FC] rounded-3xl outline-none"
              />
            </div>
            <div className="group-field grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email thường dùng"
                required
                className="w-full px-4 py-2 shadow-lg bg-[#F7F8FC] rounded-3xl outline-none"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full px-4 py-2 shadow-lg bg-[#F7F8FC] rounded-3xl outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Địa chỉ"
                className="w-full px-4 py-2 shadow-lg bg-[#F7F8FC] rounded-3xl outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nội dung cần tư vấn..."
                rows={4}
                required
                className="w-full px-4 py-2 shadow-lg bg-[#F7F8FC] rounded-3xl outline-none"
              />
            </div>
            <Button
              type="submit"
              className="uppercase shadow-xl text-white font-bold py-2 rounded-3xl"
            >
              Gửi liên hệ
            </Button>
            {statusMessage && (
              <p className="mt-4 text-center text-red-500">{statusMessage}</p>
            )}
          </form>
        </section>

        <section className="items-info container grid md:grid-cols-[30%_30%_30%] justify-center md:gap-12">
          <div className="item-phone bg-[#F7F8FC] rounded-lg overflow-hidden mb-6 h-37 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-full shadow-lg mb-4">
                  {/* Khung bo tròn icon */}
                  <span className="text-3xl text-thirdary">
                    <FiPhoneCall />
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 text-center">
                  {company?.hotline}
                </h4>
              </div>
              {/* Tiêu đề */}
              <p className="text-gray-600 text-base">
                Liên hệ Công ty IMO VN qua số điện thoại 0902 2626 82 để được hỗ
                trợ.
              </p>
            </div>
          </div>

          <div className="item-email bg-[#F7F8FC] rounded-lg overflow-hidden mb-6 h-37 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-full shadow-lg mb-4">
                  {/* Khung bo tròn icon */}
                  <span className="text-3xl text-thirdary">
                    <FiMail />
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 text-center">
                  {company?.email}
                </h4>
              </div>
              {/* Tiêu đề */}
              <p className="text-gray-600 text-base">
                Địa chỉ email liên hệ của công ty là info@imo.com.vn.
              </p>
            </div>
          </div>

          <div className="item-address bg-[#F7F8FC] rounded-lg overflow-hidden mb-6 h-37 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-full shadow-lg mb-4">
                  {/* Khung bo tròn icon */}
                  <span className="text-3xl text-thirdary">
                    <FiMapPin />
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 text-center">
                  Văn phòng iMovn
                </h4>
              </div>
              {/* Tiêu đề */}
              <p className="text-gray-600 text-base">
                Văn phòng Dev-Labs công ty tại: {company?.address}
              </p>
            </div>
          </div>
        </section>

        <section className="google-map container grid grid-cols-[98%] justify-center mt-4 mb-12">
          <div dangerouslySetInnerHTML={{ __html: company?.map || "" }} />
        </section>

        {/* Popup thông báo */}
        {isPopupVisible && submittedData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-4">
                Gửi liên hệ thành công!
              </h2>
              <p className="mb-6">
                Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
              </p>
              <div className="mb-6 text-left">
                <p>
                  <strong>Tên:</strong> {submittedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {submittedData.email}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {submittedData.phone}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {submittedData.address}
                </p>
                <p>
                  <strong>Nội dung:</strong> {submittedData.message}
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Link href="/" passHref>
                  <Button className="bg-blue-500 text-white py-2 px-4 rounded-3xl">
                    Trang chủ
                  </Button>
                </Link>
                <Button
                  onClick={() => setIsPopupVisible(false)}
                  className="bg-green-500 text-white py-2 px-4 rounded-3xl"
                >
                  Liên Hệ Lại
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
};

export default ContactPage;
