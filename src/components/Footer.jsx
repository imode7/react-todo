import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Header() {
  const [todo, setTodo] = useState("");
  const [localTodo, setLocalTodo] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const saveKeyLocalStorage = (e) => {
    if (e.key === "Enter") {
      saveLocalStorage();
    }
  };

  const saveLocalStorage = () => {
    const localTodo = JSON.parse(localStorage.getItem("todo"));
    if (localTodo === null) {
      localStorage.setItem("todo", "[]");
    }

    if (localTodo.find((param) => param.title === todo) !== undefined) {
      alert("Todo가 중복됩니다.");
      return;
    }

    const array = [];
    array.push(...localTodo, { done: false, title: todo });
    localStorage.setItem("todo", JSON.stringify(array));
  };

  return (
    <footer className={styles.footer}>
      <input
        type="text"
        className={styles.input}
        onChange={handleTodo}
        onKeyDown={saveKeyLocalStorage}
      />
      <button className={styles.button} onClick={saveLocalStorage}>
        Add
      </button>
    </footer>
  );
}
