import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.containerText}>
        <div>
          <h4>Endereço</h4>
          <p>R. arlindo cardoso - 195</p>
          <p>Camaquã-RS</p>
        </div>
        <div>
          <h4>Telefones</h4>
          <p>(51) 3671-3444</p>
          <p>(51) 99999-0000</p>
        </div>
      </div>

      <div className={styles.containerTextAndRedes}>

      <div>
        <h4>Horário</h4>
        <p>Segunda à Sexta-Feira</p>
        <p>07:30 às 12h e 13:30 às 18:30</p>
      </div>

      <div className={styles.containerRedes}>
        <h4>Redes Sociais</h4>

        <div className={styles.redes}>
          <a href="https://facebook.com/tecnocar" target="_blank">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://instagram.com/tecnocarcamaqua" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Footer;
