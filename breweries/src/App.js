import react from "react";
import BreweriesForm from "./BreweriesForm";
import GoogleMaps from './GoogleMaps'

function App() {
  return (
    <div className="App">
      Philadelphia Breweries
      <BreweriesForm />
      <GoogleMaps/>
    </div>
  );
}

export default App;
