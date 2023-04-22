import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../sectionMap/SectionMap.module.css";
import Emoji from "../../assets/iconMaps.svg";

function Mapa() {
  const position = [-30.8608760703647, -51.825701638016575];
  const zoom = 15;

  return (
    <div className={styles.containerMap}>
      {" "}
      <div className={styles.GoWorkshop}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=-30.860908945450138,-51.82581726097299"
          target="_blank"
          rel="noopener noreferrer"
          intent
        >
          <button className={styles.buttonClick}>
            <img src={Emoji} /> IR ATÉ A OFICINA
          </button>
        </a>
      </div>
    </div>
  );
}

export default Mapa;
