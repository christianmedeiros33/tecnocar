import React from "react";
import styles from "../contentSobre/ContentSobre.module.css";
import { Link } from "react-scroll";

const ContentSobre = () => {
  return (
    <div id="sobre" className={styles.main}>
      <div className={styles.experiencia}>
        <h3>A MELHOR EXPERIÊNCIA PARA O SEU CARRO.</h3>
        <p>Sempre em busca de qualidade.</p>
        <a href="/#location">
          <Link to="location" spy={true} smooth={true} duration={700}>
            <button>FAZER ORÇAMENTO</button>
          </Link>
        </a>
      </div>
      <div className={styles.sobre}>
        <p>
          Serviços de diagnóstico sistema eletrônica embarcada manutenção
          preventiva em geral, reparo de módulos de injeção ABS e airbag
          retifica de motor freio suspensão em geral.
        </p>
      </div>
    </div>
  );
};

export default ContentSobre;
