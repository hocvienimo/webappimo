"use client";
import Logo from "@/public/images/logo2.png";
import ScrolledLogo from "@/public/images/logo.png";
import Nav from './Nav'
import Link from "next/link";
import Image from "next/image";
import Notification from "./Notification";
import UserNotifi from "./UserNotifi";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`py-3 fixed transition-all top-0 left-0 w-full z-10 border-b border-[rgba(255,255,255,.2)] ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>

        <div className="container mx-auto flex items-center justify-between">
            <div className="g-left flex items-center">
                {/* logo */}
                <div id="logo" className="md:pr-32 pr-20">
                    <Link href="/">
                        <Image 
                            src={isScrolled ? ScrolledLogo : Logo}
                            alt="logo"
                            priority
                            className="w-40"
                        />
                    </Link>
                </div>
                {/* desktop Nav */}
                <div className="mainMenu hidden xl:flex">
                <Nav isScrolled={isScrolled} />
                </div>
            </div>

            <div className="g-right flex items-center justify-between gap-8">
                <div className="notifications hidden xl:flex flex">
                    <Notification isScrolled={isScrolled}/>
                </div>
                <div className="usernotifi flex">
                    <UserNotifi/>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileMenu isScrolled={isScrolled}/>
                </div>
            </div>
        
        </div>
    </header>
  )
}

export default Header