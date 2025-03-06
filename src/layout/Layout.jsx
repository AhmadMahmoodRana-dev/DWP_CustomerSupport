import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/dashboard/Navbar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme(); // Use the Theme Context
  return (
    <div
      className={`w-full min-h-screen h-auto flex ${
        theme === "dark" ? "bg-[#181818]" : "bg-[#fff]"
      }`}
    >
      <Sidebar />
      <MobileSidebar/>
      <div className={`w-full min-h-screen h-auto ${theme === "dark" ? "border-l border-[#4f4f4f]" : "border-l border-gray-300"}`}>
      <Navbar/>
      {children}
      </div>
    </div>
  );
};

export default Layout;
