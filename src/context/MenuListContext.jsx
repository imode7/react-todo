import React, { createContext, useState } from "react";

export const MenuListContext = createContext(null);

export function MenuListProvider({ children }) {
  const [nav, setNav] = useState("");

  const handleChangeMenu = (param) => {
    setNav(param);
  };

  return (
    <MenuListContext.Provider value={{ nav, handleChangeMenu }}>
      {children}
    </MenuListContext.Provider>
  );
}
