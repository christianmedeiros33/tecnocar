import React from "react";
import Logo from "../assets/logo.svg";
import background from "../assets/divback.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerIndex}>
      <img src={Logo}/>
      <ul>
        <li>Inicio</li>
        <li>Tecnocar</li>
        <li>Serviços</li>
        <li>Agendamento</li>
        <li>Contato</li>
      </ul>
      <img src={background} />
    </header>
  );
};

export default Header;
