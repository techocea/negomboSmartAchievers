import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import ServeCard from "../Components/ServeCard";

const Serving = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-4 relative bg-gradient-to-r from-pink-800 to-blue-600">
          <img
            className="h-[300px] w-full object-cover mix-blend-overlay "
            src="https://images.pexels.com/photos/9159042/pexels-photo-9159042.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="servicesImg"
          />
          <h1 className="font-bold text-7xl max-md:top-[10%] max-sm:text-5xl text-white absolute left-10 top-[40%]">
            SERVICES
          </h1>
        </div>
        {/*  */}
        <ServeCard />
      </div>
      <Footer />
    </>
  );
};

export default Serving;
