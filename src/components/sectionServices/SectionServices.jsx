import React from "react";
import styles from ".././sectionServices/SectionServices.module.css";
import Agilidade from "./../../assets/agilidade.svg";
import Qualidade from "./../../assets/qualidade.svg";
import Carro from "./../../assets/carro.svg";
import Cartao from "./../../assets/cartao.svg";

const SectionServices = () => {
  return (
    <>
      <div className={styles.section}>
        <div>
          <img className={styles.image} src={Agilidade} alt="" />
          <p>Agilidade e Eficiência</p>
        </div>
        <div>
          <img className={styles.imageCar} src={Carro} alt="" />
          <p>Soluções Eficientes</p>
        </div>
        <div>
          <img className={styles.image} src={Qualidade} alt="" />
          <p>Qualidade</p>
        </div>
        <div>
          <img className={styles.image} src={Cartao} alt="" />
          <p>Condições Especiais</p>
        </div>
      </div>
    </>
  );
};

export default SectionServices;
