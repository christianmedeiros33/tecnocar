import React from "react";
import styles from ".././services/Services.module.css";
import Emoji from "../../assets/i.svg";

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
              <p>Suspençao mecanica</p>
              <button>Saiba mais</button>
            </div>
          </div>
      </div>

      <div className={styles.cardThreeFor}>
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
      <button className={styles.buttonClick}>
        <img src={Emoji} /> Faça seu orçamento
      </button>
    </div>
  );
};

export default Services;
