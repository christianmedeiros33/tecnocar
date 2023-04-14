import React from "react";
import styles from "./SectionSpecialties.module.css";
import Agilidade from "./../../assets/agilidade.svg";
import Qualidade from "./../../assets/qualidade.svg";
import Carro from "./../../assets/carro.svg";
import Cartao from "./../../assets/cartao.svg";

const SectionServices = () => {
  return (
    <div className={styles.content}>
      <div>
        <img className={styles.images} src={Agilidade} alt="" />
        <p>Agilidade e eficiência</p>
      </div>
      <div>
        <img className={styles.images} src={Carro} alt="" />
        <p>Soluções eficientes</p>
      </div>
      <div>
        <img className={styles.images} src={Qualidade} alt="" />
        <p>Qualidade e garantia</p>
      </div>
      <div>
        <img className={styles.images} src={Cartao} alt="" />
        <p>Condições especiais</p>
      </div>
    </div>
  );
};

export default SectionServices;
