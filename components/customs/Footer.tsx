import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Logo from "@/public/images/imovn-brand-name.png";

const contentFooter = {
  description:
    "Công ty iMovn là doanh nghiệp hoạt động trong lĩnh vực Marketing Online tại Việt Nam & thị trường ngoài nước. Với tiêu chí “Chất lượng hơn số lượng”, iMovn luôn nỗ lực tạo ra những sản phẩm phần mềm hoàn thiện với hiệu quả tối ưu. Đến với iMovn, khách hàng sẽ luôn được cung cấp những dịch vụ tốt nhất!",
  footerLinks: [
    {
      heading: "Về Chúng Tôi",
      links: [
        {
          href: "#",
          label: "Giới thiệu",
        },
        {
          href: "#",
          label: "Dịch Vụ",
        },
        {
          href: "#",
          label: "Blog kiến thức",
        },
        {
          href: "#",
          label: "Video Digi",
        },
        {
          href: "#",
          label: "Liên hệ",
        },
      ],
    },

    {
      heading: "Dịch Vụ",
      links: [
        {
          href: "#",
          label: "Thiết kế website theo yêu cầu",
        },
        {
          href: "#",
          label: "Thiết kế App Mobile theo yêu cầu",
        },
        {
          href: "#",
          label: "SEO tổng thể mũ trắng",
        },
        {
          href: "#",
          label: "Thiết kế landing page theo yêu cầu",
        },
        {
          href: "#",
          label: "Phòng marketing online thuê ngoài",
        },
        {
          href: "#",
          label: "Content chuẩn SEO",
        },
        {
          href: "#",
          label: "System Backlink Entity SEO",
        },
      ],
    },

    {
      heading: "Kết nối iMovn",
      links: [
        {
          href: "#",
          title: "Văn Phòng:",
          label: "730/126 Lê Đức Thọ, P15, Gò Vấp, TP.HCM",
          icon: FaMapMarkerAlt,
        },
        {
          href: "#",
          title: "Phòng DevWeb:",
          label: "766/1 Đ. Sư Vạn Hạnh, P12, Q10, TP.HCM",
          icon: FaMapMarkerAlt,
        },
        {
          href: "#",
          title: "Phòng DevApp:",
          label: "183/22 Đ. Số 28, P6, Gò Vấp, TP.HCM",
          icon: FaMapMarkerAlt,
        },
        {
          href: "#",
          title: "Hotmail:",
          label: "info@imo.com.vn",
          icon: IoMdMailUnread,
        },
        {
          href: "#",
          title: "Hotline 01:",
          label: "0902 226 119",
          icon: FaPhoneSquareAlt,
        },
        {
          href: "#",
          title: "Hotline 01:",
          label: "0902 262682",
          icon: FaPhoneSquareAlt,
        },
      ],
    },
  ],
  copyright: {
    img_1: "/images/fingerprints.png",
    img_2: "/images/trangvang.png",
    img_3: "/images/dmca.png",
  },
};

const Footer = () => {
  return (
    <footer className="overflow-hidden relative w-full h-full border-t-4 border-thirdary rounded-t-3xl">
      <div className="relative inset-0 z-0 w-full md:h-[320px] h-[1240px]">
        <Image
          src="/images/bg-header-imovn.jpg"
          alt="ft-imovn"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>
      <div className="absolute inset-0 z-10 pt-8">
        <div className="container px-3 mx-auto relative">
          <div className="lg:flex gap-8 mx-auto">
            <div className="lg:w-4/12 mb-10 lg:mb-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="imo-vn"
                  priority
                  className="w-36 md:w-40"
                />
              </Link>
              <p className="mt-4 text-base text-gray-300 text-justify">
                {contentFooter.description}
              </p>
            </div>
            <div className="lg:w-8/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[20%_36%_44%] md:gap-5 gap-0">
                {contentFooter.footerLinks.map((item) => (
                  <div className="mb-10 lg:mb-0" key={item.heading}>
                    <h5 className="text-white font-secondary font-extrabold text-lg mb-3">
                      {item.heading}
                    </h5>
                    <ul className="list-none">
                      {item.links.map((link) => (
                        <li key={link.label} className="mb-0">
                          <Link
                            href={link.href}
                            className="text-gray-300 text-base duration-300 ease-in-out transition-all hover:text-[#FF7431]"
                          >
                            <span className="text-base">{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-secondary py-0 pb-2 z-10">
        <div className="copyright md:block flex md:justify-between justify-center container pt-3">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center justify-center">
            <div className="left_cpr md:text-left text-center">
              <p className="text-[13px] leading-5 text-white">
                © Copyright 2016 - Công Ty TNHH iMovn #GCN_DKT: 0317771548
              </p>
            </div>

            <div className="right_cpr">
              <ul className="list-none flex items-center lg:justify-end justify-center gap-2">
                <li>
                  <Image
                    src={contentFooter.copyright.img_1}
                    alt="copyright-imovn"
                    width={45}
                    height={45}
                    className="w-[35px] h-[35px]"
                  />
                </li>
                <li>
                  <Link
                    href="https://trangvangtructuyen.vn/cong-ty-tnhh-imo-vn.html"
                    rel="nofollow"
                    target="_blank"
                  >
                    <Image
                      src={contentFooter.copyright.img_2}
                      alt="copyright-imovn"
                      width={45}
                      height={45}
                      className="w-[35px] h-[35px]"
                    />
                  </Link>
                </li>
                <li>
                  <Image
                    src={contentFooter.copyright.img_3}
                    alt="copyright-imovn"
                    width={45}
                    height={45}
                    className="w-[35px] h-[35px]"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
