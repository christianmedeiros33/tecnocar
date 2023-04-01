import React from "react";
import styles from "../contentSobre/ContentSobre.module.css";

const ContentSobre = () => {
  return (
    <div className={styles.bodyr}>
      <div className={styles.experiencia}>
        <h3>A MELHOR EXPERIÊNCIA PARA O SEU CARRO.</h3>
        <p>Sempre em busca de qualidade.</p>
        <button>FAZER ORÇAMENTO</button>
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
