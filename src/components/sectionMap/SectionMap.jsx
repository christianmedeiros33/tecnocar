import styles from "../sectionMap/SectionMap.module.css";
import Emoji from "../../assets/iconMaps.svg";

function Mapa() {
    return (
        <div className={styles.containerMap}>
            <div className={styles.GoWorkshop}>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=-30.860908945450138,-51.82581726097299"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles.buttonClick}>
                        <img src={Emoji} alt="logo do google maps"/> IR ATÉ A OFICINA
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Mapa;
