"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { fadeIn } from "../../../components/moduls/variants";

interface FaqsItemProps {
  step: string;
  description: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const steps = [
  {
    step: "Chi phí thiết kế website là bao nhiêu?",
    description:
      "Chi phí phụ thuộc vào nhiều yếu tố như số trang, tính năng cần thiết và công nghệ sử dụng. Chúng tôi cung cấp các gói dịch vụ từ cơ bản đến nâng cao để phù hợp với nhu cầu của từng khách hàng. Đội ngũ của chúng tôi sẽ tư vấn rõ ràng để bạn chọn được gói phù hợp nhất.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Thời gian hoàn thành một website mất bao lâu?",
    description:
      "Thời gian hoàn thiện trung bình từ 2 đến 6 tuần, tùy thuộc vào độ phức tạp và số lượng trang cần thiết kế. Với các dự án lớn hoặc có yêu cầu đặc thù, thời gian có thể lâu hơn nhưng chúng tôi luôn đảm bảo tiến độ cam kết. Chúng tôi sẽ cập nhật thường xuyên để bạn nắm rõ từng bước tiến độ.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Website có thân thiện với thiết bị di động không?",
    description:
      "Tất cả các website của chúng tôi đều chuẩn responsive, đảm bảo hiển thị tốt trên mọi thiết bị từ máy tính đến điện thoại di động. Điều này giúp tăng trải nghiệm người dùng và tối ưu SEO, cải thiện thứ hạng trên công cụ tìm kiếm. Chúng tôi thử nghiệm kỹ lưỡng để website chạy mượt mà trên tất cả các nền tảng.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Dịch vụ thiết kế website có bao gồm SEO không?",
    description:
      "Có, chúng tôi áp dụng các phương pháp tối ưu SEO cơ bản cho trang như cấu trúc thân thiện, từ khóa và tối ưu tốc độ tải trang. Điều này giúp website dễ dàng được tìm thấy trên các công cụ tìm kiếm, mang lại lưu lượng truy cập tự nhiên. Đội ngũ của chúng tôi có thể tư vấn thêm về dịch vụ SEO nâng cao nếu bạn cần.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Sau khi hoàn thành, tôi có thể tự chỉnh sửa nội dung trên website không?",
    description:
      "Có, chúng tôi thiết kế website với hệ thống quản trị thân thiện, giúp bạn dễ dàng thêm mới hoặc chỉnh sửa nội dung. Ngay cả khi bạn không có kiến thức kỹ thuật, bạn vẫn có thể quản lý trang web một cách hiệu quả. Đội ngũ của chúng tôi cũng sẽ hướng dẫn bạn cách sử dụng hệ thống sau khi bàn giao.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Website có bảo mật tốt không?",
    description:
      "Chúng tôi đặt bảo mật lên hàng đầu, triển khai chứng chỉ SSL, mã hóa dữ liệu và các biện pháp phòng ngừa tấn công. Các lớp bảo mật này giúp bảo vệ trang web khỏi các mối đe dọa mạng, đảm bảo an toàn cho cả bạn và người dùng. Chúng tôi cũng thường xuyên cập nhật các bản vá để giữ website an toàn.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Dịch vụ thiết kế có bao gồm lưu trữ và tên miền không?",
    description:
      "Chúng tôi cung cấp tư vấn về lựa chọn tên miền và hosting để đảm bảo website hoạt động ổn định. Bạn có thể tự chọn nhà cung cấp hoặc nhờ chúng tôi hỗ trợ với các đối tác uy tín. Các tùy chọn này sẽ được tối ưu để đáp ứng tốt nhu cầu và lưu lượng của website.",
    icon: <FiCheckCircle />,
  },
];

const FaqsItem = ({
  step,
  description,
  icon,
  isOpen,
  onClick,
  index,
}: FaqsItemProps) => (
  <div className="border-b border-gray-300 py-5 px-6">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
      role="button"
      aria-expanded={isOpen}
      aria-controls={`faq-content-${index}`}
    >
      <div className="flex items-center">
        <div className="text-secondary bg-white p-2 rounded-full shadow-md text-2xl">
          {icon}
        </div>
        <h3 className="ml-4 text-lg font-semibold">{step}</h3>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-600"
      >
        <TfiAngleDoubleDown />
      </motion.div>
    </div>
    {isOpen && (
      <motion.div
        className="mt-3"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
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
    <div className="py-16 mx-auto container justify-center flex">
      <div className="px-0 md:px-16 md:w-4/5 block">
        <motion.h5
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center font-secondary md:text-4xl text-3xl font-bold text-primary mb-10"
        >
          Câu Hỏi Thường Gặp
        </motion.h5>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {steps.map((step, index) => (
            <FaqsItem
              key={index}
              index={index}
              step={step.step}
              description={step.description}
              icon={step.icon}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faqs;
