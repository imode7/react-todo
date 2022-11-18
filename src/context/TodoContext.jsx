import React, { createContext, useState } from "react";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState(
    localStorage.getItem("todo") === null
      ? localStorage.setItem("todo", "[]")
      : JSON.parse(localStorage.getItem("todo"))
  );
  const [inputTodo, setInputTodo] = useState("");

  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.find((param) => param.title === inputTodo) !== undefined) {
      alert("Todo가 중복됩니다.");
      return;
    }

    setTodo([...todo, { done: false, title: inputTodo }]);
    localStorage.setItem(
      "todo",
      JSON.stringify([...todo, { done: false, title: inputTodo }])
    );
    setInputTodo("");
  };

  const toggleTodoDone = (param, idx) => {
    const tempTodo = [...todo];
    tempTodo[idx] = { ...tempTodo[idx], done: !param.done };
    setTodo(tempTodo);
    localStorage.setItem("todo", JSON.stringify(tempTodo));
  };

  return (
    <TodoContext.Provider
      value={{ todo, toggleTodoDone, handleInputTodo, addTodo, inputTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
