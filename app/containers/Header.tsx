
import Logo from "@/public/images/logo2.png";
import Nav from './Nav'
import Link from "next/link";
import Image from "next/image";
import Notification from "./Notification";
import UserNotifi from "./UserNotifi";


const Header = () => {
  return (
    <header className="py-3 fixed top-0 left-0 w-full z-10 border-b border-[rgba(255,255,255,.2)]">
        <div className="container mx-auto flex items-center justify-between">
            <div className="g-left flex items-center">
                {/* logo */}
                <div id="logo" className="pr-32">
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt="logo"
                            priority
                            className="w-40"
                        />
                    </Link>
                </div>
                {/* desktop Nav */}
                <div className="mainMenu hidden xl:flex">
                <Nav/>
                </div>
            </div>

            <div className="g-right flex items-center justify-between gap-8">
                <div className="notifications hidden xl:flex flex">
                    <Notification/>
                </div>
                <div className="usernotifi flex">
                    <UserNotifi/>
                </div>
            </div>
        
        </div>
    </header>
  )
}

export default Header