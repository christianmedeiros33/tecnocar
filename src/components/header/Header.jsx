import React from "react";
import Logo from "./../../assets/logo.svg";
import styles from "../header/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.content}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.links}>
          <ul className={styles.lista}>
          
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
