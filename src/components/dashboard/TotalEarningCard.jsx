import { FaArrowUp } from "react-icons/fa";
import MyAreaChart from "../charts/MyAreaChart";
import MyDropdownMenu from "./MyDropdownMenu";
import { useTheme } from "@/context/ThemeContext";
import { CiFlag1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
const TotalEarningCard = () => {
  const {theme} = useTheme()
  const SalesList = [
    {
      id: 1,
      name: "Australia",
      image: <CiWallet color="#18bb66" size={20} />,
      color:"bg-[#194f34]/30",
      value: "$84.5k",
      percent: 25,
    },
    {
      id: 2,
      name: "Brazil",
      image: <CiFlag1 color="#3361ff" size={20} />,
      color:"bg-[#3655a4]/30",
      value: "$545.69",
      percent: -10,
    },
    {
      id: 3,
      name: "China",
      image: <IoSchoolOutline color="#fb2c36" size={20} />,
      color:"bg-[#fb2c36]/30",
      value: "$84.5k",
      percent: 25,
    },
  ];
  return (
    <div className={`countryCard w-full ${theme === "dark" ? "bg-[#212121] border border-[#4f4f4f]" : "border border-gray-200" }  h-auto rounded-md p-4`}>
      {/* Top */}
      <div className={`top-container pb-3 flex justify-between items-center text-[1.1rem] ${ theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        <h1 className="tracking-wide font-semibold">Total Earnings</h1>
        <MyDropdownMenu />
      </div>
      <div className="flex gap-6 py-3">
        <h1 className="text-gray-300 font-semibold text-3xl">68%</h1>
        <div className="percentage text-lg gap-2 flex justify-center items-center text-green-400">
          <FaArrowUp className="text-xs" />
          <h1>25%</h1>
        </div>
      </div>
      <MyAreaChart />
      {/* SALES LIST */}
      <div className="lists flex flex-col gap-4  justify-center">
        {SalesList.map((sale) => {
          return (
            <div
              key={sale?.id}
              className="w-full h-auto flex justify-between items-center"
            >
              <div className="country-div flex justify-center items-center gap-4">
               <div className={`${sale?.color} rounded-md p-3`}>{sale?.image}</div>
                <div>
                  <h1 className="text-gray-300 text-xl font-semibold tracking-wide">
                    {sale?.value}
                  </h1>
                  <h1 className="text-gray-400 font-semibold tracking-wider text-sm">
                    {sale?.name}
                  </h1>
                </div>
              </div>
              {sale?.percent >= 0 ? (
                <div className="percentage text-sm gap-3 flex justify-center items-center text-green-400">
                  <FaArrowUp className="text-xs" />
                  <h1>{sale?.percent}%</h1>
                </div>
              ) : (
                <div className="percentage text-sm gap-3 flex justify-center items-center text-red-400">
                  <FaArrowUp className="text-xs rotate-180" />
                  <h1>{sale?.percent}%</h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TotalEarningCard;
