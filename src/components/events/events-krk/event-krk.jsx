import "./event-krk-style.css";
import React, { useState, useEffect, Fragment } from "react";
import { getCityAndDocuments } from "../../../firebase";
import { Link } from "react-router-dom";
import { ProductsProv } from "../../../odpalacz";
import "./event-krk-dis.css";

// import { addCollectionAndDocuments1 } from "../../../firebase";

// import SHOW_DATA_2 from "../../../event-data-2";

// export const ProductsProv = () => {
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     addCollectionAndDocuments1("city2", SHOW_DATA_2);
//   }, []);

//   return <h1>Siema</h1>;
// };

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
    <div className="container grid  event-krk-main-container">
      {citiesMap.map((cmap) => (
        <Fragment>
          <ProductsProv />
          {/* <p>{cmap.cena}</p>
          <p>{cmap.club}</p>
          <p>{cmap.data}</p>
          <p>{cmap.day}</p>
          <p>{cmap.event}</p>
          <p>{cmap.opis}</p>
          <p>{cmap.strona}</p>
          <p>{cmap.hour}</p> */}
          <div className="event-krk-dis-ins">
            <div className="event-krk-dis-body">
              <div className="event-krk-place">{cmap.club}</div>
              <div className="event-krk-title">{cmap.event}</div>
              <Link className="link-krk-event" to="/krakow-event">
                Show more
              </Link>
            </div>
          </div>
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
