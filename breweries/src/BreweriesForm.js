import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BreweriesForm = () => {
  const [listBrew, setListBrew] = useState([]);
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState("");
  let history = useHistory();
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        let res = await axios.get(
          "https://api.openbrewerydb.org/breweries?by_city=philadelphia"
        );
        // debugger;

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
      <option value={el.url} key={el.name}>
        {el.name}
      </option>
      
    );
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        let response = await axios.get(value);
        let brewValue = response.data;

        setListBrew(brewValue);
      } catch (error) {
        setListBrew([]);
      }
    
  
  };
  const brewerySelected = (event) => {
      setValue(event.target.value);
      debugger
    return { value, onChange: brewerySelected };
  };




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={brewerySelected}>
          <option defaultValue>Select Brewery</option>
          {listOfBreweries}
        </select>
      </form>
      {value}
      {/* <p>{handleBreweryInfo}</p> */}
    </div>
  );
};

export default BreweriesForm;
