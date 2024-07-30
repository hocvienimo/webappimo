"use client";
import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";


const Notification = () => {
  const [showBellDropdown, setShowBellDropdown] = useState(false);
  const [showMailDropdown, setShowMailDropdown] = useState(false);
  const [notifications, setNotifications] = useState([
    'Notification 1',
    'Notification 2',
    'Notification 3',
    'Notification 4',
  ]);
  const [mails, setMails] = useState([
    'Mail 1',
    'Mail 2',
    'Mail 3',
  ]);

  const bellDropdownRef = useRef(null);
  const mailDropdownRef = useRef(null);

  const toggleBellDropdown = () => {
    setShowBellDropdown(!showBellDropdown);
    setShowMailDropdown(false);
  };

  const toggleMailDropdown = () => {
    setShowMailDropdown(!showMailDropdown);
    setShowBellDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (bellDropdownRef.current && !bellDropdownRef.current.contains(event.target)) {
      setShowBellDropdown(false);
    }
    if (mailDropdownRef.current && !mailDropdownRef.current.contains(event.target)) {
      setShowMailDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex inline-flex space-x-7">
      {/* Bell Icon */}
      <div className="relative" ref={bellDropdownRef}>
        <div onClick={toggleBellDropdown} className="relative cursor-pointer">
          <HiOutlineBell className="h-6 w-6 text-white mt-2" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-primary rounded-full">
              {notifications.length}
            </span>
          )}
        </div>

        {showBellDropdown && (
          <div className="absolute -right-9 mt-4 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1 header-notifications-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {notifications.map((notification, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {notification}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mail Icon */}
      <div className="relative" ref={mailDropdownRef}>
        <div onClick={toggleMailDropdown} className="relative cursor-pointer">
          <HiOutlineEnvelope className="h-6 w-6 text-white mt-2" />
          {mails.length > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-primary rounded-full">
              {mails.length}
            </span>
          )}
        </div>

        {showMailDropdown && (
          <div className="absolute -right-9 mt-4 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1 header-notifications-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {mails.map((mail, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {mail}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification