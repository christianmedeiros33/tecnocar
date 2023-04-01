import styles from "./Location.module.css";
import Emoji from "../../assets/i2.svg";
import Mapa from "../../assets/mapa.svg";

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.text}>
        <p>
          Faça seu agendamento agora mesmo via whatsApp clicando no botão
          abaixo:
        </p>
        <button className={styles.buttonClick}>
          <img src={Emoji} /> Faça seu orçamento
        </button>
      </div>
      <div className={styles.mapa}>
        <img src={Mapa} alt="" />
      </div>
    </div>
  );
};

export default Location;
