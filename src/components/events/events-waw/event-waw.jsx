import "../../../queries-mobile/queries-mobile.css";
import "./event-waw-style.css";
import React, { useState, useEffect, Fragment } from "react";
import { getCityAndDocuments } from "../../../firebase";
import { Link } from "react-router-dom";
import { ProductsProv } from "../../../odpalacz";

const EventWaw = () => {
  const [citiesMap, setCitiesMap] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const cityMap = await getCityAndDocuments();
      console.log(cityMap);
      setCitiesMap(cityMap.warszawa);
    };
    getCity();
  }, []);

  return (
    <div className="container-waw grid-waw  eventWaw-main-container ">
      {citiesMap.map((cmap) => (
        <Fragment>
          <ProductsProv />

          <div className="event-waw-dis-ins">
            <div className="event-waw-dis-body">
              <div className="event-waw-place">{cmap.club}</div>
              <div className="event-waw-title">{cmap.event}</div>
              <Link className="link-waw-event" to="/event">
                Show more
              </Link>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default EventWaw;
