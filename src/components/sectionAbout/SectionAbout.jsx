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
                <p>
                    Oferecemos serviços avançados de diagnóstico, injeção eletrônica e manutenção preventiva para garantir o funcionamento correto do seu veículo. Além disso, realizamos reparos em módulos de injeção, ABS e airbag, e manutenção de motores, freios e suspensão. Nossa equipe está preparada para atender todas as suas necessidades automotivas de forma eficiente e profissional.                </p>
            </div>
        </div>
    );
};

export default ContentSobre;
