import React from "react";
import styles from "./Body.module.css";

export default function Body() {
  return (
    <article className={styles.article}>
      <section>
        <div>
          <ul>
            {JSON.parse(localStorage.getItem("todo")).map((param, idx) => {
              return param.done === false ? (
                <li key={idx}>
                  <div>
                    <input type="checkbox" />
                    <span>{param.title}</span>
                  </div>
                  <img src="/images/bin.png" alt="" />
                </li>
              ) : (
                <li>
                  <div>
                    <input type="checkbox" checked />
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
