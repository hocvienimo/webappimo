"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiAlignRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isScrolled: boolean; // Định nghĩa kiểu cho isScrolled
};

// Định nghĩa kiểu cho một mục trong menu
interface MenuItem {
  id: string;
  name: string;
  path: string;
  children?: MenuItem[]; // Các mục con có thể có
}

// Định nghĩa kiểu cho lịch sử menu
interface MenuHistoryItem {
  name: string;
  menu: "main" | "sub"; // Chỉ định kiểu cho menu
}

const MobileMenu = ({ isScrolled }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState<MenuItem[]>([]); // Sử dụng kiểu cho menuData
  const [currentMenu, setCurrentMenu] = useState<"main" | "sub">("main"); // Chỉ định kiểu cho currentMenu
  const [submenu, setSubmenu] = useState<MenuItem[]>([]); // Sử dụng kiểu cho submenu
  const [menuHistory, setMenuHistory] = useState<MenuHistoryItem[]>([]); // Sử dụng kiểu cho menuHistory
  const [parentName, setParentName] = useState<string>(""); // Chỉ định kiểu cho parentName

  const pathname = usePathname(); // Sử dụng để kiểm tra đường dẫn hiện tại nếu cần
  const menuRef = useRef<HTMLDivElement | null>(null); // Chỉ định kiểu cho menuRef

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setCurrentMenu("main");
    setMenuHistory([]);
    setParentName("");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
      setCurrentMenu("main");
      setMenuHistory([]);
      setParentName("");
    }
  };

  const handleSubmenu = (subMenuItems: MenuItem[], parentName: string) => {
    setMenuHistory([...menuHistory, { name: parentName, menu: currentMenu }]);
    setSubmenu(subMenuItems);
    setCurrentMenu("sub");
    setParentName(parentName);
  };

  const handleBack = () => {
    const prevMenu = menuHistory.pop();
    if (prevMenu) {
      // Kiểm tra nếu prevMenu có giá trị
      setCurrentMenu(prevMenu.menu);
      setMenuHistory(menuHistory);
      setParentName(
        menuHistory.length > 0 ? menuHistory[menuHistory.length - 1].name : ""
      );
    }
  };

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}menu`, {
          cache: "force-cache",
        });
        if (!res.ok) {
          throw new Error("Network response was not ok"); // Handle HTTP errors
        }
        const result = await res.json();
        setMenuData(result.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenuData();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuHistory]);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <div onClick={toggleMenu} className="cursor-pointer p-2">
        <FiAlignRight
          className={`h-7 w-7 ${isScrolled ? "text-[#4b4b4b]" : "text-white"}`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h4
            className="text-xl font-bold mb-4 cursor-pointer flex items-center justify-center text-primary"
            onClick={currentMenu === "sub" ? handleBack : undefined}
          >
            {currentMenu === "sub" && (
              <FiChevronLeft className="absolute left-0 ml-3" />
            )}
            {currentMenu === "main" ? "Menu" : parentName}
          </h4>
          {currentMenu === "main" && (
            <ul>
              {menuData.map((menuItem) => (
                <li key={menuItem.id} className="mb-2">
                  {menuItem.children ? (
                    <div className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center justify-between">
                      <Link
                        href={menuItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-gray-700 hover:text-gray-900 flex-grow ${
                          pathname === menuItem.path ? "text-thirdary" : ""
                        }`}
                      >
                        {menuItem.name}
                      </Link>
                      <FiChevronRight
                        onClick={() => {
                          if (menuItem.children) {
                            // Kiểm tra children có phải là undefined không
                            handleSubmenu(menuItem.children, menuItem.name);
                          }
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                  ) : (
                    <Link
                      href={menuItem.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-gray-700 hover:text-gray-900 flex items-center justify-between ${
                        pathname === menuItem.path ? "text-thirdary" : ""
                      }`}
                    >
                      {menuItem.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
          {currentMenu === "sub" && (
            <div>
              <ul>
                {submenu.map((subItem) => (
                  <li key={subItem.id} className="mb-2">
                    <Link
                      href={subItem.path}
                      onClick={() => {
                        console.log("subItem.path", subItem.path);
                        setIsMenuOpen(false);
                      }}
                      className={`text-gray-600 hover:text-gray-800 ${
                        pathname === `/${subItem.path}` ? "text-thirdary" : ""
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
