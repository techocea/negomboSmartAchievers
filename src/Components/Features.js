import React from "react";

const Features = (props) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4 max-sm:p-auto border-2 max-sm:border-0 w-[400px] max-sm:w-[300px] h-full">
        <div className="flex flex-col items-center text-center">
          {props.icon}
          <h1 className="font-bold text-xl py-4">{props.title}</h1>
          <p className="text-[#343a40] ">{props.value}</p>
        </div>
      </div>
    </>
  );
};

export default Features;
