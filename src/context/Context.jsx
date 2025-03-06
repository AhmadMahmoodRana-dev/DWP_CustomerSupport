import { createContext, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  // () => BASIC
  const user = true;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  // () => RETURN VALUE

  const contextValue = {
    user,
    isCollapsed,
    setIsCollapsed,
    openMobile,
    setOpenMobile,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
