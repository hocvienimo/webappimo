"use client";

import { fadeIn } from "@/components/moduls/variants";
import { motion } from "framer-motion";

const headingSection = {
  heading: {
    title: "Quy Trình Thiết Kế Website Chuyên Nghiệp",
    subTitle: "Dịch vụ thiết kế website",
    description:
      "Thiết kế website là giải pháp hiệu quả với mỗi doanh nghiệp hiện nay nhưng trước khi có được một trang web chuyên nghiệp và hoàn hảo cần sự phối hợp giữa đơn vị thiết kế theo một quy trình thống nhất. Dựa trên những kinh nghiệm thiết kế website chuẩn Seo cho nhiều dự án lớn nhỏ khác nhau. Đội ngũ kỹ thuật iMovn đã ra quy trình thiết kế web với 9 bước cơ bản sau...",
  },
};

const StepProcess = () => {
  const steps = [
    {
      step: 1,
      title: "Thu Thập Yêu Cầu",
      desc: "Chúng tôi lắng nghe và xác định yêu cầu chi tiết của bạn, từ tính năng mong muốn đến giao diện người dùng..",
    },
    {
      step: 2,
      title: "Phân Tích & Tư Vấn",
      desc: "Đội ngũ chuyên gia sẽ tư vấn các giải pháp công nghệ, bố cục và tính năng tối ưu, phù hợp với thị trường mục tiêu của bạn.",
    },
    {
      step: 3,
      title: "Thiết Kế UI/UX",
      desc: "Thiết kế giao diện với trải nghiệm người dùng mượt mà, dễ sử dụng và thu hút. Chúng tôi đảm bảo giao diện có tính thẩm mỹ cao và tính năng dễ truy cập.",
    },
    {
      step: 4,
      title: "Phát Triển Ứng Dụng",
      desc: "Tiến hành lập trình và triển khai theo đúng kế hoạch, luôn cập nhật tiến độ để bạn theo dõi sát sao.",
    },
    {
      step: 5,
      title: "Kiểm Thử & Tối Ưu",
      desc: "Kiểm thử ứng dụng trên nhiều thiết bị và điều chỉnh cho tối ưu hiệu suất. Mọi lỗi kỹ thuật sẽ được khắc phục trước khi ra mắt.",
    },
    {
      step: 6,
      title: "Phát Hành & Bảo Trì",
      desc: "Ứng dụng được triển khai lên các nền tảng App Store, Play Store và chúng tôi cung cấp dịch vụ bảo trì dài hạn để đảm bảo hoạt động ổn định.",
    },
  ];

  return (
    <section className="py-10 mt-9">
      <div className="container pb-12 mx-auto">
        <div className="md:flex justify-center my-1 md:my-1 overflow-hidden">
          <div className="w-full md:w-11/12 md:flex gap-5 items-center">
            <div className="md:w-5/12 mb-5 md:mb-0">
              {headingSection.heading.subTitle && (
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
                  {headingSection.heading.subTitle}
                </motion.span>
              )}
              <motion.h2
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="font-secondary md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary"
              >
                {headingSection.heading.title}
              </motion.h2>
            </div>

            <div className="md:w-7/12 self-end">
              {headingSection.heading.description && (
                <motion.p
                  variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-lg text-justify"
                >
                  {headingSection.heading.description}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Heading */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }} // Vị trí ban đầu (mờ và dịch xuống)
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.1, // Đẩy hiệu ứng theo thứ tự
                duration: 0.5,
              },
            }}
            viewport={{ once: false }} // Chỉ chạy một lần khi bước vào viewport
          >
            <motion.div
              className="absolute font-primary top-0 right-0 text-9xl font-bold text-gray-100"
              initial={{ x: -50 }} // Vị trí ban đầu (bên trái)
              whileInView={{
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: false }} // Chỉ chạy một lần khi bước vào viewport
            >
              {step.step}
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-primary capitalize">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base">{step.desc}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary opacity-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepProcess;
