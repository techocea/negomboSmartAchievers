import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Country from "../Components/Country";

const Countries = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4 relative bg-gradient-to-r from-pink-800 to-blue-600">
        <img
          className="h-[300px] w-full object-cover mix-blend-overlay "
          src="https://wallpaperaccess.com/full/1170559.jpg"
          alt="countriesImg"
        />
        <h1 className="font-bold text-7xl max-md:top-[10%] max-sm:text-5xl text-white absolute left-10 top-[40%]">
          COUNTRIES
        </h1>
      </div>
      <div className="bg-white h-auto grid grid-cols-3 gap-8 p-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        <Country
          img="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Australia"
        />
        <Country
          img="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="United Kingdom"
        />
        <Country
          img="https://images.pexels.com/photos/11291947/pexels-photo-11291947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="USA"
        />
        <Country
          img="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Canada"
        />
        <Country
          img="https://images.pexels.com/photos/962986/pexels-photo-962986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Ireland"
        />
      </div>
      <Footer />
    </>
  );
};

export default Countries;
