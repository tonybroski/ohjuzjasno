import React from "react";
import { useState, useEffect } from "react";
import { getCityAndDocuments } from "../../../firebase";
import "../../../queries-mobile/queries-mobile.css";
import "./waw-event.css";

const WarszawaEvent = function () {
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
    <div className="miasto-style-event">
      {citiesMap.map((cmap) => (
        <div className="miasto-container-all-waw">
          <div className="box-container-main">
            <p className="date-day">
              {cmap.data}, {cmap.day}
            </p>
            <p className="event-name">{cmap.event}</p>
            <div className="plakat">PLakat(hardcoded)brak narazie</div>

            <p className="about-event">{cmap.opis}</p>
            <p className="hour">godzina: {cmap.hour}</p>
            <p className="price">cena: {cmap.cena}</p>
            <p className="soundclound">Sprawdź w soundcloud:</p>

            <iframe
              id="soundcloud_widget"
              src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-563403434-281593516/taco-hemingway-metropolis-feat-schafter-leak"
              width="420"
              height="120"
              frameborder="no"
            ></iframe>

            {/* <iframe
              id="soundcloud_widget"
              src="https://w.soundcloud.com/player/?url=https://soundcloud.com/steve-barkwill&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=false&visual=true&start_track=0&callback=true"
              width="420"
              height="120"
              frameborder="no"
            ></iframe> */}
          </div>
          <div className="box-container-name">
            <p className="club-name">{cmap.club}</p>
            <p className="adres">{cmap.adres}</p>
            {/* <p>{cmap.strona}</p> */}
            <a className="club-website" href={cmap.strona}>
              Strona Eventu
            </a>
          </div>
          <div className="box-container-map">
            <p className="map-api">mapy</p>
            <p className="map-api-2"> mapa API</p>
            <p className="google-show-way">POkaz droge API do google</p>
          </div>
          <div className="box-container-share">
            <p className="share">Przekaż dalej</p>
            <p className="share">Facebook</p>
            <p className="share">Twitter</p>
            <p className="share">Zapisz w kalendarzu</p>
            <p className="share">via Mail</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WarszawaEvent;

//stary code:
// import EventWawDisInside from "./event-waw-display-inside";
// import "./event-waw-displayer.css";
// const WawDisplayer = ({ events }) => {
//   return (
//     <div className="eventWaw-main-container">
//       {events.map((event) => (
//         <EventWawDisInside key={event.id} event={event} />
//       ))}
//       {/* <h2 className="city-title">Warszawa</h2> */}
//       {/* <div className="container-for-events"></div> */}
//     </div>
//   );
// };

// export default WawDisplayer;
