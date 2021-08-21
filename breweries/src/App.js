import react from "react";
import BreweriesForm from "./BreweriesForm";
import GoogleMaps from './GoogleMaps'
import {withGoogleMap,withScriptjs} from "react-google-maps";
function App() {
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div className="App">
      Philadelphia Breweries
      <BreweriesForm />
      {/* <GoogleMaps/> */}
      {/* <div style={{ width: "25vw", height: "25vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `25%` }} />}
        containerElement={<div style={{ height: `25%` }} />}
        mapElement={<div style={{ height: `25%` }} />}
      />
    </div> */}
    </div>
  );
}

export default App;
