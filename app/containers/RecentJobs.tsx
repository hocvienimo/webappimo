"use client";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdBusiness } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBusinessCenter, MdAccessTime } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const recentJob = [
    {
        brand: "/images/company-logo-01.png",
        title: "Bilingual Event Support Specialist",
        info: {
            job: "Hexagon", local: "San Francissco", badge: "Verified Employer", time: "Full Time", update: "2 days ago"
        },
        link: "/#",
    },

    {
        brand: "/images/company-logo-05.png",
        title: "Competition Law Officer",
        info: {
            job: "Laxo", local: "San Francissco", time: "Full Time", update: "3 days ago"
        },
        link: "/#",
    },

    {
        brand: "/images/company-logo-02.png",
        title: "Barista and Cashier",
        info: {
            job: "Coffee", local: "San Francissco", badge:"Verified Employer", time: "Full Time", update: "4 days ago"
        },
        link: "/#",
    },

    {
        brand: "/images/company-logo-03.png",
        title: "Restaurant General Manager",
        info: {
            job: "King", local: "San Francissco", time: "Full Time", update: "5 days ago"
        },
        link: "/#",
    },
]

const RecentJobs = () => {
  return (
    <section className='py-20'>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="titlerp">
                    <h4 className='text-2xl font-medium'>Recent Jobs</h4>
                    <div className="border-b-2 w-14 border-primary"></div>
                </div>
                <div className="btnrp">
                    <button className='bg-primary hover:bg-transparent hover:duration-500 text-white hover:text-primary py-1 px-5 rounded-full flex items-center gap-2'>Browse All Jobs <span><FaArrowRightLong/></span></button>
                </div>
            </div>
        </div>

        <div className="container mt-10">
            {recentJob.map((job, index) => (
                <Link href={job.link} key={index} >
                    <div className="shadow-job md:flex flex-row items-center justify-between mb-8 px-9 py-7 rounded-md">
                        <Image src={job.brand} alt={`${job.title} logo-brand`} width={50} height={50} style={{ width:'auto' }} className="rounded-full object-cover mr-8 hidden md:flex" />
                        <div className="info-job flex-1">
                            <h5 className="text-xl font-semibold mb-1">{job.title}</h5>
                            <ul className="itemif flex-1 md:flex gap-5">
                                <li className="text-[#777] mb-1 flex items-center gap-1"><IoMdBusiness/>{job.info.job} 
                                    {job.info.badge && (
                                        <>
                                            <span data-tooltip-id={`tooltip-${index}`} data-tooltip-content={job.info.badge} className="text-4xl text-[#38b653]">
                                                <GoDotFill/>
                                            </span>
                                            <Tooltip id={`tooltip-${index}`} />
                                        </>
                                    )}
                                </li>
                                <li className="text-[#777] mb-1 flex items-center gap-1"><CiLocationOn/>{job.info.local}</li>
                                <li className="text-[#777] mb-1 flex items-center gap-1"><MdOutlineBusinessCenter/>{job.info.time}</li>
                                <li className="text-[#777] flex items-center gap-1"><MdAccessTime/>{job.info.update}</li>
                            </ul>
                        </div>
                        <button className="bg-[#f0f0f0] hover:bg-primary hover:duration-300 rounded-full text-[#666] hover:text-white px-6 py-1 w-full md:w-auto mt-3 md:mt-0">Apply Now</button>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default RecentJobs