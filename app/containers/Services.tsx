"use client";
import { FaHtml5 } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaClone } from "react-icons/fa6";
import { FaCircleNodes } from "react-icons/fa6";
import { FaDigitalOcean } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from 'next/link';
import { fadeIn } from "../components/variants";

const howItWorksContent = {
    heading: {
        title: "Dịch vụ & Giải pháp iMovn Cung Cấp",
        subTitle: "Chúng tôi làm gì?",
        description: "iMovn chuyên trong lãnh vực lập trình & thiết kế website, app mobile cùng các dịch vụ markekting online đa kênh. Với hơn 9 kinh nghiệm, chúng tối cam kết mang đến Quý khách hàng các giải pháp sáng tạo & hiệu quả nhất để thúc đẩy doanh nghiệp của bạn!"
    },

    workStep: [
        {
            number: '01',
            icon: FaHtml5,
            title: "Thiết kế web theo yêu cầu",
            description: "Cấu trúc website chuẩn SEO theo checklist Google, sáng tạo, công nghệ thiết kế & lập trình web hiện đại như Nextjs - Reactjs - Nodejs - Firebase - Wordpress.",
            btn: {
                href: "/thiet-ke-web-theo-yeu-cau",
                label: "Xem chi tiết"
            }
        },

        {
            number: '02',
            icon: FaAppStoreIos,
            title: "Lập trình app mobile",
            description: "Mang đến cho bạn những giải pháp hiệu quả, không chỉ tập trung vào việc tạo ra giao diện người dùng hấp dẫn mà còn đảm bảo trải nghiệm người dùng tốt nhất.",
            btn: {
                href: "/",
                label: "Xem chi tiết"
            }
        },

        {
            number: '03',
            icon: FaRocket,
            title: "SEO tổng thể đa kênh",
            description: "Dịch vụ SEO tổng thể của iMovn được thiết kế để tối ưu sự tiêp cận online trực tuyến của bạn, không chỉ trên Google mà trên tất cả nền tảng quan trọng khác.",
            btn: {
                href: "/",
                label: "Xem chi tiết"
            }
        }
    ],

    smallServices: [
        {
            icon: FaDigitalOcean,
            title: "Phòng marketing online thuê ngoài",
            description: "Giải pháp Outsourced Marketing Department tối ưu cho các doanh nghiệp muốn tập trung chuyên môn & kinh nghiệm của đội ngũ marketing online đa kênh chuyên nghiệp mà không cần phải xây dụng & duy trì phòng ban nội bộ trong công ty",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: FaFileSignature,
            title: "Content SEO",
            description: "iMovn nghiên cứu đối thủ cạnh tranh cùng bạn để tìm ra các chủ đề đang triển khai và kết hợp nghiên cứu từ khóa để phân nhóm chủ đề mới. Triển khai content đa dạng, độc nhất và chuẩn SEO khi đăng lên website của bạn.",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: FaCircleNodes,
            title: "Backlink entity",
            description: "Dịch vụ đi backlink entity của chúng tôi tập trung vào việc xây dụng các liên kết ngược chất lượng cao về web của bạn. Giúp tăng cường thứ hạng, độ uy tín & độ tin cậy với công cụ tìm kiếm & tiếp cận khách tiềm năng",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: FaClone,
            title: "Langding Page",
            description: "Thiết kế một landing page chuyên nghiệp không chỉ đẹp còn mang tính logic hóa các vấn đề đưa vào landing page đúng trọng tâm. Tăng tỷ lệ chuyển đổi khí chạy quảng cáo Google, Facebook ads, tập trung vào mục tiêu cụ thể.",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        }
    ]
}

const Services = () => {
  return (
    <>
    <section>
        <div className="container py-20 mx-auto">
            <div className="md:flex justify-center mb-20 md:mb-28 overflow-hidden">
                <div className="w-full md:w-9/12 md:flex gap-0 items-center">
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
                            className='uppercase tracking-[3px] text-[13px] inline-block text-secondary'>
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
                            >
                                {howItWorksContent.heading.description}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-11/12 mx-auto">
                {howItWorksContent.workStep.map((step, index) => {
                    index *=0.2; 
                    return (
                    <motion.div  
                    initial = {{ opacity: 0, y:30 }}
                    whileInView={{ 
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: index,
                            duration: 0.5
                        }
                     }}
                     viewport={{ once:true }}
                     whileHover={{ y:-10, transition: 0.1 }}
                     key={step.title} className="group duration-300 pt-32 pl-5 pr-5 pb-10 bg-white relative overflow-hidden hover:bg-secondary hover:text-white">
                        <span className='text-[230px] inline-block z-[1] font-bold absolute -top-[200px] opacity-5 left-0 leading-0'>
                            {step.number}
                        </span>

                        <div className='absolute top-10 right-10'>
                            <span className='text-4xl text-[#FF7431] duration-300 transition-all ease-in-out group-hover:text-white'>
                                <step.icon />
                            </span>
                        </div>

                        <div className="relative flex gap-3 items-start mt-5">
                            <div>
                                <h3 className='text-2xl text-primary font-secondary font-bold mb-4 duration-300 transition-all ease-in-out group-hover:text-white'> 
                                    {step.title}
                                </h3>
                                <p className='leading-relaxed text-[17px]  text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-[#D6FAFF]'>
                                    {step.description}
                                </p>
                                <p>
                                    <Link href={step.btn.href} className='text-[14px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-[#FF7431] duration-300 transition-all ease-in-out group-hover:font-extrabold group-hover:text-[#FF7431] group-hover:border-white'>
                                    {step.btn.label}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    )
                })}
            </div>

        </div>
    </section>
    <section className='pt-72 pl-4 pr-4 lg:pt-72 pb-20 bg-primary'>
        <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {howItWorksContent.smallServices.map((smStep, index)=> {
                        index *=0.2;
                        return (
                            <motion.div
                            initial = {{ opacity: 0, y:30 }}
                            whileInView={{ 
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: index,
                                    duration: 0.5
                                }
                            }}
                            viewport={{ once:true }}
                            key={smStep.title} className='relative flex gap-3 items-start'>
                                <div>
                                    <span className='text-3xl text-white'><smStep.icon /></span>
                                </div>

                                <div>
                                    <h3 className='text-xl mb-4 text-white'>{smStep.title}</h3>
                                    <p className='leading-relaxed text-[15px] text-white text-opacity-75 mb-7'>{smStep.description}</p>
                                    <p>
                                        <Link href={smStep.btn.ref} className='text-[14px] text-[#FF7431] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-white border-opacity-25 duration-300 transition-all ease-in-out hover:font-extrabold hover:text-[#FF7431] hover:border-white'>
                                        {smStep.btn.label}
                                        </Link>
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services