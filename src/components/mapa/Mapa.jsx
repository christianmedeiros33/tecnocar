import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mapa() {
  const position = [-30.8608760703647, -51.825701638016575];
  const zoom = 15;

  return (
    <div>
      <MapContainer center={position} zoom={zoom} style={{ height: "200px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Mecanica Tecnocar </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;
