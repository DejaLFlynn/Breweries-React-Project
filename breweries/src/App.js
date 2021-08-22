import react from "react";
import BreweriesForm from "./BreweriesForm";
import GoogleMaps from "./GoogleMaps";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import "./App.css";
function App() {
  return (
    <div className="App">
      <span className="title">
        <h1>Philadelphia Breweries</h1>
      </span>
      <BreweriesForm />
    </div>
  );
}

export default App;
