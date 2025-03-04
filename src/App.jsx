import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import { MdDarkMode } from "react-icons/md";
import PrivateRoutes from "./routes/PrivateRoutes";
import { FaRegSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { toggleTheme,theme } = useTheme();
  return (
    <div className="w-full h-auto relative">
      <a
        onClick={() => toggleTheme()}
        className={`${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#181818]'}   absolute border-2 flex justify-center items-center rounded-full w-10 h-10 top-[87%] right-[1%] z-10`}
      >
      {theme === "light"? <FaRegSun size={22} color="yellow" /> : <MdDarkMode size={22} color="silver" />}
      </a>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<h1>Login</h1>} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/cashsale" element={<h1>Cash Sale</h1>} />
          <Route path="/collection" element={<h1>Collection</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
