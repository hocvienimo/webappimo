import Image from "next/image";
import MyBreadcrumb from "./MyBreadcrumb";

interface NavHeaderProps {
  heading?: {
    h1?: {
      title: string;
    };
  };
  crumbs: Array<{ href: string; label: string }>;
}

const NavHeader: React.FC<NavHeaderProps> = ({ heading = {}, crumbs }) => {
  return (
    <section className="relative w-full h-28 pt-6 z-10">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/bg-header-imovn.jpg"
          alt="Banner Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        {/* Overlay lớp phủ mờ */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container relative z-10">
        <h1 className="md:text-3xl text-2xl mb-1 text-white font-secondary font-bold">
          {heading?.h1?.title || "Trang 404"}
        </h1>
        <MyBreadcrumb crumbs={crumbs} />
      </div>
    </section>
  );
};

export default NavHeader;
