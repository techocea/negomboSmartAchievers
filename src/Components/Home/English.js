import React from "react";
import { data } from "../../Data";

const English = () => {
  return (
    <div className="flex items-center h-screen mx-10 max-sm:h-auto">
      <div className="w-[48%] max-sm:hidden ">
        <img
          src="https://images.pexels.com/photos/6238039/pexels-photo-6238039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-contain w-full h-[550px]"
          alt="ielts"
        />
      </div>
      <div className="text-black w-[48%] max-sm:w-full max-sm:h-full max-sm:mb-8 max-sm:mx-2 flex flex-col gap-2 ">
        <div className="flex items-center my-8 justify-center">
          <h1 className="hidden  max-sm:block capitalize font-bold text-3xl items-center text-center">
            english profiency is a <span className="text-[#28a745]">must</span>
          </h1>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="p-6 max-sm:px-4 w-full max-sm:w-auto max-sm:h-full max-sm:my-4 cursor-pointer max-sm:border-4 max-sm:shadow-xl rounded hover:bg-slate-200 hover:drop-shadow-lg"
          >
            <h1 className="font-bold">{item.title}</h1>
            <p className="text-[18px] text-[#343a40] font-semibold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default English;
