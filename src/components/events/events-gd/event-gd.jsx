import "./event-gd-styles.css";

import React, { useState, useEffect, Fragment } from "react";
import { getCityAndDocuments } from "../../../firebase";
import { Link } from "react-router-dom";
import { ProductsProv } from "../../../odpalacz";

function EventGd() {
  const [citiesMap, setCitiesMap] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const cityMap = await getCityAndDocuments();
      console.log(cityMap);
      setCitiesMap(cityMap.gdansk);
    };
    getCity();
  }, []);

  return (
    <div className=" container grid event-gd-main-container">
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
          <div className="event-gd-dis-ins">
            <div className="event-gd-dis-body">
              <div className="event-gd-place">{cmap.club}</div>
              <div className="event-gd-title">{cmap.event}</div>
              <Link className="link-gd-event" to="/gdansk-event">
                Show more
              </Link>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );

  {
    /* <h2 className="city-title">Gd</h2>
      <div className="container-for-events"></div> */
  }
}

export default EventGd;

// import { addCollectionAndDocuments1 } from "../../../firebase";

// import SHOW_DATA_2 from "../../../event-data-2";

// export const ProductsProv = () => {
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     addCollectionAndDocuments1("city2", SHOW_DATA_2);
//   }, []);

//   return <h1>Siema</h1>;
// };

// const EventKrk = () => {
//   const [citiesMap, setCitiesMap] = useState([]);

//   useEffect(() => {
//     const getCity = async () => {
//       const cityMap = await getCityAndDocuments();
//       console.log(cityMap);
//       setCitiesMap(cityMap.krakow);
//     };
//     getCity();
//   }, []);

// const value = citiesMap;

//   return (
//     <div className="eventWaw-main-container">
//       {citiesMap.map((cmap) => (
//         <Fragment>
//           <ProductsProv />
//           {/* <p>{cmap.cena}</p>
//           <p>{cmap.club}</p>
//           <p>{cmap.data}</p>
//           <p>{cmap.day}</p>
//           <p>{cmap.event}</p>
//           <p>{cmap.opis}</p>
//           <p>{cmap.strona}</p>
//           <p>{cmap.hour}</p> */}
//           <div className="event-waw-dis-ins">
//             <div className="event-waw-dis-body">
//               <div className="event-waw-place">{cmap.club}</div>
//               <div className="event-waw-title">
//                 {cmap.event}
//                 <Link className="link-waw-event" to="/krakow-event">
//                   Show more
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Fragment>
//       ))}
//     </div>
//   );
// };

// export default EventKrk;
