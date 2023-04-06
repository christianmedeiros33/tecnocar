import styles from "./Location.module.css";
import Emoji from "../../assets/i2.svg";
import Oficina from "../../assets/oficina.jpg";

const Location = () => {
  return (
    <div id="location" className={styles.location}>
      <div className={styles.text}>
        <p>Faça seu agendamento agora mesmo clicando no botão abaixo:</p>
        <a
          href="https://orcamentotecnocar.vercel.app"
          alt="link para acessar formulario de agendamento que sera enviado via whats"
          target="_blank"
        >
          <button className={styles.buttonClick}>
            <img src={Emoji} /> Faça seu orçamento
          </button>
        </a>
      </div>
      <div className={styles.mapa}>
      <img src={Oficina} alt="" />
     
      </div>
      <button className={styles.buttonClick}>
            <img src={Emoji} /> Ir até a oficina
          </button>
    </div>
  );
};

export default Location;
