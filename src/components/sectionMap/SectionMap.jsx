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
            <img src={Emoji} alt="logo do google maps" /> IR ATÉ A OFICINA
          </button>
        </a>
      </div>
      <iframe
        className={styles.maps}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.9170151138273!2d-51.8258619!3d-30.8609983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a77115f6ec6cd%3A0xe3f85d9727c45d20!2sR.%20Arl%C3%ADndo%20Cardoso%2C%20195%20-%20Maria%20da%20Gra%C3%A7a%2C%20Camaqu%C3%A3%20-%20RS%2C%2096180-000!5e0!3m2!1spt-BR!2sbr!4v1683337305565!5m2!1spt-BR!2sbr"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Mapa;
