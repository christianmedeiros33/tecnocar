import styles from "./SectionScheduling.module.css";
import Emoji from "../../assets/i2.svg";

const Location = () => {
    return (
        <div id="location" className={styles.contentSchenduling}>
            <div className={styles.text}>
                <p>Faça seu agendamento agora mesmo clicando no botão abaixo:</p>

                <button className={styles.buttonClick}>
                    <a
                        href="https://api.whatsapp.com/send?phone=5551995592253&text=Ol%C3%A1.%20Gostaria%20de%20fazer%20um%20agendamento%20para%20meu%20ve%C3%ADculo.%20%C3%89%20poss%C3%ADvel?"
                        target="_blank"
                    >
                        <img src={Emoji} alt="emoji de dedo para clicar"/> Faça seu orçamento
                    </a>
                </button>
            </div>

            <div className={styles.workshopPhoto}/>
        </div>
    );
};

export default Location;
