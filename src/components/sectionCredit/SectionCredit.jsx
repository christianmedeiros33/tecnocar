import React from "react";

import styles from "./SectionCredit.module.css";

const SectionCredit = () => {
  return (
    <div id="contatos" className={styles.main}>
      <p>
        © 2023 Oficina Tecnocar Camaquã -
        <a href="https://wa.me/5551997811832" target="_blank">
          @medeiroscode
        </a>
      </p>
    </div>
  );
};

export default SectionCredit;
