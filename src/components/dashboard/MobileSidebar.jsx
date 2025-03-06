import { useContext, useState } from "react";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { useTheme } from "@/context/ThemeContext";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Context } from "@/context/Context";

const MobileSidebar = () => {
  const { openMobile, setOpenMobile } = useContext(Context);
  const menuItems = [
    { name: "Home", icon: "🏠", link: "/" },
    {
      name: "Dashboard",
      icon: "👤",
      subItems: [
        { name: "Sale", icon: "🧑", link: "/cashsale" },
        { name: "Collection", icon: "🔑", link: "/collection" },
        { name: "Sales Commission Agents", icon: "💼" },
      ],
    },
    {
      name: "Products",
      icon: "📦",
      subItems: [
        { name: "Categories", icon: "📂" },
        { name: "Variations", icon: "🎨" },
        { name: "Brands", icon: "🏷️" },
      ],
    },
  ];
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };
  const { theme } = useTheme();

  return (
    <Dialog open={openMobile} onClose={() => setOpenMobile(false)} className="relative z-10 xl:hidden block">
      <div className="fixed inset-0 bg-[#0a0a0a]/90 transition-opacity" />
      
      {/* Clickable backdrop wrapper */}
      <div className="fixed inset-0 flex" onClick={() => setOpenMobile(false)}>
        <div className="relative flex w-full max-w-md" onClick={(e) => e.stopPropagation()}>
          <TransitionChild
            as="div"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="pointer-events-auto relative w-[70%] min-h-screen shadow-xl overflow-y-auto py-2"
              style={{ backgroundColor: theme === "dark" ? "#181818" : "#fff", color: theme === "dark" ? "white" : "black" }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between h-[60px] px-4">
                <div className="flex gap-3">
                  <img src={Logo} className="max-w-[12%]" />
                  <h1 className="text-2xl tracking-widest font-bold">Fobia</h1>
                </div>
              </div>

              {/* Sidebar Menu */}
              <nav className="w-full">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative">
                    {/* Menu Button */}
                    <button
                      onClick={() => item.subItems && toggleSubmenu(item.name)}
                      className={`flex items-center px-4 py-3 w-full transition-all ${
                        openSubmenu === item.name ? "bg-[#141522] border-l-2 border-l-red-500 text-white" : ""
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <Link to={item.link} className="text-sm flex justify-between items-center w-full">
                        <span>{item.name}</span>
                        {item.subItems && (
                          <IoIosArrowBack
                            size={13}
                            className={`transition-transform ${openSubmenu === item.name ? "rotate-90" : "rotate-0"}`}
                          />
                        )}
                      </Link>
                    </button>

                    {/* Expanded Submenu */}
                    {item.subItems && (
                      <div className={`overflow-hidden bg-[#141522] transition-[max-height] duration-500 ${openSubmenu === item.name ? "max-h-[500px]" : "max-h-0"}`}>
                        {item.subItems.map((subItem) => (
                          <Link to={subItem.link} key={subItem.name} className="flex items-center p-2 rounded-lg text-sm w-full pl-4 hover:bg-[#141522]">
                            <span className="mr-2 text-lg">{subItem.icon}</span>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  );
};

export default MobileSidebar;
