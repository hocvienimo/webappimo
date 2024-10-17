"use client";

import Image from 'next/image';
import ImgAbout from '@/public/images/bg-about-imo-vn.png';
import { HiCodeBracket } from "react-icons/hi2";
import { motion} from 'framer-motion';
import { fadeIn } from '../components/variants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const aboutContent = {
  heading: {
    title: "Giải Pháp Toàn Diện Cho Doanh Nghiệp Số",
    description: "iMovn - Đối Tác Đáng Tin Cậy cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam. Chúng tôi là một trong những đơn vị hàng đầu cung cấp các dịch vụ:",
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
    <section className="py-7 lg:py-14">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[45%_55%] grid-cols-1">
          <motion.div 
          variants={fadeIn('right', 0.1)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.2 }}
          className="mt-8 md:mt-0 md:pr-8"
          >
            <Image
              src={ImgAbout}
              priority
              alt="Our Team"
              className="rounded-lg max-w-full h-auto"
            />
          </motion.div>

          <motion.div 
          variants={fadeIn('left', 0.1)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.2 }}
          className="md:pl-8"
          >
            <h3 className="font-secondary md:text-4xl md:w-3/4 text-3xl mt-3 font-bold mb-2 text-primary lg:leading-[50px]">
                {aboutContent.heading.title}
            </h3>
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
            
              <Button asChild className="text-white font-bold text-base bg-red-700">
                <Link href="tel:0902226119" target="_blank">Hotline: 0902 226 119</Link>
              </Button>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.2 }}
            >
            </motion.div>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs