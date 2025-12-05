import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [showNavbarSearch, setShowNavbarSearch] = useState(false);

  return (
    <UIContext.Provider value={{ showNavbarSearch, setShowNavbarSearch }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
