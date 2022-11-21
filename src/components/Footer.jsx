import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { TodoContext } from "../context/TodoContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header() {
  const { handleInputTodo, inputTodo, addTodo } = useContext(TodoContext);
  const { darkMode } = useContext(DarkModeContext);

  const handleEnter = (e) => {
    if (e.key === "Enter") addTodo();
  };
  return (
    <footer className={darkMode ? styles.darkFooter : styles.footer}>
      <input
        value={inputTodo}
        type="text"
        className={styles.input}
        onChange={handleInputTodo}
        onKeyDown={handleEnter}
      />
      <button className={styles.button} onClick={addTodo}>
        Add
      </button>
    </footer>
  );
}
