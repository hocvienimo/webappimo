"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/variants";

const howItWorksContent = {
    heading: {
        title: "Thiết Kế Web Theo Yêu Cầu Chuẩn SEO",
        subTitle: "Dịch vụ marketing online",
        description: "Thiết kế website theo yêu cầu là 01 sách lược đầu tư cần thiết & thông minh, giúp doanh nghiệp tạo dựng được nhận diện thương hiệu, nâng cao trải nghiệm người dùng & tăng hiệu quả kinh doanh thông qua website của mình. Chúng tôi giúp bạn tạo dựng website không chỉ đẹp mắt mà còn tối ưu hóa để đạt hiệu quả cao nhất trên các công cụ tìm kiếm, thúc đẩy lưu lượng truy cập & tăng doanh số bán hàng."
    },
}

const Info = () => {
  return (
    <section>
    <div className="container py-20 mx-auto">
        <div className="md:flex justify-center my-1 md:my-1 overflow-hidden">
            <div className="w-full md:w-11/12 md:flex gap-5 items-center">
                <div className="md:w-5/12 mb-5 md:mb-0">
                    {howItWorksContent.heading.subTitle && (
                        <motion.span 
                        initial={{ opacity:0, y:20 }}
                        whileInView={{ 
                            opacity:1,
                            y:0,
                            transition: {
                                delay: 0.2,
                                duration: 0.5
                            }
                        }}
                        viewport={{ once: true }}
                        className='uppercase tracking-[3px] text-[13px] inline-block text-thirdary'>
                            {howItWorksContent.heading.subTitle}
                        </motion.span>
                    )}
                    <motion.h2
                    variants={fadeIn('right', 0.1)}
                    initial = 'hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.2 }}
                    className="font-secondary md:text-4xl text-3xl mt-3 font-bold mb-2 text-primary"
                    >
                        {howItWorksContent.heading.title}
                    </motion.h2>
                </div>

                <div className="md:w-7/12 self-end">
                    {howItWorksContent.heading.description && (
                        <motion.p
                        variants={fadeIn('left', 0.1)}
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.2 }}
                        className="text-lg text-justify"
                        >
                            {howItWorksContent.heading.description}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Info