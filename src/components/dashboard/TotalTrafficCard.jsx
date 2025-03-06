import React from "react";
import CustomChart from "../charts/CustomChart";
import MyDropdownMenu from "./MyDropdownMenu";

const TotalTrafficCard = () => {
  return (
    <div className="w-full bg-[#212121] h-auto border border-[#4f4f4f] rounded-md p-4">
      <div className="top-container pb-3 flex justify-between items-center text-[1.1rem] text-gray-300">
        <h1 className="tracking-wide font-semibold">Total Traffic</h1>
        <MyDropdownMenu />
      </div>
      <div className="legends flex gap-6 my-4">
        <div className="first-legend border rounded-md border-[#4f4f4f] flex justify-center items-center p-1 gap-2">
          <div className="blue w-3 h-3 rounded-full bg-[#3361ff]"></div>
          <h1 className="text-[#4f4f4f] text-sm">Clicks</h1>
        </div>
        <div className="second-legend border rounded-md border-[#4f4f4f] flex justify-center items-center p-1 gap-2">
          <div className="blue w-3 h-3 rounded-full bg-[#18bb66]"></div>
          <h1 className="text-[#4f4f4f] text-sm">Views</h1>
        </div>
      </div>
      <CustomChart />
    </div>
  );
};

export default TotalTrafficCard;
