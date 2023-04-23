import React from "react";
import styles from "./SectionAbout.module.css";
import { Link } from "react-scroll";

const ContentSobre = () => {
  return (
    <div id="sobre" className={styles.content}>
      <div className={styles.experience}>
        <h3>A MELHOR EXPERIÊNCIA PARA O SEU VEÍCULO.</h3>
        <p>Sempre em busca de qualidade.</p>
        <a href="/#location">
          <Link to="location" spy={true} smooth={true} duration={700}>
            <button>FAZER ORÇAMENTO</button>
          </Link>
        </a>
      </div>
      <div className={styles.about}>
        <p>
          Serviços de diagnóstico avançado, injeção eletrônica, manutenção
          preventiva, reparo de módulos de injeção, ABS e airbag, retifica de
          motor, freio, suspensão em geral.
        </p>
      </div>
    </div>
  );
};

export default ContentSobre;
