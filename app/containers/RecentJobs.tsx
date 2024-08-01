import { FaArrowRightLong } from "react-icons/fa6";

const recentJob = [
    {
        brand: "/images/company-logo-01.png",
        title: "Bilingual Event Support Specialist",
        info: {
            job: "Hexagon", local: "San Francissco", time: "Full Time", update: "2 days ago"
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
            job: "Coffee", local: "San Francissco", time: "Full Time", update: "4 days ago"
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
                    <h4 className='text-3xl font-medium'>Recent Jobs</h4>
                    <div className="border-b-2 w-14 border-primary"></div>
                </div>
                <div className="btnrp">
                    <button className='bg-primary hover:bg-transparent hover:duration-500 text-white hover:text-primary py-1 px-5 rounded-full flex items-center gap-2'>Browse All Jobs <span><FaArrowRightLong/></span></button>
                </div>
            </div>
        </div>

        <div className="container mt-10">
            {recentJob.map((job, index) => (
                <div key={index} className="flex items-start mb-8 border-b border-gray-200 pb-4">
                    <img src={job.brand} alt={`${job.title} logo`} className="w-16 h-16 object-cover mr-4" />
                    <div className="flex-1">
                        <h5 className="text-xl font-semibold mb-2">{job.title}</h5>
                        <p className="text-gray-600 mb-1">{job.info.job}</p>
                        <p className="text-gray-600 mb-1">{job.info.local}</p>
                        <p className="text-gray-600 mb-1">{job.info.time}</p>
                        <p className="text-gray-600">{job.info.update}</p>
                        <a href={job.link} className="text-primary mt-2 inline-block">Apply Now</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentJobs