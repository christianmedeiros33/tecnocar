import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <>
            <header className={styles.content}>
                <img src="https://i.imgur.com/yXVfPFH.png" className={styles.logo} alt="imagem da logo da empresa"/>

                <ul className={styles.lista}>
                    <a>
                        <li>
                            <Link to="sobre" spy={true} smooth={true} duration={1000}>
                                Sobre
                            </Link>
                        </li>
                    </a>

                    <a>
                        <li>
                            <Link to="services" spy={true} smooth={true} duration={1000}>
                                Serviços
                            </Link>
                        </li>
                    </a>

                    <a>
                        <li>
                            <Link to="location" spy={true} smooth={true} duration={1000}>
                                Agendamento
                            </Link>
                        </li>
                    </a>

                    <a>
                        <li>
                            <Link to="contatos" spy={true} smooth={true} duration={1000}>
                                Contato
                            </Link>
                        </li>
                    </a>
                </ul>
            </header>
            <div className={styles.iconWhatsapp}>
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
