import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import { MdDarkMode } from "react-icons/md";
import PrivateRoutes from "./routes/PrivateRoutes";
import { FaRegSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  return (
    <div className="w-full h-auto relative">
      
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
