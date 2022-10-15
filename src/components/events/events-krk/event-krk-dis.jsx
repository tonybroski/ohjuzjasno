import React from "react";
import { useState, useEffect } from "react";
import { getCityAndDocuments } from "../../../firebase";

const KrkEvent = function () {
  const [citiesMap, setCitiesMap] = useState([]);

  useEffect(() => {
    const getCity = async () => {
      const cityMap = await getCityAndDocuments();
      console.log(cityMap);
      setCitiesMap(cityMap.krakow);
    };
    getCity();
  }, []);

  return (
    <div className="miasto-style-event">
      {citiesMap.map((cmap) => (
        <div className="miasto-container-all">
          <div className="box-container-main">
            <p>
              {cmap.data}, {cmap.day}
            </p>
            <p>{cmap.event}</p>
            <div>PLakat(hardcoded)brak narazie</div>

            <p>{cmap.opis}</p>
            <p>godzina: {cmap.hour}</p>
            <p>cena: {cmap.cena}</p>
            <p>Sprawdź w soundcloud:</p>

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
            <p>{cmap.club}</p>
            <p>{cmap.adres}</p>
            {/* <p>{cmap.strona}</p> */}
            <a href={cmap.strona}>Strona Eventu</a>
          </div>
          <div className="box-container-map">
            <p>mapy</p>
            <p> mapa API</p>
            <p>POkaz droge API do google</p>
          </div>
          <div className="box-container-share">
            <p>Przekaż dalej</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Zapisz w kalendarzu</p>
            <p>via Mail</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KrkEvent;
