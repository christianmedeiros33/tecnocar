import React from "react";
import styles from "./SectionAbout.module.css";
import {Link} from "react-scroll";

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
            <h2> Serviços que realizamos</h2>
                <p> Diagnósticos de falhas mecânica e eletrônica com o osciloscópio.<br/>
                    Reparo e manutenção em sistemas de injeção eletrônica para motores a gasolina, flex e diesel.<br/>
                    Reparo de central eletrônica.<br/>
                    Reparo de imobilizador.<br/>
                    Programação de chaves.<br/>
                    Revisão preventiva.<br/>
                    Troca de óleo e filtro do câmbio automático com máquina.<br/>
                    Regulagem de motor.<br/>
                    Retifica de motores.<br/>
                    Suspensão, freios e direção.</p>
            </div>
        </div>
    );
};

export default ContentSobre;
