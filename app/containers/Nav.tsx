"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCaretDown } from "react-icons/fa";

const mainMenu = {
    home: {
      name: "Home",
      slug: "/",
      sub: [
        { name: "Home 1", slug: "/home-1" },
        { name: "Home 2", slug: "/home-2" },
        { name: "Home 3", slug: "/home-3" },
      ],
    },
    findWork: {
      name: "Find Work",
      slug: "/findwork",
      sub: [
        { name: "Browse Jobs", slug: "/findwork/browsejobs" },
        { name: "Browse Tasks", slug: "/findwork/browsetasks" },
        { name: "Browse Companies", slug: "/findwork/browsecompanies" },
        { name: "Job Page", slug: "/findwork/jobpage" },
        { name: "Task Page", slug: "/findwork/taskpage" },
        { name: "Company Profile", slug: "/findwork/companyprofile" },
      ],
    },
    forEmployers: {
      name: "For Employers",
      slug: "/foremployers",
      sub: [
        { name: "Find a Freelancer", slug: "/foremployers/findafreelancer" },
        { name: "Freelancer Profile", slug: "/foremployers/freelancerprofile" },
        { name: "Post a Job", slug: "/foremployers/postajob" },
        { name: "Post a Task", slug: "/foremployers/postatask" },
      ],
    },
    dashboard: {
      name: "Dashboard",
      slug: "/dashboard",
      sub: [
        { name: "Dashboard", slug: "/dashboard" },
        { name: "Messages", slug: "/dashboard/messages" },
        { name: "Bookmarks", slug: "/dashboard/bookmarks" },
        { name: "Reviews", slug: "/dashboard/reviews" },
        { name: "Jobs", slug: "/dashboard/jobs" },
        { name: "Tasks", slug: "/dashboard/tasks" },
        { name: "Setting", slug: "/dashboard/setting" },
      ],
    },
    pages: {
      name: "Pages",
      slug: "/#",
      sub: [
        { name: "Open Street Map", slug: "/openstreetmap" },
        { name: "Blog", slug: "/blog" },
        { name: "Pricing Plans", slug: "/pricingplans" },
        { name: "Checkout Page", slug: "/checkout" },
        { name: "Invoice Template", slug: "/invoice" },
        { name: "Login & Register", slug: "/loginregister" },
        { name: "404 Page", slug: "/404" },
        { name: "Contact", slug: "/contact" },
      ],
    },
  };

const Nav = () => {
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
                            className={`${isActive ? "text-primary" : "text-white"} text-base py-4 flex items-center group-hover:text-primary`}
                        >
                            {item.name}
                            {item.sub && (
                                <FaCaretDown className={`ml-1 p-[2px] text-[20px] rounded ${isActive ? "bg-primary text-white" : "bg-[rgba(255,255,255,.15)]"} text-[rgba(255,255,255,.8)] group-hover:bg-primary group-hover:text-white`} />
                            )}
                        </Link>
                        {item.sub && (
                            <ul className="hidden group-hover:block absolute left-0 top-14 py-3 bg-white shadow-lg rounded-md w-56">
                            {item.sub.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                <Link
                                    href={subItem.slug}
                                    className={`block px-4 text-[15px] ${subItem.slug === pathname ? "text-primary" : ""} hover:text-primary text-[#aaa] transition-all`}
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