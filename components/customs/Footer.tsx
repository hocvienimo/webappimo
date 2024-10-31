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
          label: "730/126 Lê Đức Thọ, Phường 15, Quận Gò Vấp, TP.HCM",
          icon: FaMapMarkerAlt,
        },
        {
          href: "#",
          title: "Phòng DevWeb:",
          label: "766/1 Đ. Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM",
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
    <footer className="overflow-hidden w-full h-full relative bg-primary border-t-2 border-secondary rounded-t-3xl">
      <div className="py-14">
        <div className="container px-4 mx-auto relative">
          <div className="lg:flex gap-8">
            <div className="lg:w-4/12 mb-10 lg:mb-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="imo-vn"
                  priority
                  className="w-36 md:w-48"
                />
              </Link>
              <p className="mt-4 text-gray-300">{contentFooter.description}</p>
            </div>
            <div className="lg:w-8/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[20%_40%_40%] gap-5">
                {contentFooter.footerLinks.map((item) => (
                  <div className="mb-10 lg:mb-0" key={item.heading}>
                    <h5 className="text-white font-secondary font-extrabold text-xl mb-3">
                      {item.heading}
                    </h5>
                    <ul className="list-none">
                      {item.links.map((link) => (
                        <li key={link.label} className="mb-2">
                          <Link
                            href={link.href}
                            className="text-gray-300 duration-300 ease-in-out transition-all hover:text-[#FF7431]"
                          >
                            <span>{link.label}</span>
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

      <div className="bg-secondary py-0 pb-2">
        <div className="copyright container pt-3">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center justify-center">
            <div className="left_cpr">
              <p className="text-[13px] leading-5 text-white">
                © Copyright 2016 iMovn.
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
                    className="w-[45px] h-[45px]"
                  />
                </li>
                <li>
                  <Image
                    src={contentFooter.copyright.img_2}
                    alt="copyright-imovn"
                    width={45}
                    height={45}
                    className="w-[45px] h-[45px]"
                  />
                </li>
                <li>
                  <Image
                    src={contentFooter.copyright.img_3}
                    alt="copyright-imovn"
                    width={45}
                    height={45}
                    className="w-[45px] h-[45px]"
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
