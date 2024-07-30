"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Avatar from "@/public/images/user-avatar-small-01.jpg";

const UserNotifi = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userDropdownRef = useRef(null);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleClickOutside = (event) => {
    if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
      setShowUserDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={userDropdownRef}>
      <div onClick={toggleUserDropdown} className="relative cursor-pointer">
        <Image src={Avatar} alt="User Avatar" width={42} height={42} className="rounded-full" />
        <span
          className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${
            isOnline ? 'bg-green-400' : 'bg-gray-400'
          }`}
        ></span>
      </div>

      {showUserDropdown && (
        <div className="absolute -right-8 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 header-notifications-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserNotifi