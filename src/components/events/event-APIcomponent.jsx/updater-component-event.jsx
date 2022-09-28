import React, { useState, useEffect, Fragment } from "react";
import db, { getCityAndDocuments } from "../../../firebase";

const EventUpdate = () => {
  onst[(citiesMap, setCitiesMap)] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const cityMap = await getCityAndDocuments();
      console.log(cityMap);
      setCitiesMap(cityMap.krakow);
    };
    getCity();
  }, []);

  // const value = citiesMap;

  return (
    <div>
      {citiesMap.map((cmap) => (
        <Fragment>
          <p>{cmap.cena}</p>
          <p>{cmap.club}</p>
          <p>{cmap.data}</p>
          <p>{cmap.day}</p>
          <p>{cmap.event}</p>
          <p>{cmap.opis}</p>
          <p>{cmap.strona}</p>
          <p>{cmap.hour}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default EventUpdate;
