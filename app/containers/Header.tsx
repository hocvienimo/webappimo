"use client";
import Logo from "@/public/images/imovn-brand-name.png";
import ScrolledLogo from "@/public/images/imo-vn-brand-name.png";
import Nav from './Nav'
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // Lấy đường dẫn hiện tại

    useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };

      handleScroll(); // Initialize state based on current scroll position

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const isHomePage = pathname === "/"; // Kiểm tra xem có phải là trang chủ không

  return (
    <header className={`py-2 fixed transition-all top-0 left-0 w-full z-50 border-b border-[rgba(255,255,255,.2)] ${isHomePage ? (isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white') : 'bg-white text-black shadow-md'}`}>

        <div className="container mx-auto flex items-center justify-between">
            <div className="g-left flex items-center">
                {/* logo */}
                <div id="logo" className="md:pr-32 pr-20">
                    <Link href="/">
                        <Image 
                            src={isScrolled || !isHomePage ? ScrolledLogo : Logo}
                            alt="logo"
                            width={140}
                            height={0}
                        />
                    </Link>
                </div>
                
            </div>

            <div className="g-right flex items-center justify-between gap-8">
                {/* desktop Nav */}
                <div className="mainMenu hidden xl:flex">
                <Nav isScrolled={isScrolled || !isHomePage} />
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileMenu isScrolled={isScrolled || !isHomePage}/>
                </div>
            </div>
        
        </div>
    </header>
  )
}

export default Header