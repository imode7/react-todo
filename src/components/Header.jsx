import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

const menuList = ["All", "Active", "Completed"];

export default function Header() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  const [active, setActive] = useState(0);

  return (
    <header>
      <button className={styles.button} onClick={toggleDarkMode}>
        <img src="/images/light-icon.png" alt="" />
      </button>
      <nav>
        <ul>
          {menuList.map((param, idx) => (
            <li
              key={idx}
              onClick={() => setActive(idx)}
              className={active === idx ? styles.activeLi : null}
            >
              {param}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
