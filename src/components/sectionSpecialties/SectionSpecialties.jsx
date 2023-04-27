import React from "react";
import styles from "./SectionSpecialties.module.css";


const SectionServices = () => {
    return (
        <div className={styles.content}>
            <div>
                <img className={styles.images} src="https://i.imgur.com/ajnJlqy.png" alt="imagem de um relogio"/>
                <p>Agilidade e eficiência</p>
            </div>
            <div>
                <img className={styles.images} src="https://i.imgur.com/EWV1Pm0.png" alt="imagem de duas chaves"/>
                <p>Soluções eficientes</p>
            </div>
            <div>
                <img className={styles.images} src="https://i.imgur.com/pUOG1a5.png" alt="imagem de um seo de qualidade"/>
                <p>Qualidade e garantia</p>
            </div>
            <div>
                <img className={styles.images} src="https://i.imgur.com/hku9omE.png" alt="imagem de um cartão de credito"/>
                <p>Condições especiais</p>
            </div>
        </div>
    );
};

export default SectionServices;
