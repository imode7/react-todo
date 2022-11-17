import React, { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }) {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode((mode) => !mode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
