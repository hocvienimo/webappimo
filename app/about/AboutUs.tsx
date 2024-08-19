"use client";

import Image from 'next/image';
import ImgAbout from '@/public/images/bg-about-imo-vn.png';
import { HiCodeBracket } from "react-icons/hi2";
import { motion} from 'framer-motion';
import { fadeIn } from '../components/variants';


const aboutContent = {
  heading: {
    title: "Giải Pháp Toàn Diện Cho Doanh Nghiệp Số",
    subtitle: "Chi phí thấp - Hiệu quả cao - Uy tín tuyệt đối",
    description: "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam. Chúng tôi là một trong những đơn vị hàng đầu cung cấp các dịch vụ:",
    subDescription: "iMovn cam kết mang lại hiệu quả tối đa cho khách hàng, giúp khách hàng tiết kiệm thời gian, chi phí và tăng trưởng doanh thu dài hạn."
  },

  services: [
    { icon: HiCodeBracket, title: "Thiết kế website đa ngành chuẩn SEO" },
    { icon: HiCodeBracket, title: "Lập trình web, app mobile theo yêu cầu" },
    { icon: HiCodeBracket, title: "Phòng marketing online thuê ngoài" },
    { icon: HiCodeBracket, title: "Quản trị website & SEO tổng thể" },
    { icon: HiCodeBracket, title: "Thiết kế landing page chạy quảng cáo" },
    { icon: HiCodeBracket, title: "Đăng ký website với Bộ Công Thương" }
  ],
}


const AboutUs = () => {
  return (
    <section className="py-7 lg:py-14 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
          variants={fadeIn('up', 0.1)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.2 }}
          className="md:w-1/2 md:pr-8"
          >
            <h1 className="font-secondary md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary lg:leading-[50px]">
                {aboutContent.heading.title}
            </h1>
            <p className='text-thirdary font-extrabold uppercase mb-5 md:text-lg text-sm'>{aboutContent.heading.subtitle}</p>
            <p className="text-lg text-gray-600 mb-4">
            {aboutContent.heading.description}
            </p>
            
            <ul className='text-gray-600 mb-4 text-lg'>
            {aboutContent.services.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="text-thirdary"/> {item.title}
                </li>
              ))}
            </ul>

            <p className='pb-3 text-lg'>
              {aboutContent.heading.subDescription}
            </p>
            
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.2 }}
            >
            </motion.div>
          
          </motion.div>

          <motion.div 
          variants={fadeIn('left', 0.1)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.2 }}
          className="md:w-1/2 mt-8 md:mt-0"
          >
            <Image
              src={ImgAbout}
              priority
              alt="Our Team"
              className="rounded-lg max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs