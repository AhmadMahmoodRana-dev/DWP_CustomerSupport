import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { GiTwoShadows } from "react-icons/gi";
const MainCard = () => {
  const {theme} =useTheme()
  return (
    <div className={`flex flex-col justify-between max-h-[120px] ${theme === "dark" ? "bg-[#212121]" : ""}  py-3 h-[120px] border border-[#4f4f4f] rounded-md`}>
      <div className="upper flex justify-between items-center px-4">
        <h1 className="text-gray-300 text-[1.1rem]">Total Revenue</h1>
        <div className="icons bg-blue-800/30 w-8 h-8 rounded-full flex justify-center items-center">
          <GiTwoShadows color="white" />
        </div>
      </div>
      <div className="lower flex justify-between items-center px-4">
        <h1 className="text-gray-300 text-[1.1rem]">$92,854</h1>
        <h1 className="text-[#4f4f4f] text-[.9rem]">+6.32%</h1>
      </div>
    </div>
  );
};

export default MainCard;
