import React from "react";

import styles from "./Credit.module.css";

export const Credit = () => {
  return (
    <div id="contatos" className={styles.main}>
      <p>
        © 2022 Tecnocar - Todos os direitos reservados desenvolvido por{" "}
        <a href="https://wa.me/5551997811832" target="_blank">@medeiroscode</a>
      </p>
    </div>
  );
};
