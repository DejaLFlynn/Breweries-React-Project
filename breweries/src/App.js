import react from "react";
import BreweriesForm from "./BreweriesForm";
import CoordContext from './CoordContext'
import "./App.css";
function App() {
  return (
    <div className="App">
      <span className="title">
        <h1>Philadelphia Breweries</h1>
        <p>Click card for more info</p>
      </span>
      <BreweriesForm />
    </div>
  );
}

export default App;
