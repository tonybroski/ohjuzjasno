import "./event-krk-style.css";
import React, { useState, useEffect, Fragment } from "react";
import db, { getCityAndDocuments } from "../../../firebase";

const EventKrk = () => {
  const [citiesMap, setCitiesMap] = useState([]);

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

export default EventKrk;

// return

// export default EventKrk;

//   const [city, setCity] = useState([]);
//   const fetchCity = async () => {
//     const response = db.collection("city");
//     const data = await response.get();
//     data.docs.forEach((item) => {
//       setCity([...city, item.data()]);
//     });
//   };

//   useEffect(() => {
//     fetchCity();
//   }, []);

//   return (
//     <div className="eventWaw-main-container">
//       {city &&
//         city.map((cit) => {
//           return (
//             <div>
//               <h1>{cit.properties}</h1>
//               <h3>Siema</h3>
//             </div>
//           );
//         })}
//       <h2 className="city-title">Krk</h2>

//       <div className="container-for-events"></div>
//     </div>
//   );
// }
