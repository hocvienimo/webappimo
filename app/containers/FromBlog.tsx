import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const recentBlog = [
    {
        id: "1",
        img: "/images/blog-01a.jpg",
        category: "Tips",
        date: "22 July 2024",
        title: "16 Ridiculously Easy Ways to Find & Keep a Remote Job",
        desc: "Distinctively reengineer revolutionary meta-services and premium architectures intuitive opportunities.",
        link: "/#",
    },
    {
        id: "2",
        img: "/images/blog-02a.jpg",
        category: "Recruiting",
        date: "29 July 2024",
        title: "How to 'Woo' a Recruiter and Land Your Dream Job",
        desc: "Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive.",
        link: "/#",
    },
    {
        id: "3",
        img: "/images/blog-03a.jpg",
        category: "Marketing",
        date: "10 July 2024",
        title: "11 Tips to Help You Get New Clients Through Cold Calling",
        desc: "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.",
        link: "/#",
    }
]


const FromBlog = () => {
  return (
    <section className='py-20'>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="titlerp">
                    <h4 className='md:text-4xl text-3xl font-semibold text-primary font-secondary pb-2'>Digital Blog</h4>
                    <div className="border-b-4 w-14 border-thirdary"></div>
                </div>
                <div className="btnrp">
                    <Link href="/kien-thuc-digital" className='bg-primary hover:bg-transparent hover:duration-500 text-white hover:text-primary py-1 px-5 rounded-full flex items-center gap-2'>Xem Thêm <span><FaArrowRightLong/></span></Link>
                </div>
            </div>
        </div>


        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {recentBlog.slice(0, 3).map((post) => (
                <div key={post.id} className="relative overflow-hidden rounded-lg group h-[480px]">
                    <Link href={post.link}>
                        <div className="relative w-full h-full">
                            <Image
                                src={post.img}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{objectFit:"cover"}}
                                quality={100}
                            />
                        </div>
                        <div className="absolute top-6 left-8 right-0 z-20">
                            <span className="px-4 py-1 bg-primary text-white text-[15px] font-semibold z-10 rounded-[5px]">{post.category}</span>
                        </div>
                        <div className="absolute bottom-5 left-0 right-0 p-4 text-white z-20">
                            <div className="duration-300 group-hover:-translate-y-24">
                                <span className="block text-xs">{post.date}</span>
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                            </div>
                            <div className="absolute inset-0 bottom-0 p-4 translate-y-full group-hover:-translate-y-4 z-20">
                                <p className="text-lg text-[rgba(255,255,255,.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">{post.desc}</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
                    </Link>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FromBlog