"use client";
import React, { useState } from 'react';
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const itemPrice = [
    {
      feature: 'Phù hợp với',
      category: 'Giao Diện Website',
      silver: 'Cá nhân, Cửa hàng, Doanh nghiệp quy mô vừa & nhỏ',
      gold: 'Mọi tổ chức, Doanh nghiệp quy mô lớn',
    },
    {
      feature: 'Thiết kế',
      category: 'Giao Diện Website',
      silver: 'Dựa trên các mẫu có sẵn, có thể tùy chỉnh màu sắc, font chữ, bố cục cơ bản',
      gold: 'Giao diện được thiết kế riêng biệt, thể hiện cá tính và thương hiệu của doanh nghiệp, không sử dụng mẫu có sẵn',
    },
    {
      feature: 'Responsive',
      category: 'Giao Diện Website',
      silver: 'Tự động điều chỉnh hiển thị phù hợp với các thiết bị khác nhau (máy tính, điện thoại, máy tính bảng)',
      gold: 'Tự động điều chỉnh hiển thị phù hợp với các thiết bị khác nhau (máy tính, điện thoại, máy tính bảng)',
    },
    {
      feature: 'Cấu trúc trang',
      category: 'Giao Diện Website',
      silver: 'Cấu trúc cơ bản: Trang chủ, Giới thiệu, Sản phẩm/Dịch vụ, Tin tức/Blog, Liên Hệ',
      gold: 'Cấu trúc tùy chọn bao gồm các trang cơ bản và các trang nâng cao theo yêu cầu khách hàng',
    },
    {
      feature: 'Tối ưu trải nghiệm người dùng (UX/UI)',
      category: 'Giao Diện Website',
      silver: false,
      gold: true,
    },
    {
        feature: 'Tốc độ tải trang Nhanh',
        category: 'Giao Diện Website',
        silver: false,
        gold: true,
    },
    {
      feature: 'Quản lý nội dung (CMS)',
      category: 'Chức Năng',
      silver: 'Cơ bản: cho phép bạn dễ dàng cập nhật nội dung website cho trang Tin tức/Blog mà không cần kiến thức kỹ thuật',
      gold: 'Nâng cao: cho phép quản lý nội dung linh hoạt, dễ dàng tùy biến và mở rộng tính năng',
    },
    {
        feature: 'Tối ưu SEO',
        category: 'Chức Năng',
        silver: 'Cơ bản: cấu trúc website thân thiện với công cụ tìm kiếm, giúp cải thiện thứ hạng trên Google',
        gold: 'Chuyên sâu: áp dụng các kỹ thuật SEO tiên tiến để tăng khả năng hiển thị trên công cụ tìm kiếm, thu hút nhiều khách hàng tiềm năng hơn',
    },
    {
        feature: 'Bảo mật',
        category: 'Chức Năng',
        silver: 'Cơ bản: chứng chỉ SSL miễn phí để bảo vệ thông tin khách hàng',
        gold: 'Chuyên sâu: các biện pháp bảo mật mạnh mẽ để bảo vệ website và dữ liệu khách hàng',
    },
    {
        feature: 'Bản đồ',
        category: 'Chức Năng',
        silver: true,
        gold: true,
    },
    {
        feature: 'Lập trình chức năng nâng cao',
        category: 'Chức Năng',
        silver: false,
        gold: 'Phát triển các tính năng đặc thù theo yêu cầu riêng của doanh nghiệp, đáp ứng mọi nhu cầu kinh doanh',
    },
    {
        feature: 'Tích hợp các công cụ tiếp thị & bán hàng',
        category: 'Chức Năng',
        silver: false,
        gold: 'Kết nối các nền tảng CRM, email marketing, hoặc các công cụ phân tích để tối ưu hóa hiệu quả kinh doanh',
    },
  ];

const PriceTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

    const openPopup = (packageName) => {
        setSelectedPackage(packageName);
        setIsOpen(true);
      };
    
      const closePopup = () => {
        setIsOpen(false);
        setSelectedPackage('');
      };

      // Get unique categories for the leftmost column
  const categories = Array.from(new Set(itemPrice.map(item => item.category)));
    
      return (
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Pricing Plans</h2>
            <p className="text-gray-600">Compare our plans and choose the best one for you</p>
          </div>
  
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left"></th>
                  <th className="text-left px-6 py-4">Thiết kế website</th>
                  <th className="text-center px-6 py-4">Silver</th>
                  <th className="text-center px-6 py-4">Gold</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    {itemPrice.filter(item => item.category === category).map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        {itemIndex === 0 && (
                          <tr className="border-t border-b">
                            <td className="font-semibold bg-secondary text-white" rowSpan={itemPrice.filter(item => item.category === category).length}>
                              <div className="flex items-center justify-center h-full">
                                <div className="transform -rotate-90">
                                  {category}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">{item.feature}</td>
                            <td className="px-6 py-4">
                              {item.silver === true ? <span className="text-green-500 text-2xl"><FaCircleCheck/></span> : (item.silver === false ? <span className="text-red-500 text-2xl"><FaCircleXmark/></span> : item.silver)}
                            </td>
                            <td className="px-6 py-4">
                              {item.gold === true ? <span className="text-green-500 text-2xl"><FaCircleCheck/></span> : (item.gold === false ? <span className="text-red-500 text-2xl"><FaCircleXmark/></span> : item.gold)}
                            </td>
                          </tr>
                        )}
                        {itemIndex > 0 && (
                          <tr className="border-t border-b">
                            <td className="px-6 py-4">{item.feature}</td>
                            <td className="px-6 py-4">
                              {item.silver === true ? <span className="text-green-500 text-2xl"><FaCircleCheck/></span> : (item.silver === false ? <span className="text-red-500 text-2xl"><FaCircleXmark/></span> : item.silver)}
                            </td>
                            <td className="px-6 py-4">
                              {item.gold === true ? <span className="text-green-500 text-2xl"><FaCircleCheck/></span> : (item.gold === false ? <span className="text-red-500 text-2xl"><FaCircleXmark/></span> : item.gold)}
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
                {/* Add the row for the quote buttons */}
                <tr>
                  <td className="px-6 py-4 font-semibold" colSpan="2"></td>
                  <td className="text-center px-6 py-4">
                    <button
                      onClick={() => openPopup('Silver')}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Tư Vấn Báo Giá Silver
                    </button>
                  </td>
                  <td className="text-center px-6 py-4">
                    <button
                      onClick={() => openPopup('Gold')}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Tư Vấn Báo Giá Gold
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4">Đăng Ký Tư Vấn</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Tên</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Số Điện Thoại</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Số điện thoại của bạn"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gói Đã Chọn</label>
                  <input
                    type="text"
                    value={selectedPackage}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600 transition"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      );
    };
  
  export default PriceTable;