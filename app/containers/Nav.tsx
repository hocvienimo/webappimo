"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCaretDown } from "react-icons/fa";
import { mainMenu } from '../components/mainMenuData';

const Nav = ({ isScrolled }) => {
    const pathname = usePathname();
    return (
        <nav className="relative z-30 flex gap-8 bg-transparent">
            <ul className="relative flex space-x-8">
                {Object.keys(mainMenu).map((key) => {
                    const item = mainMenu[key];
                    const isActive = item.slug === pathname;
                    return (
                        <li key={key} className="relative group">
                        <Link
                            href={item.slug}
                            className={`${isActive ? "text-[#64DBEA]" : isScrolled ? "text-[#666]" : "text-white"} text-base font-bold py-4 flex items-center group-hover:text-secondary`}
                        >
                            {item.name}
                            {item.sub && (
                                <FaCaretDown className={`ml-1 p-[2px] text-[20px] rounded ${isActive ? "bg-primary text-white" : isScrolled ? "bg-transparent" : "bg-[rgba(255,255,255,.15)]"} group-hover:bg-primary group-hover:text-white`} />
                            )}
                        </Link>
                        {item.sub && (
                            <ul className="hidden group-hover:block absolute left-0 top-14 py-3 bg-white border-t-2 border-secondary shadow-lg rounded-md w-[250px]">
                            {item.sub.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                <Link
                                    href={subItem.slug}
                                    className={`block px-4 text-[15px] ${subItem.slug === pathname ? "text-primary" : ""} hover:text-secondary text-[#aaa] transition-all`}
                                >
                                    {subItem.name}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav