import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -1.455, // Belém, PA
  lng: -48.503,
};

function MapaGoogle() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCEQb873ww0s0xnkM5T5s5ui08WBnyadSo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapaGoogle;
