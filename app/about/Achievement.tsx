"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBookOpen, HiMiniPuzzlePiece, HiMiniRocketLaunch } from "react-icons/hi2";
import { Parallax  } from 'react-parallax';
import { fadeIn } from "../components/variants";

// Define the stats array with type annotations
const difference = [
    {
        title: "Triết lý thương hiệu",
        icon: HiBookOpen,
        text: "Luôn luôn đề cao sự thấu hiểu để trở thành người bạn đồng hành đáng tin cậy đối với khách hàng."
    },
    {
        title: "Khách hàng mục tiêu",
        icon: HiMiniPuzzlePiece,
        text: "Là Tập đoàn, tổ chức, Hiệp hội nhà nước, Tập đoàn tư nhân, Các doanh nghiệp vừa và nhỏ, chủ cửa hàng hay cá nhân có nhu cầu sử dụng dịch vụ marketing online đa kênh trên nền công nghệ hiện đại & đáp ứng theo từng đặc thù riêng của ngành nghề kinh doanh."
    },
    {
        title: "iMovn Slogan",
        icon: HiMiniRocketLaunch,
        text: "Ở đâu con người vui vẻ ở đó có phồn vinh"
    },
];

const stats = [
    { number: 1220, text: "quý khách hàng" },
    { number: 9, text: "năm kinh nghiệm" },
    { number: 14, text: "quý đối tác" },
    { number: 23, text: "cộng sự chính" }
];

// Define the background image path
const backgroundImageUrl = "/images/bg-khac-biet-imovn.jpg";

// Animation variants
const statsContainerVariant = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear'
        },
    },
};

const statsItemVariant = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8]
        }
    }
};

const Achievement = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Parallax
        strength={500} 
        bgImage={backgroundImageUrl}
        bgImageAlt="bg-imovn"
        className="parallax-wrapper"
        >
            <section className="py-16 bg-cover bg-center">
                <div className="container mx-auto md:flex block gap-10 items-center">
                    {/* Left */}
                    <motion.div 
                    variants={fadeIn('up', 0.1)}
                    initial = 'hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.2 }}
                    className="md:w-1/2 w-full pb-8"
                    >
                        <h2 className="pb-3 text-3xl font-secondary md:text-4xl mt-3 font-bold mb-2 text-primary">Sự Khác Biệt Của iMovn</h2>
                        <p className="mb-6 text-lg">
                            Với tiêu chí “Nhỏ gọn – An toàn, bảo mật – Đơn giản – Độc đáo“, iMovn luôn nỗ lực tạo ra những sản phẩm webapp hoàn thiện với hiệu quả tối ưu. Đến với chúng tôi, khách hàng sẽ luôn được cung cấp những dịch vụ tốt nhất!
                        </p>
                        <div>
                            {difference.map((item, index) => (
                                <div key={index} className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <item.icon className="text-2xl text-thirdary mr-2"/>
                                        <h4 className="text-2xl text-secondary font-semibold font-secondary">{item.title}</h4>
                                    </div>
                                    <p className="md:ml-10 text-lg">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Right */}
                    <div className="md:w-1/2 w-full">
                        <motion.div 
                            variants={statsContainerVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                            className="grid grid-cols-2 md:gap-10 gap-5"
                        >
                            {stats.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    variants={statsItemVariant}
                                    className="flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg"
                                >
                                    <div ref={ref} className="border border-accent/90 md:w-[140px] w-[110px] md:h-[140px] h-[110px] mx-auto rounded-full p-2 mb-3">
                                        <div className="border border-accent/30 w-full h-full flex flex-col items-center justify-center text-thirdary md:text-4xl text-2xl font-extrabold rounded-full bg-white">
                                            {isInView && (
                                                <CountUp start={0} end={item.number} duration={2} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold font-secondary capitalize  md:text-lg text-base text-primary">{item.text}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default Achievement;
