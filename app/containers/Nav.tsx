"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";

const Nav = ({ isScrolled }) => {
  const [menuData, setMenuData] = useState([]);
  const pathname = usePathname();

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null); // Reset error state
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}menu`, {
          cache: "no-store",
        }); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle HTTP errors
        }
        const result = await response.json();
        // console.log('Data fetched successfully:', result);
        setMenuData(result.data); // Set the fetched data
      } catch (error: any) {
        setError(error.message); // Set error message
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData(); // Call the function
  }, []);

  return (
    <nav className="relative z-30 flex gap-8 bg-transparent">
      <ul className="relative flex space-x-8">
        {menuData &&
          menuData.map((item: any, index) => {
            const isActive = item.path === pathname;
            return (
              <li key={index} className="relative group">
                <Link
                  href={item.path}
                  className={`${
                    isActive
                      ? "text-[#64DBEA]"
                      : isScrolled
                      ? "text-[#666]"
                      : "text-white"
                  } text-base font-bold py-4 flex items-center group-hover:text-secondary`}
                >
                  {item.name}
                  {item.children && (
                    <FaCaretDown
                      className={`ml-1 p-[2px] text-[20px] rounded ${
                        isActive
                          ? "bg-primary text-white"
                          : isScrolled
                          ? "bg-transparent"
                          : "bg-[rgba(255,255,255,.15)]"
                      } group-hover:bg-primary group-hover:text-white`}
                    />
                  )}
                </Link>
                {/* Render submenu nếu có */}
                {item.children && Array.isArray(item.children) && (
                  <ul className="hidden group-hover:block absolute left-0 top-14 py-3 bg-white border-t-2 border-secondary shadow-lg rounded-md w-[250px]">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.path}
                          className={`block px-4 text-[15px] ${
                            subItem.path === pathname ? "text-primary" : ""
                          } hover:text-secondary text-[#aaa] transition-all`}
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
};

export default Nav;
