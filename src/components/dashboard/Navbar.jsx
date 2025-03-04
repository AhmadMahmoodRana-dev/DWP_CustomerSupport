import { Context } from "@/context/Context";
import { useTheme } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaRegSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(Context);
  const { toggleTheme, theme } = useTheme();

  return (
    <header class="text-gray-600 body-font md:flex hidden justify-center items-center px-6 py-5">
      <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:bg-[#212121] cursor-pointer p-3 rounded-full"
        >
          <GiHamburgerMenu />
        </a>
      </div>
      <div className="icons flex justify-center items-center gap-2 pr-3">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:bg-[#212121] cursor-pointer p-3 rounded-full">
          <IoIosSearch size={20} />
        </a>
        <a
          onClick={() => toggleTheme()}
          className={`${
            theme === "dark" ? "bg-[#181818]" : "bg-[#181818]"
          } flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:bg-[#212121] cursor-pointer p-3 rounded-full`}
        >
          {theme === "light" ? (
            <MdDarkMode size={20} color="yellow" />
          ) : (
            <FaRegSun size={20} color="silver" />
          )}
        </a>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
