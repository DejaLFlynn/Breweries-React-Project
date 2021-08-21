import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Breweries.css";

const BreweriesForm = () => {
  const [listBrew, setListBrew] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
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
        //    debugger

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
                  {el.city} {el.postal_code} {el.state}
                </h4>
              </div>
              <div className="mapDiv">
                <div className="styleMap">

                    {el.latitude}
                    {el.longitude}
                </div>

                <div>
                  <button className="closeButton" onClick={() => toggleModal()}>
                    {" "}
                    X{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow">
          {/* <img className="exitButton card-img-top" alt="Pin img" onClick={() => toggleModal()} src={imageurl} /> */}
          <div className="exitButton card-top" onClick={() => toggleModal()}>
            <h1>Brewery</h1>
            <li value={el.url} key={el.name}>
              {el.name} {el.city} {el.postal_code} {el.state}
              <a href={el.website_url}> {el.website_url}</a>
              {el.brewery_type}
            </li>
          </div>
        </div>
      </div>
    );
  });
  return <div>{listOfBreweries}</div>;
};

export default BreweriesForm;
