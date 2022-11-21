import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { MenuListContext } from "../context/MenuListContext";

export default function Header() {
  const [menuList, setMenuList] = useState([]);
  const [active, setActive] = useState("All");

  const { handleChangeMenu } = useContext(MenuListContext);
  const { toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetch(`/Menu.json`)
      .then((res) => res.json())
      .then((data) => {
        setMenuList(data);
      });
  }, []);

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
              onClick={() => {
                setActive(param);
                handleChangeMenu(param);
              }}
              className={active === param ? styles.activeLi : null}
            >
              {param}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
