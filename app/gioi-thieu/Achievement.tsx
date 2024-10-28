"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiBookOpen,
  HiMiniPuzzlePiece,
  HiMiniRocketLaunch,
} from "react-icons/hi2";
import { Parallax } from "react-parallax";
import { fadeIn } from "../components/variants";

const difference = [
  {
    title: "Triết lý thương hiệu",
    icon: HiBookOpen,
    text: "Luôn luôn đề cao sự thấu hiểu để trở thành người bạn đồng hành đáng tin cậy đối với khách hàng.",
  },
  {
    title: "Khách hàng mục tiêu",
    icon: HiMiniPuzzlePiece,
    text: "Tập đoàn, tổ chức, Hiệp hội nhà nước, doanh nghiệp vừa và nhỏ, chủ cửa hàng hoặc cá nhân có nhu cầu sử dụng dịch vụ marketing online.",
  },
  {
    title: "iMovn Slogan",
    icon: HiMiniRocketLaunch,
    text: "Ở đâu con người vui vẻ ở đó có phồn vinh",
  },
];

const stats = [
  { number: 1220, text: "Quý khách hàng" },
  { number: 9, text: "Năm kinh nghiệm" },
  { number: 14, text: "Quý đối tác" },
  { number: 23, text: "Cộng sự chính" },
];

const backgroundImageUrl = "/images/bg-khac-biet-imovn.jpg";

const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const statsItemVariant = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Achievement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Parallax
      strength={400}
      bgImage={backgroundImageUrl}
      bgImageAlt="bg-imovn"
      className="parallax-wrapper"
      bgImageStyle={{
        minHeight: "100%",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center justify-between">
          {/* Left */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <h2 className="text-4xl font-bold font-secondary mb-8 text-primary leading-tight">
              Sự Khác Biệt Của iMovn
            </h2>
            <p className="mb-10 text-lg text-black text-justify">
              Với tiêu chí “Nhỏ gọn – An toàn, bảo mật – Đơn giản – Độc đáo“,
              iMovn luôn nỗ lực tạo ra những sản phẩm webapp tối ưu và dịch vụ
              chất lượng.
            </p>

            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-10"
            >
              {difference.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-full shadow-lg">
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black font-secondary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-lg text-primary">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* Right */}
          <motion.div
            variants={statsContainerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2 w-full grid grid-cols-2 md:gap-8 gap-4"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={statsItemVariant}
                className="flex flex-col group items-center md:p-6 px-0 py-6 bg-primary bg-opacity-90 shadow-2xl rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
              >
                <div
                  ref={ref}
                  className="border-4 group-hover:border-secondary border-thirdary/50 w-28 h-28 md:w-36 md:h-36 md:text-4xl group-hover:text-primary text-2xl font-black rounded-full flex items-center justify-center bg-white text-thirdary"
                >
                  {isInView && (
                    <CountUp start={0} end={item.number} duration={2.5} />
                  )}
                </div>
                <h4 className="mt-4 md:text-base text-xs md:font-bold font-black group-hover:text-thirdary text-white uppercase">
                  {item.text}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
};

export default Achievement;
