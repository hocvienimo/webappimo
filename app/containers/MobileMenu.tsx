"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiAlignRight, FiChevronLeft, FiChevronRight  } from "react-icons/fi";

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
        { name: "Find a Freelancer", slug: "/foremployers/findafreelancer"},
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
        { name: "Contact", slug: "/#a" },
      ],
    },
    Test: {
        name: "Test",
        slug: "/#",
    },
  };

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('main');
    const [submenu, setSubmenu] = useState([]);
    const [menuHistory, setMenuHistory] = useState([]);
    const [parentName, setParentName] = useState('');
  
    const menuRef = useRef(null);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setCurrentMenu('main');
      setMenuHistory([]);
      setParentName('');
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setCurrentMenu('main');
        setMenuHistory([]);
        setParentName('');
      }
    };
  
    const handleSubmenu = (subMenuItems, parentName) => {
      setMenuHistory([...menuHistory, { name: parentName, menu: currentMenu }]);
      setSubmenu(subMenuItems);
      setCurrentMenu('sub');
      setParentName(parentName);
    };
  
    const handleBack = () => {
      const prevMenu = menuHistory.pop();
      setCurrentMenu(prevMenu.menu);
      setMenuHistory(menuHistory);
      setParentName(menuHistory.length > 0 ? menuHistory[menuHistory.length - 1].name : '');
    };

    const handleMenuClick = (subMenuItems, slug, parentName) => {
        if (subMenuItems) {
          handleSubmenu(subMenuItems, parentName);
        } else {
          // Navigate to the link if no submenu
          window.location.href = slug;
        }
      };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuHistory]);

  return (
<div className="relative">
      {/* Menu Icon */}
      <div onClick={toggleMenu} className="cursor-pointer p-2">
        <FiAlignRight className="h-7 w-7 text-white" />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h4 
            className="text-xl font-bold mb-4 cursor-pointer flex items-center justify-center"
            onClick={currentMenu === 'sub' ? handleBack : null}
            >
                {currentMenu === 'sub' && <FiChevronLeft className='absolute left-0 ml-3'/>}
                {currentMenu === 'main' ? 'Menu' : parentName}
          </h4>
          {currentMenu === 'main' && (
            <ul>
              {Object.keys(mainMenu).map((key) => (
                <li key={key} className="mb-2">
                  <div
                    onClick={() => handleMenuClick(mainMenu[key].sub, mainMenu[key].slug, mainMenu[key].name)}
                    className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center justify-between"
                  >
                    {mainMenu[key].name}
                    {mainMenu[key].sub && <FiChevronRight />}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {currentMenu === 'sub' && (
            <div>
              <ul>
                {submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="mb-2">
                    <Link href={subItem.slug} className="text-gray-600 hover:text-gray-800">
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
