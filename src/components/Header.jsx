import React, { useState } from "react";
import styles from "./Header.module.css";

const menuList = ["All", "Active", "Completed"];

export default function Header() {
  const [active, setActive] = useState(0);

  return (
    <header>
      <button className={styles.button}>
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
