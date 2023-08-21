import { serviceinfo } from "../Data";

const ServeCard = () => {
  return (
    <div className="grid grid-cols-3 gap-11 mx-8 my-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      {serviceinfo.map((dataserve) => (
        <div className="flex flex-col items-center text-center cursor-pointer w-[320px] h-auto m-4 shadow-lg border p-2 border-gray-700 max-md:mx-auto">
          <img src={dataserve.img} className="" />
          <div>
            <h1 className="py-2 font-bold">{dataserve.title}</h1>
            <p className="">{dataserve.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServeCard;
