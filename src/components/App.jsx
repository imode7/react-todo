import React from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { DarkModeProvider } from "../context/DarkModeContext";
import { TodoProvider } from "../context/TodoContext";
import { MenuListProvider } from "../context/MenuListContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div className={styles.body}>
        <div className={styles.center}>
          <TodoProvider>
            <MenuListProvider>
              <Header />
              <Body />
            </MenuListProvider>
            <Footer />
          </TodoProvider>
        </div>
      </div>
    </DarkModeProvider>
  );
}
