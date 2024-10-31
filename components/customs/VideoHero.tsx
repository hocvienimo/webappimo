"use client";
import CountUp from 'react-countup';
import { FaFirstOrderAlt } from 'react-icons/fa';

const statsJob = [
  { number: 1390, text: "Khách Hàng" },
  { number: 1039, text: "Dự Án" },
  { number: 23, text: "Thành Viên" },
];

const VideoHero = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      <video autoPlay loop muted className="object-cover w-full md:h-[670px] h-[450px]">
      <source src="/images/home-video-background.mp4" type="video/mp4" />
        
      </video>
      <div className="absolute inset-0 bg-[#333] bg-opacity-75"></div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full px-4 mt-16">
          <div className="w-full max-w-screen-lg mx-auto p-4">
            <div className="title-hero mb-9 md:w-3/4">
              <h4 className="md:text-4xl text-3xl mb-1 font-bold text-white">Giải Pháp Marketing Online Toàn Diện</h4>
              <p className='text-[#adadad] md:text-lg text-lg'>iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Web, Lập Trình App Mobile và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam. </p>
            </div>
          
            <form className=" flex-col md:flex-row hidden md:flex items-start md:items-center md:gap-4 px-3 bg-transparent md:bg-white md:shadow-md rounded-full w-full max-w-screen-lg">
              <div className="relative flex-1 py-3">
                <input
                  type="text"
                  placeholder="Tên Quý khách"
                  className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFirstOrderAlt className="text-[#FAA45D]" />
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-l border-[#e4e4e4] self-stretch"></div>

              <div className="flex-1 py-3">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                />
              </div>

              <button
                type="submit"
                className="px-12 py-3 mt-3 md:mt-0 text-white bg-primary rounded-full hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Đặt Lịch Hẹn
              </button>
            </form>

             {/* CountUpStats */}
            <div className="mt-8 flex gap-8 hidden md:flex">
                {statsJob.map((stat, index) => (
                  <div key={index} className="relative flex items-center">
                    {index !== 0 && (
                      <div className="absolute inset-y-3 -left-3 border-r border-[rgba(255,255,255,.25)] font-bold"></div>
                    )}
                    <div className="px-4 py-2">
                      <div className="text-3xl text-white">
                        <CountUp end={stat.number} duration={2} />
                      </div>
                      <p className="mt-2 text-[rgba(255,255,255,.7)] text-lg">{stat.text}</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoHero