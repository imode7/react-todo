import React from "react";
import styles from "./Footer.module.css";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <input type="text" className={styles.input} />
      <button className={styles.button}>Add</button>
    </footer>
  );
}
