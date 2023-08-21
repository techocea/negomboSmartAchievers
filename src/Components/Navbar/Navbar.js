import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBarsStaggered,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhoneFlip,
  FaRegClock,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/favicon.png";
import NoPage from "../../Pages/NoPage";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between shadow-md bg-[#28a745] h-[50px] items-center px-8 text-white max-sm:hidden">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 pr-4 border-r-2 ">
            <FaLocationDot />
            <h3 className="font-bold">NO 88/2 Chilaw Rd,Negombo</h3>
          </div>
          <div className="flex items-center gap-2 pr-4 border-r-2">
            <FaRegClock />
            <h3 className="font-bold">MON-FRI-9-6</h3>
          </div>
          <div className="flex items-center gap-2 pr-4 border-r-2">
            <FaPhoneFlip />
            <h3 className="font-bold">+94 76 148 6266</h3>
          </div>
        </div>
        <div className="flex gap-10">
          <FaFacebookF size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
          <FaLinkedin size={20} className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between items-center px-8 mt-2 ">
        <Link to="/">
          <img src={logo} className="w-[50px]" alt="logo" />
        </Link>
        <ul className="px-[2rem] flex font-bold max-sm:hidden">
          <Link
            to="/home"
            className="p-4 text-black hover:bg-gray-200 duration-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-4 text-black hover:bg-gray-200 duration-800"
          >
            About Us
          </Link>
          <Link
            to="/countries"
            className="p-4 text-black hover:bg-gray-200 duration-800"
          >
            Countries
          </Link>
          <Link
            to="/services"
            className="p-4 text-black hover:bg-gray-200 duration-800"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="p-4 text-black hover:bg-gray-200 duration-800 "
          >
            Contact
          </Link>
        </ul>
        <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? "bg-black fixed z-50 h-full left-0 top-0 w-[60%] border-r border-r-gray-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col uppercase px-[2rem] z-[90] pt-[2.5rem] font-bold bg-black">
          <Link
            to="/home"
            className="p-4 border-b border-b-gray-600 text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-4 border-b border-b-gray-600 text-white"
          >
            About Us
          </Link>
          <Link
            to="/countries"
            className="p-4 border-b border-b-gray-600 text-white"
          >
            Countries
          </Link>
          <Link
            to="/services"
            className="p-4 border-b border-b-gray-600 text-white"
          >
            Services
          </Link>
          <Link to="/contact" className="p-4 text-white ">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
