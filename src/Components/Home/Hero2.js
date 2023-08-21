import React from "react";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="flex max-md:flex-col justify-center min-h-screen items-center gap-4 mx-[5rem] max-md:mx-auto max-md:px-4">
      <div className="w-full h-full">
        <h1 className="flex flex-col font-bold text-3xl uppercase">
          Welcome to{" "}
          <span className="text-[#62d5a5] text-[40px] ">
            Negombo smart acheivers
          </span>
        </h1>
        <p className="w-auto py-8 text-[18px] text-[#6c757d] font-semibold">
          An education agent plays a vital role in helping students make a
          hassle-free application or paperwork processing. An expert consultant
          provides delicate services in terms of shortlisting desired courses
          and academic institutes in their preferred country.
          <br />
          The role of a consultant is to help students identify their strengths
          and use these to select the best institute based on their profile,
          requirement, and preferences.
        </p>
        <div>
          <Link to="/services">
            <button className="bg-[rgb(8,8,63)] flex gap-2 items-center text-white rounded px-8 py-3">
              Know More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#06142a] text-white h-auto w-[800px] max-md:w-[400px] p-10 max-md:mx-8">
        <h1 className="uppercase text-3xl">our vision</h1>
        <p className="text-[18px] pt-4">
          World-class education consultants helping clients achieve goals and
          build international careers through reliable guidance and recognition
          of achievements.
        </p>
        <hr className="my-8" />
        <h1 className="uppercase text-3xl">Our mission</h1>
        <p className="text-[18px] pt-4 ">
          Trusted education consultants providing expert advice, developing
          relationships, and setting new standards with integrity and devotion
        </p>
      </div>
    </div>
  );
};

export default Hero2;
