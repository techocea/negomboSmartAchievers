import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhoneFlip,
} from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-4 gap-4 grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-3">
        <div>
          <h1 className="font-bold text-2xl text-[#20c997]">
            NEGOMBO SMART ACHIEVERS
          </h1>
          <p className="text-[#6c757d] py-4 font-bold">
            Smart achievers Consultants is one of the Leading Overseas
            Educational Consultation Service Provider in Sri Lanka.
          </p>
          <div className="flex gap-6">
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
        <div className="list-none w-full flex flex-col items-center max-md:items-start ">
          <h1 className="font-bold text-2xl flex text-[#6c757d]">
            Useful links
          </h1>
          <div className="flex flex-col my-4 ">
            <Link to="/home" className="text-[#6c757d] font-bold ">
              Home
            </Link>
            <Link to="/about" className="text-[#6c757d] font-bold ">
              About us
            </Link>
            <Link to="/countries" className="text-[#6c757d] font-bold ">
              Countries
            </Link>
            <Link to="/services" className="text-[#6c757d] font-bold ">
              Services
            </Link>
            <Link to="/contact" className="text-[#6c757d] font-bold ">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl text-[#6c757d]">Contact</h1>
          <div className="flex items-center pt-4 gap-4 text-[#6c757d] font-bold">
            <FaLocationDot />
            No 88/2 Chilaw Road
            <br />
            Kattuwa,Negombo
          </div>
          <div className="flex items-center gap-4 text-[#6c757d] font-bold">
            <FaPhoneFlip />
            076 148 6265
            <br />
            076 148 6266
          </div>
          <div className="flex items-center gap-4 text-[#6c757d] font-bold">
            <AiFillMail />
            info@negombosmartachievers.lk
          </div>
        </div>
        <div>
          <p className="flex py-4 font-bold text-[#6c757d]">
            © 2024 All rights reserved @ Negombo Smart Achievers | Design
            Developed by Brightly
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
