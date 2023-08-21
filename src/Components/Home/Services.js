import React from "react";
import Slider from "react-slick";
import { servicesData } from "../../Data";

import { FaQuoteLeft } from "react-icons/fa";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#6c757d] h-screen ">
      <div className="flex flex-col mt-10">
        <h2 className="font-bold text-5xl text-[rgb(37,36,36)] m-8">
          Services
        </h2>
      </div>
      <div className=" max-w-auto h-auto px-[5rem]">
        <div className="m-[5rem] max-sm:my-[3rem] max-sm:mx-0 group">
          <Slider {...settings} className="my-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="w-[320px] p-2 border-4 drop-shadow-lg bg-white h-[340px]"
              >
                <img
                  src={service.img}
                  alt="service-img"
                  className="h-[50%] w-auto object-contain "
                />
                <h1 className="font-bold text-2xl pt-4">{service.title}</h1>
                <p className="py-2">{service.value}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative h-full hidden max-sm:block">
          <span className="text-8xl">
            <FaQuoteLeft size={90} className="text-[rgb(255,255,255)]" />
          </span>
          <div className="absolute top-8 left-3 z-20">
            <h1 className="capitalize text-[rgb(49,39,39)]  font-bold text-3xl">
              to make a difference with Education
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
