import MainCard from "@/components/dashboard/MainCard";
import React from "react";
import CountryCard from "@/components/dashboard/CountryCard";
import TotalEarningCard from "@/components/dashboard/TotalEarningCard";
import TotalTrafficCard from "@/components/dashboard/TotalTrafficCard";

const Home = () => {
  return (
    <div className="px-8">
      <div className="flex flex-wrap gap-4 justify-center">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>

      <div className="three-cards-handler mt-5 flex gap-4 flex-wrap">
        <CountryCard />
        <TotalEarningCard/>
        <TotalTrafficCard/>
      </div>
    </div>
  );
};

export default Home;
