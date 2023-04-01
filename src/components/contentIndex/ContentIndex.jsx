import React from "react";
import styles from "../contentIndex/ContentIndex.module.css";

const ContentIndex = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.textContent}>
          <h1>Oficina tecnocar</h1>
          <p>
            Oferecemos as melhores soluções e equipamentos para seu veículo!
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentIndex;
