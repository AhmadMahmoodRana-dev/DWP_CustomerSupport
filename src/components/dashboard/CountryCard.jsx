import React from "react";
import MyDropdownMenu from "./MyDropdownMenu";
import { FaArrowUp } from "react-icons/fa";
import australia from "../../assets/australia.png";
import brazil from "../../assets/brazil.png";
import china from "../../assets/china.png";
import india from "../../assets/india.png";
import russia from "../../assets/russia.png";
import UAE from "../../assets/UAE.png";
import usa from "../../assets/usa.png";
import { useTheme } from "@/context/ThemeContext";
const CountryCard = () => {
  const {theme} = useTheme() 
  const countryList = [
        {
          id: 1,
          name: "Australia",
          image: australia,
          value: "$84.5k",
          percent: 25,
        },
        {
          id: 2,
          name: "Brazil",
          image: brazil,
          value: "$84.5k",
          percent: -10,
        },
        {
          id: 3,
          name: "China",
          image: china,
          value: "$84.5k",
          percent: 25,
        },
        {
          id: 4,
          name: "India",
          image: india,
          value: "$84.5k",
          percent: 25,
        },
        {
          id: 5,
          name: "Russia",
          image: russia,
          value: "$84.5k",
          percent: 25,
        },
        {
          id: 6,
          name: "UAE",
          image: UAE,
          value: "$84.5k",
          percent: 25,
        },
        {
          id: 7,
          name: "United States",
          image: usa,
          value: "$84.5k",
          percent: 25,
        },
      ];
    
  return (
    <div className={`countryCard w-full ${theme === "dark" ? "bg-[#212121] border border-[#4f4f4f]" : "border border-gray-200" }  h-auto rounded-md p-4`}>
      {/* Top */}
      <div className={`top-container pb-3 flex justify-between items-center text-[1.1rem] ${ theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        <h1 className="tracking-wide font-semibold">Sales by Countries</h1>
        <MyDropdownMenu />
      </div>
      {/* Bottom LISTS */}
      <div className="lists flex flex-col gap-4 h-[95%] justify-center">
        {countryList.map((country) => {
          return (
            <div
              key={country?.id}
              className="w-full h-auto flex justify-between items-center"
            >
              <div className="country-div flex justify-center items-center gap-4">
                <img src={country?.image} className="w-[40px] h-[40px]" />
                <div>
                  <h1 className={`${ theme === "dark" ? "text-gray-300" : "text-gray-600"} text-xl font-semibold tracking-wide`}>
                    {country?.value}
                  </h1>
                  <h1 className={`${ theme === "dark" ? "text-gray-400" : "text-gray-600"}  tracking-wider text-sm`}>
                    {country?.name}
                  </h1>
                </div>
              </div>
              {country?.percent >= 0 ? (
                <div className="percentage text-sm gap-3 flex justify-center items-center text-green-400">
                  <FaArrowUp className="text-xs" />
                  <h1>{country?.percent}%</h1>
                </div>
              ) : (
                <div className="percentage text-sm gap-3 flex justify-center items-center text-red-400">
                  <FaArrowUp className="text-xs rotate-180" />
                  <h1>{country?.percent}%</h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryCard;
