"use client";
import CountUp from 'react-countup';
import { FaBriefcase } from 'react-icons/fa';

const statsJob = [
  { number: 2369, text: "Jobs Posted" },
  { number: 1214, text: "Tasks Posted" },
  { number: 3963, text: "Freelancers" },
];

const VideoHero = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      <video autoPlay loop muted className="object-cover w-full h-[670px]">
      <source src="/images/home-video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[#333] bg-opacity-75"></div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full px-4">
          <div className="w-full max-w-screen-lg mx-auto p-4">
            <div className="title-hero mb-9">
              <h4 className="md:text-4xl text-3xl mb-1 font-bold text-white">Find Your Next Job</h4>
              <p className='text-[#888] md:text-2xl text-xl'>Find the best jobs in the digital industry</p>
            </div>
          
            <form className="flex flex-col md:flex-row items-start md:items-center md:gap-4 px-3 bg-transparent md:bg-white shadow-md rounded-full w-full max-w-screen-lg">
              <div className="relative flex-1 py-3">
                <input
                  type="text"
                  placeholder="Online Job"
                  className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="text-gray-400" />
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-l border-[#e4e4e4] self-stretch"></div>

              <div className="flex-1 py-3">
                <input
                  type="text"
                  placeholder="Job Title or Keyword"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                />
              </div>

              <button
                type="submit"
                className="px-12 py-3 mt-3 md:mt-0 text-white bg-primary rounded-full hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Search
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
                ))};
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoHero