import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/About/AboutUs";

//icons
import { AiOutlineDesktop } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { FaDiagnoses } from "react-icons/fa";

import Features from "../Components/Features";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-4 bg-gradient-to-r from-pink-800 to-blue-600 relative">
        <img
          className="h-[300px] w-full object-cover mix-blend-overlay z-0"
          src="https://images.pexels.com/photos/7713349/pexels-photo-7713349.jpeg?auto=compress&cs=tinysrgb&w=1215&h=715&dpr=1"
          alt="aboutimg"
        />
        <h1 className="font-bold text-7xl max-md:top-[10%] max-sm:text-5xl text-white absolute left-10 top-[15%]">
          ABOUT US
        </h1>
      </div>
      <AboutUs />
      <div className="flex flex-col items-center gap-0 bg-slate-200 h-screen max-sm:h-full pb-8">
        <h1 className="font-bold text-4xl max-sm:text-3xl py-8">
          OUR FEATURES
        </h1>
        <div className="flex max-sm:flex-col">
          <Features
            icon={
              <AiOutlineDesktop
                size={15}
                className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4"
              />
            }
            title="Integrity"
            value="Being straight forward and honest in all professional and business dealings"
          />
          <Features
            icon={
              <FaHeadset className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4" />
            }
            title="Objectivity"
            value="not allowing professional judgment to be compromised by bias or conflict of interest"
          />
          <Features
            icon={
              <BsGraphUpArrow
                size={15}
                className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4"
              />
            }
            title="Professional Competance"
            value="maintaining professional knowledge and professional service,and acting diligently"
          />
        </div>
        <div className="flex max-sm:flex-col ">
          <Features
            icon={
              <BsFillPencilFill
                size={15}
                className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4"
              />
            }
            title="Transparency"
            value="Disclose conflicts of interest when charging fees to education providers and students"
          />
          <Features
            icon={
              <IoSpeedometer
                size={15}
                className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4"
              />
            }
            title="Confidentiality"
            value="Respect and preserve confidentiality, don't share personal info without authorization"
          />
          <Features
            icon={
              <FaDiagnoses
                size={15}
                className="rounded-full  w-[100px] h-[100px] text-[#28a745] bg-white drop-shadow-lg p-4"
              />
            }
            title="Professional Behavior"
            value="Act legally, serve competently, diligently and fairly when dealing with clients"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
