import React, { createContext } from "react";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
}
