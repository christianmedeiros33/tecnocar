import styles from "./SectionScheduling.module.css";
import Emoji from "../../assets/i2.svg";
import Oficina from "../../assets/oficina.jpg";

const Location = () => {
  return (
    <div id="location" className={styles.location}>
      <div className={styles.text}>
        <p>Faça seu agendamento agora mesmo clicando no botão abaixo:</p>

        <button className={styles.buttonClick}>
          <a
            href="https://orcamentotecnocar.vercel.app"
            alt="link para acessar formulario de agendamento que sera enviado via whats"
            target="_blank"
          >
            <img src={Emoji} /> Faça seu orçamento
          </a>
        </button>
      </div>
      <div className={styles.mapa}>
        <img src={Oficina} />
      </div>
    </div>
  );
};

export default Location;