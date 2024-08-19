import Image from "next/image";
import MyBreadcrumb from "./MyBreadcrumb";

const NavHeader = ({heading,crumbs}) => {
    return (
      <section className="relative w-full h-28 pt-6">
        <Image
            src="/images/bg-header-imovn.jpg"
            alt="Banner Image"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="z-[-1]"
        />
        <div className="container">
            <h1 className="h1 text-2xl mb-0 text-white font-secondary font-bold">{heading.h1.title}</h1>
            <MyBreadcrumb crumbs={crumbs} />
        </div>
      </section>
    )
  }
  
export default NavHeader