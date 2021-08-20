import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BreweriesForm = () => {
  const [listBrew, setListBrew] = useState([]);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        let res = await axios.get(
          "https://api.openbrewerydb.org/breweries?by_city=philadelphia"
        );
        debugger;

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
      <li value={el.url} key={el.name}>
        {el.name} {el.city}
      </li>
    );
  });
  return (
    <div>
      {listOfBreweries}
     
    </div>
  );
};

export default BreweriesForm;
