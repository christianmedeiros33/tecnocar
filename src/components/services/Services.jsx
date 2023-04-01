import React from "react";
import styles from ".././services/Services.module.css";

const Services = () => {
  return (
    <div className={styles.main}>
      <h2>Serviços prest  ados</h2>

      <div className={styles.mainFlex}>
        <div className={styles.content}>
          <img className={styles.contentImage} />
          <div className={styles.text}>
            <p>Suspençao mecanica</p>
            <button>Saiba mais</button>
          </div>
        </div>

        <div className={styles.content}>
          <img className={styles.contentImage} />
          <div className={styles.text}>
            <p>Suspençao mecanica</p>
            <button>Saiba mais</button>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.contentImage} />
          <div className={styles.text}>
            <p>Suspençao mecanica</p>
            <button>Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
