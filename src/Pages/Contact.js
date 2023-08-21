import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="mt-4 relative bg-gradient-to-r from-pink-800 to-blue-600">
        <img
          className="h-[300px] w-full object-cover mix-blend-overlay "
          src="https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="contactImg"
        />
        <h1 className="font-bold text-7xl max-md:top-[10%] max-sm:text-5xl text-white absolute left-10 top-[40%]">
          CONTACT US
        </h1>
      </div>
      <div className="flex mt-8 flex-col mx-auto justify-center items-center w-[800px] max-sm:w-screen h-screen max-sm:h-screen ">
        <h1 className="font-bold text-5xl">Contact Form</h1>
        <div className="py-8 grid gap-4 w-[440px] max-sm:w-[290px]">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <input
              type="text"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full max-sm:w-full"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full max-sm:w-full"
              placeholder="Last Name"
              required
            />

            <input
              type="text"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full max-sm:w-full"
              placeholder="Company Name"
              required
            />
            <input
              type="email"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full max-sm:w-full"
              placeholder="E-mail"
              required
            />
            <input
              type="text"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] max-sm:w-full"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full max-sm:w-full"
              placeholder="Course"
              required
            />
          </div>

          <textarea
            type="text"
            className="border rounded-md border-gray-600 p-2 outline-[#28a745] w-full h-[200px] max-sm:w-full"
            placeholder="Type your message"
            required
          />
          <button
            type="submit"
            className="grid mt-3 outline-none  bg-[#28a745] text-white py-2   font-semibold text-xl"
          >
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
