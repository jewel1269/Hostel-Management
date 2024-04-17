import GoogleMapReact from "google-map-react";
import { googleApiKey } from "../GoogleApi/GoogleApiKey";


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
  const defaultProps = {
    center: {
      lat: 24.3896,
      lng: 91.4126,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "35vh", width: "100%", marginTop: "5%", position:'relative', boxShadow: "3px 3px 3px 3px black", borderRadius: "20px" }}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
