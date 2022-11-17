import React from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { DarkModeProvider } from "../context/DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div className={styles.body}>
        <div className={styles.center}>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}
