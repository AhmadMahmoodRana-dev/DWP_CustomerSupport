import { FaArrowUp } from "react-icons/fa";
import MyAreaChart from "../charts/MyAreaChart";
import MyDropdownMenu from "./MyDropdownMenu";
import school from "../../assets/school.png";
import wallet from "../../assets/wallet.png";
import flag from "../../assets/flag.png";

const TotalEarningCard = () => {
  const SalesList = [
    {
      id: 1,
      name: "Australia",
      image: wallet,
      value: "$84.5k",
      percent: 25,
    },
    {
      id: 2,
      name: "Brazil",
      image: flag,
      value: "$545.69",
      percent: -10,
    },
    {
      id: 3,
      name: "China",
      image: school,
      value: "$84.5k",
      percent: 25,
    },
  ];
  return (
    <div className="countryCard w-[32.33%] bg-[#212121] h-[65vh] border border-[#4f4f4f] rounded-md px-4 py-2">
      {/* Top */}
      <div className="top-container flex justify-between items-center text-[1.1rem] text-gray-300">
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
                <img src={sale?.image} className="" />
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
