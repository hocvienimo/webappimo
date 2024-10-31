"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

const testimonialContent = {
  heading: {
    title: "Đối Tác & Khách Hàng Nói Về Chúng Tôi",
    subTitle: "Cảm Nhận & Đánh Giá",
  },

  testimonials: [
    {
      img: "/images/testimonials/testimonial-imovn-01.jpg",
      name: "Ms. Thảo",
      titleRole: "Lead myHome",
      quote:
        "iMovn đã thiết kế cho chúng tôi một trang web chuyên nghiệp và thân thiện với người dùng. Từ lúc bắt đầu đến khi hoàn thành, đội ngũ luôn làm việc nhiệt tình và chu đáo. Tôi rất hài lòng.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-02.jpg",
      name: "Mrs. Nguyên Hy",
      titleRole: "Digital Cf147",
      quote:
        "Website của chúng tôi không chỉ đẹp mắt mà còn chuẩn SEO, giúp tăng lượng truy cập đáng kể. Đội ngũ iMovn luôn sẵn sàng hỗ trợ mọi lúc mọi nơi. Dịch vụ tuyệt vời và chuyên nghiệp!",
    },

    {
      img: "/images/testimonials/testimonial-imovn-03.jpg",
      name: "Mr. Gia Huy",
      titleRole: "BĐS Gia Phát",
      quote:
        "iMovn đã biến ý tưởng của chúng tôi thành hiện thực với một trang web hiện đại và dễ sử dụng. Chúng tôi rất ấn tượng với sự tận tâm và chuyên nghiệp của họ. Rất đáng để hợp tác lâu dài.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-04.jpg",
      name: "Ms. Oanh Trần",
      titleRole: "Lead ViBookCar",
      quote:
        "Trang web mới của chúng tôi đã nhận được nhiều lời khen ngợi từ khách hàng. Tốc độ tải trang nhanh và giao diện thân thiện đã cải thiện trải nghiệm người dùng. Cảm ơn iMovn vì dịch vụ tuyệt vời.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-05.jpg",
      name: "Ms. Thúy Vy",
      titleRole: "Vimec Capital",
      quote:
        "Thiết kế website của iMovn rất sáng tạo và độc đáo. Họ đã giúp chúng tôi tăng khả năng tiếp cận khách hàng thông qua SEO hiệu quả. Tôi hoàn toàn tin tưởng vào chất lượng dịch vụ của họ.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-06.jpg",
      name: "Mr. Dũng",
      titleRole: "Nội Thất Gia Khang",
      quote:
        "Từ khi sử dụng dịch vụ của iMovn, doanh thu của chúng tôi đã tăng lên đáng kể. Website đẹp mắt và chuyên nghiệp đã tạo được ấn tượng tốt với khách hàng. Tôi rất hài lòng với sự lựa chọn này.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-07.jpg",
      name: "Mrs. Diễm",
      titleRole: "Decor 3GiTa",
      quote:
        "iMovn không chỉ thiết kế mà còn tư vấn cho chúng tôi những giải pháp tốt nhất. Website của chúng tôi giờ đây rất dễ quản lý và tối ưu hóa SEO. Đội ngũ làm việc nhanh chóng và hiệu quả.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-08.jpg",
      name: "Mr. Phong",
      titleRole: "Kiến Trúc T&Y",
      quote:
        "Dịch vụ của iMovn thực sự xuất sắc! Họ lắng nghe yêu cầu của chúng tôi và mang đến một website hoàn hảo. Tôi đặc biệt ấn tượng với sự chuyên nghiệp và tận tâm của đội ngũ.",
    },

    {
      img: "/images/testimonials/testimonial-imovn-09.jpg",
      name: "Mr. Tùng",
      titleRole: "Travel IMZ",
      quote:
        "Dịch vụ thiết kế website của iMovn thực sự xuất sắc. Họ đã giúp chúng tôi xây dựng một trang web đẹp mắt và chuẩn SEO. Tôi hoàn toàn hài lòng và sẽ tiếp tục hợp tác với họ.",
    },
  ],
};

const Testimonial = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);
  const sliderRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.isEnd);
      setIsBeginning(sliderRef.current.isBeginning);
    }
  }, [sliderRef]); // Thêm sliderRef vào dependencies

  const prevHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  }, []);

  const nextHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  }, []);

  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 flex gap-0 items-center">
            <div className="text-center w-auto lg:w-screen max-w-full lg:max-w-xl mx-auto mb-16">
              {testimonialContent.heading.subTitle && (
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
                  className="uppercase tracking-[3px] text-[13px] inline-block text-secondary"
                >
                  {testimonialContent.heading.subTitle}
                </motion.span>
              )}

              {testimonialContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: false }}
                  className="font-secondary md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary"
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 lg:flex gap-0 items-center"
          >
            <Swiper
              onSwiper={(swiper) => {
                sliderRef.current = swiper;
                setIsEnd(swiper.isEnd);
                setIsBeginning(swiper.isBeginning);
              }}
              speed={700}
              spaceBetween={30}
              onSlideChange={(swiper) => {
                setIsEnd(swiper.isEnd);
                setIsBeginning(swiper.isBeginning);
              }}
              className="z-50 py-32 mb-7 relative flex items-center"
            >
              {testimonialContent.testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name} className="w-full">
                  <div className="block lg:flex overflow-x-visible mt-10 items-stretch bg-white">
                    <div className="lg:w-4/12">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={379}
                        height={320}
                        className="object-cover object-center !h-full !w-full"
                      />
                    </div>

                    <div className="lg:w-8/12 p-7 lg:p-16 flex items-center">
                      <div>
                        <blockquote className="text-lg mb-8">
                          <span className="text-[200px] leading-[0] relative text-thirdary block">
                            &ldquo;
                          </span>
                          {testimonial.quote}
                        </blockquote>
                        <div className="flex space-x-3 text-sm">
                          <strong>{testimonial.name}</strong>
                          <span>&mdash;</span>
                          <span>{testimonial.titleRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isBeginning
                  ? "optional-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-primary text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-white transition-all duration-300 ease-in-out group-hover:text-[#FF7431] ${
                  isBeginning
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-[#FF7431]"
                }`}
              />
            </div>

            <div
              onClick={nextHandler}
              className={`${
                isEnd
                  ? "optional-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-primary text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-white transition-all duration-300 ease-in-out group-hover:text-[#FF7431] ${
                  isEnd
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-[#FF7431]"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
