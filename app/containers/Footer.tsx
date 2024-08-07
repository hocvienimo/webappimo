"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FiMail,FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const itemFooter = {
  footer1: [
    {title: "For Candidates"},
    {name: "Browse Jobs", link:"/#"},
    {name: "Add Resume", link:"/#"},
    {name: "Job Alerts", link:"/#"},
    {name: "My Bookmarks", link:"/#"}
  ] ,
  footer2: [
    {title: "For Employers"},
    {name: "Browse Candidates", link:"/#"},
    {name: "Post a Job", link:"/#"},
    {name: "Post a Task", link:"/#"},
    {name: "Plans & Pricing", link:"/#"}
  ] ,
  footer3: [
    {title: "Helpful Links"},
    {name: "Contact", link:"/#"},
    {name: "Privacy Policy", link:"/#"},
    {name: "Terms of Use", link:"/#"}
  ] ,
  footer4: [
    {title: "Account"},
    {name: "Log In", link:"/#"},
    {name: "My Account", link:"/#"},
  ] ,
} 

const Footer = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
<footer className="relative text-white h-[500px] w-full">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hossain.gif"
          alt="Footer Background"
          fill
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container relative z-10 pt-14 footer-background">
        <div className="flex flex-col md:flex-row justify-between items-center md:mb-8 mb-5">
          <div className="flex items-center mb-0 md:mb-0 w-[180px] h-[50px] relative">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style = {{ objectFit:"contain" }}
            />
          </div>
          <div className="md:flex md:ml-auto items-center mt-4 md:mt-0 gap-11">
            <div className="flex social-icons">
              <a href="https://facebook.com" className="icon-social-ft">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" className="icon-social-ft">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" className="icon-social-ft">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" className="icon-social-ft">
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <div className="w-full md:w-auto mt-8 md:mt-auto flex justify-center">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-[#444] text-white rounded-md p-2 px-4"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="French">Vietnam</option>
              </select>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[17%_17%_17%_15%_30%] gap-4 pt-5">
          {Object.keys(itemFooter).map((key, index) => (
            <div key={index} className="p-4">
              <h4 className="text-xl font-semibold mb-2">{itemFooter[key][0].title}</h4>
              <ul className="item-footers">
                {itemFooter[key].map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href={item.link} className="text-[#c0c0c0] hover:text-white">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="newsletter p-4 lg:col-span-1 flex flex-col">
            <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
              <FiMail /> Sign Up For a Newsletter
            </h4>
            <p className="mb-4 text-[#c0c0c0]">Weekly breaking news, analysis, and cutting-edge advice on job searching.</p>
            <form className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 rounded-md bg-[#262626] focus:outline-none placeholder-gray-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-md hover:bg-white hover:text-black p-4 flex-shrink-0"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
        <p className="flex text-[#c0c0c0] justify-center md:mt-[82px] mt-[50px] pb-4">© 2022 jobmela. All Rights Reserved.</p>
      </div>
    </footer>
    
  )
}

export default Footer