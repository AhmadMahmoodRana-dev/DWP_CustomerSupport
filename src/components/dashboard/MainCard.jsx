import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { GiTwoShadows } from "react-icons/gi";
const MainCard = () => {
  const {theme} =useTheme()
  return (
    <div className={`flex flex-col justify-between max-h-[120px] ${theme === "dark" ? "bg-[#212121] border border-[#4f4f4f]" : "border border-gray-200"}  py-3 h-[120px] rounded-md`}>
      <div className="upper flex justify-between items-center px-4">
        <h1 className={` ${theme === "dark" ? "text-gray-300" : "text-gray-800" } text-[1.1rem]`}>Total Revenue</h1>
        <div className={`icons ${theme === "dark" ? "bg-blue-800/30" : "bg-blue-800/90" }  w-8 h-8 rounded-full flex justify-center items-center`}>
          <GiTwoShadows color="white" />
        </div>
      </div>
      <div className="lower flex justify-between items-center px-4">
        <h1 className={` ${theme === "dark" ? "text-gray-300" : "text-gray-800" } text-[1.1rem] font-semibold`}>$92,854</h1>
        <h1 className="text-[#4f4f4f] text-[.9rem]">+6.32%</h1>
      </div>
    </div>
  );
};

export default MainCard;
