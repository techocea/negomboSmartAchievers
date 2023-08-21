import React from "react";

const Country = (props) => {
  return (
    <>
      <div className="group rounded-3xl mx-auto relative w-[350px] h-[400px] bg-gray-200 overflow-hidden shadow-md hover:shadow-lg max-md:w-[250px] max-md:h-auto">
        {/* Card content */}
        <div>
          <img
            src={props.img}
            className="rounded-3xl h-[400px] w-full object-cover"
          />
          <h1 className="text-white font-bold text-2xl absolute left-10 bottom-6 group-hover:top-6 ease-in">
            {props.name}
          </h1>

          {/* Hidden content */}

          <div className="absolute top-0 left-0 p-4 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in">
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
              <button className="bg-[#17a2b8] p-2 text-white font-bold">
                {props.unis}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
