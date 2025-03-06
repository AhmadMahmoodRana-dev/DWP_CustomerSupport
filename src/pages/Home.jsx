import MainCard from "@/components/dashboard/MainCard";
import React from "react";
import CountryCard from "@/components/dashboard/CountryCard";
import TotalEarningCard from "@/components/dashboard/TotalEarningCard";
import TotalTrafficCard from "@/components/dashboard/TotalTrafficCard";

const Home = () => {
  return (
    <div className="px-8">
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 justify-center gap-6 px-1">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-1 pt-6">
        <CountryCard />
        <TotalEarningCard/>
        <TotalTrafficCard/>
      </div>
    </div>
  );
};

export default Home;
