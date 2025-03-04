import { createContext, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  // () => BASIC
  const user = true;
  const [isCollapsed, setIsCollapsed] = useState(false);

  // () => RETURN VALUE

  const contextValue = {
    user,
    isCollapsed,
    setIsCollapsed,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
