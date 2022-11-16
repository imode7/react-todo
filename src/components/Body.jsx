import React from "react";
import styles from "./Body.module.css";

export default function Body() {
  return (
    <article className={styles.article}>
      <section>
        <div>
          <input type="checkbox" />
          <span>강의 보기</span>
        </div>
        <img src="/images/bin.png" alt="" />
      </section>
    </article>
  );
}
