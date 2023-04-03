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
            <a href="/#tecnocar">
              <li>Tecnocar</li>
            </a>

            <a href="/#services">
              <li>Serviços</li>
            </a>

            <a href="https://orcamentotecnocar.vercel.app/" target="_blank">
              <li>Agendamento</li>
            </a>

            <a href="/#contatos">
              <li>Contato</li>
            </a>
          </ul>
        </div>
      </header>
      <div className={styles.whats}>
        <a href="https://wa.me/5551995592253" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Header;
