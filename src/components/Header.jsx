import React from "react";
import Logo from "../assets/logo.svg";
import background from "../assets/divback.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.background}></div>
      <header className={styles.content}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.links}>
          <ul className={styles.lista}>
            <a href="#">
              <li>Inicio</li>
            </a>
            <a href="#">
              <li>Tecnocar</li>
            </a>

            <a href="#">
              <li>Serviços</li>
            </a>

            <a href="#">
              <li>Agendamento</li>
            </a>

            <a href="#">
              <li>Contato</li>
            </a>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
