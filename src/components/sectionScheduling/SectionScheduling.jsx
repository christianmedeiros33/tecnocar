import styles from "./SectionScheduling.module.css";
import Emoji from "../../assets/i2.svg";

const Location = () => {
  return (
    <div id="location" className={styles.contentSchenduling}>
      <div className={styles.text}>
        <p>Faça seu agendamento agora mesmo clicando no botão abaixo:</p>

        <button className={styles.buttonClick}>
          <a
            href="https://api.whatsapp.com/send?phone=5551995592253&text=Ol%C3%A1%20vim%20pelo%20site,%20e%20queria%20fazer%20um%20agendamento%20para%20meu%20veiculo%20como%20posso%20fazer?"
            alt="link para acessar formulario de agendamento que sera enviado via whats"
            target="_blank"
          >
            <img src={Emoji} /> Faça seu orçamento
          </a>
        </button>
      </div>

      <div className={styles.workshopPhoto} />
    </div>
  );
};

export default Location;
