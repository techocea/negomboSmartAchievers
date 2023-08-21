import React from "react";
import banImage from "../../assets/hero1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="flex p-8 h-screen max-sm:p-4 max-sm:h-auto">
      <div className="w-[60%] flex flex-col justify-center max-sm:w-auto">
        <h1 className="text-5xl max-sm:text-4xl capitalize font-bold text-[#343a40] leading-[60px]">
          Connecting you with the best educational oportunities worldwide with
          us
        </h1>
        <p className="font-semibold text-[#6c757d] py-8 pr-8 text-[18px]">
          Our programmes are highly experiencial & exposing students to boraden
          their perspective in education, a uniques learning pathway.{" "}
        </p>
        <div className="flex gap-8">
          <Link to="/about">
            <button className="bg-[rgb(8,8,63)] flex gap-2 items-center text-white rounded px-8 py-3">
              See more <AiOutlineArrowRight />
            </button>
          </Link>
          <Link to="/countries">
            <button className="border-2 border-[rgb(8,8,63)] px-8 py-3 rounded">
              Countries
            </button>
          </Link>
        </div>
      </div>
      <img src={banImage} alt="banImage" className="max-sm:hidden" />
    </div>
  );
};

export default Hero1;
