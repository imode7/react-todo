import React, { useContext } from "react";
import styles from "./Body.module.css";
import { TodoContext } from "../context/TodoContext";
import { MenuListContext } from "../context/MenuListContext";

export default function Body() {
  const { todo, toggleTodoDone } = useContext(TodoContext);
  const { nav } = useContext(MenuListContext);

  /*if (nav === "Active") {
    return (
      <article className={styles.article}>
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
                        onChange={toggleCheckBox}
                        checked={false}
                      />
                      <span>{param.title}</span>
                    </div>
                    <img src="/images/bin.png" alt="" />
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
      <article className={styles.article}>
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
                        onChange={toggleCheckBox}
                        checked={true}
                      />
                      <span>{param.title}</span>
                    </div>
                    <img src="/images/bin.png" alt="" />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </article>
    );
  }*/

  return (
    <article className={styles.article}>
      <section>
        <div>
          <ul>
            {todo.map((param, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => toggleTodoDone(param, idx)}
                      checked={param.done}
                    />
                    <span>{param.title}</span>
                  </div>
                  <img src="/images/bin.png" alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}
