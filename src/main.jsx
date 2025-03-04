import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/Context";
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ThemeProvider> 
          <App />
        </ThemeProvider>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
