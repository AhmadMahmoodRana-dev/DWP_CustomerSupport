import React from "react";
import CustomChart from "../charts/CustomChart";
import MyDropdownMenu from "./MyDropdownMenu";

const TotalTrafficCard = () => {
  return (
    <div className="traffic-card w-[32.33%] bg-[#212121] h-[65vh] border border-[#4f4f4f] rounded-md px-4 py-2">
      <div className="top-container flex justify-between items-center text-[1.1rem] text-gray-300">
        <h1 className="tracking-wide font-semibold">Total Traffic</h1>
        <MyDropdownMenu />
      </div>
      <CustomChart />
    </div>
  );
};

export default TotalTrafficCard;
