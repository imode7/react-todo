import React, { useContext } from "react";
import styles from "./Body.module.css";
import { TodoContext } from "../context/TodoContext";
import { MenuListContext } from "../context/MenuListContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Body() {
  const { todo, toggleTodoDone, editTodo, deleteTodo } =
    useContext(TodoContext);
  const { nav } = useContext(MenuListContext);
  const { darkMode } = useContext(DarkModeContext);

  if (nav === "Active") {
    return (
      <article className={darkMode ? styles.darkArticle : styles.article}>
        <section>
          <div>
            <ul>
              {todo
                .filter((param) => param.done === false)
                .map((param, idx) => (
                  <li key={idx}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => toggleTodoDone(param)}
                        checked={param.done}
                      />
                      <span>{param.title}</span>
                    </div>
                    <div>
                      <img
                        src="/images/edit.png"
                        alt=""
                        className={styles.button}
                        onClick={() => {
                          editTodo(param);
                        }}
                      />
                      <img
                        src="/images/bin.png"
                        alt=""
                        className={styles.button}
                        onClick={() => {
                          deleteTodo(param);
                        }}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </article>
    );
  }

  if (nav === "Completed") {
    return (
      <article className={darkMode ? styles.darkArticle : styles.article}>
        <section>
          <div>
            <ul>
              {todo
                .filter((param) => param.done === true)
                .map((param, idx) => (
                  <li key={idx}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => toggleTodoDone(param)}
                        checked={true}
                      />
                      <span>{param.title}</span>
                    </div>
                    <div>
                      <img
                        src="/images/edit.png"
                        alt=""
                        className={styles.button}
                        onClick={() => {
                          editTodo(param);
                        }}
                      />
                      <img
                        src="/images/bin.png"
                        alt=""
                        className={styles.button}
                        onClick={() => {
                          deleteTodo(param);
                        }}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className={darkMode ? styles.darkArticle : styles.article}>
      <section>
        <div>
          <ul>
            {todo.map((param, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => toggleTodoDone(param)}
                      checked={param.done}
                    />
                    <span>{param.title}</span>
                  </div>
                  <div>
                    <img
                      src="/images/edit.png"
                      alt=""
                      className={styles.button}
                      onClick={() => {
                        editTodo(param);
                      }}
                    />
                    <img
                      src="/images/bin.png"
                      alt=""
                      className={styles.button}
                      onClick={() => {
                        deleteTodo(param);
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}
