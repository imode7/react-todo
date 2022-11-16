import React, { createContext } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const ThemeContext = createContext(localStorage.getItem("theme"));

export default function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className={styles.body}>
        <div className={styles.center}>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
