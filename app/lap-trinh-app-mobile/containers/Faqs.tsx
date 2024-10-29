"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { fadeIn } from "../../components/variants";

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
    step: "Chi phí phát triển ứng dụng di động là bao nhiêu?",
    description:
      "Chi phí sẽ phụ thuộc vào độ phức tạp, số lượng tính năng và yêu cầu đặc thù. Chúng tôi sẽ tư vấn chi tiết để bạn chọn gói phù hợp nhất.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Thời gian hoàn thành một ứng dụng mất bao lâu?",
    description:
      "Thời gian trung bình từ 4-12 tuần, tùy theo quy mô và tính năng của ứng dụng. Đội ngũ chúng tôi sẽ cập nhật tiến độ thường xuyên để bạn theo dõi dễ dàng.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Ứng dụng có thân thiện với người dùng không?",
    description:
      "Chúng tôi tập trung vào trải nghiệm người dùng với thiết kế UX/UI hiện đại, giúp ứng dụng dễ sử dụng và hấp dẫn. Mỗi ứng dụng được thử nghiệm kỹ để tối ưu hóa trên cả Android và iOS.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Dịch vụ có bao gồm bảo trì sau khi phát hành không?",
    description:
      "Có, chúng tôi cung cấp các gói bảo trì định kỳ, hỗ trợ kỹ thuật để đảm bảo ứng dụng luôn hoạt động ổn định.",
    icon: <FiCheckCircle />,
  },
  {
    step: "Làm thế nào để ứng dụng của tôi nổi bật trên App Store & Play Store?",
    description:
      "Chúng tôi áp dụng các phương pháp tối ưu hóa từ từ khóa đến giao diện, giúp ứng dụng dễ dàng xếp hạng cao hơn và thu hút nhiều lượt tải hơn.",
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
