import { Context } from "@/context/Context";
import { useTheme } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Sidebar = () => {
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
  const { isCollapsed } = useContext(Context);
  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen xl:block h-auto hidden ${
        theme == "dark" ? "text-white" : "text-gray-600"
      } transition-all duration-300 relative ${
        isCollapsed ? "w-16" : "w-[330px]"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between h-[60px]  px-4">
        {!isCollapsed && (
          <div className="flex gap-3">
          <img src={Logo} className="max-w-[12%]" />
          <h1 className="text-2xl tracking-widest font-bold flex justify-center items-center gap-8">
            Fobia
          </h1>
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <nav className="w-full h-auto">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            {/* Menu Button */}
            <button
              onClick={() =>
                !isCollapsed && item.subItems && toggleSubmenu(item.name)
              }
              className={`flex items-center px-4 py-3 w-full transition-all ${
                isCollapsed ? "justify-center" : "hover:bg-[#141522]"
              } ${
                openSubmenu === item.name
                  ? `bg-[#141522] border-l-2 border-l-red-500 ${
                      theme === "dark" ? "text-white" : "text-gray-600"
                    }`
                  : ``
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && (
                <Link
                  to={item.link}
                  className="ml-3 text-sm flex justify-between items-center w-full"
                >
                  <span>{item.name}</span>
                  {item.subItems && (
                    <span className="text-xs">
                      <IoIosArrowBack
                        size={13}
                        className={`transition-transform ${
                          openSubmenu === item.name ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </span>
                  )}
                </Link>
              )}
            </button>
            {/* Floating Tooltip when Sidebar is Collapsed */}
            {isCollapsed && (
              <div className="absolute left-full z-10 top-0 bg-gray-800 text-white shadow-lg min-w-[200px] rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-1000">
                <div className="px-4 py-2 font-bold">{item.name}</div>
                {item.subItems &&
                  item.subItems.map((subItem) => (
                    <Link
                      to={subItem.link}
                      key={subItem.name}
                      className="flex items-center px-4 py-2 hover:bg-[#141522] transition-colors duration-1000"
                    >
                      <span className="mr-2 text-lg">{subItem.icon}</span>
                      {subItem.name}
                    </Link>
                  ))}
              </div>
            )}

            {/* Expanded Submenu when Sidebar is Open */}
            {!isCollapsed && item.subItems && (
              <div
                className={`overflow-hidden bg-[#141522] transition-[max-height] duration-1000 ease-in-out ${
                  openSubmenu === item.name ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {item.subItems.map((subItem) => (
                  <Link
                    to={subItem.link}
                    key={subItem.name}
                    className="flex items-center p-2 rounded-lg text-sm w-full pl-4 hover:bg-[#141522] transition-colors duration-1000"
                  >
                    <span className="mr-2 text-lg">{subItem.icon}</span>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
