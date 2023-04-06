import React from "react";
import styles from ".././services/Services.module.css";
const Services = () => {
  return (
    <div id="services" className={styles.main}>
      <div className={styles.serviceText}>
        <h2>Serviços prestados</h2>
      </div>

      <div className={styles.mainFlex}>
        <div className={styles.cardOneTwo}>
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
              <p>Freio mecanica</p>
              <button>Saiba mais</button>
            </div>
          </div>
        </div>

        <div className={styles.cardThreeFor}>
          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Injeção mecanica</p>
              <button>Saiba mais</button>
            </div>
          </div>
          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Motores mecanica</p>
              <button onClick={() => alert("suspe")}>Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
