import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Breweries.css";
import GoogleMaps from "./GoogleMaps";

const BreweriesForm = () => {
  const [listBrew, setListBrew] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        let res = await axios.get(
          "https://api.openbrewerydb.org/breweries?by_city=philadelphia"
        );
        //  debugger

        let data = res.data;
        setListBrew(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBreweries();
  }, []);

  const listOfBreweries = listBrew.map((el) => {
    return (
      <div className="mainDivModal">
        <div
          title={el.name}
          className={`mainDivModalBackground showModal-${modal}`}
        >
          <div className="innerModal">
            <h2>Additional info</h2>
            <div className="cardContent">
              {el.name}

              <div>
                <h4>
                {el.street}
                {el.city},{el.state}
                <br></br>
                {el.postal_code}
                </h4>
              </div>

              <div>
                <button className="closeButton" onClick={() => toggleModal()}>
                  {" "}
                  Back to list{" "}
                </button>
              </div>
              <div className="mapDiv">
                <div className="styleMap" key={latitude}>
                  {el.latitude}
                  {el.longitude}
                </div>
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow">
          {/* <img className="exitButton card-img-top" alt="Pin img" onClick={() => toggleModal()} src={imageurl} /> */}
          <div className="exitButton card-top" onClick={() => toggleModal()}>
            <h4>{el.name} </h4>
            <li value={el.url} key={el.name}>
              <br></br>
              <h6>Brewery Type: {el.brewery_type}</h6>
              <div className="brewAddress">
                {el.street}
                <br></br>
                {el.city},{el.state}
                <br></br>
                {el.postal_code}
                <br></br>
                <a href={el.website_url}> {el.website_url}</a>
              </div>
            </li>
          </div>
        </div>
      </div>
    );
  });
  return <div>{listOfBreweries}</div>;
};

export default BreweriesForm;
