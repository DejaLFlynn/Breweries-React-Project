import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CoordContext = createContext();

const Context = ({ children }) => {
  const [list, setList] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const updater = async () => {
      try {
        let res = await axios.get(
          "https://api.openbrewerydb.org/breweries?by_city=philadelphia"
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    updater();
    showCoordinates()
  }, []);

  const showCoordinates = list.map((el) => {
    return (
      <div>
        {el.latitude}
        {el.longitude}
      </div>
    );
  });

  return (
    <div>
      <CoordContext.Provider value={{ latitude, longitude }}>
        {children}
      </CoordContext.Provider>
    </div>
  );
};

export default Context;
