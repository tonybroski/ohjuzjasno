import React from "react";
import "./waw-event.css";

const WarszawaEvent = function () {
  return (
    <div className="miasto-style-event">
      <div className="miasto-container-all">
        <div className="box-container-main">
          <p>Dzień/Data/Godzina</p>
          <p>Nazwa eventu</p>
          <div>PLakat</div>
          <text>Pole na opis imprezy, rodzaj muzyki, Line up</text>
          <p>O której wejście i za ile</p>
          <p>tu ma się wyświtlać AIP soundclound</p>
        </div>
        <div className="box-container-name">
          <p>nazwa klubu</p>
          <p>adres</p>
          <p>nazwa/link do strony klubu</p>
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
    </div>
  );
};

export default WarszawaEvent;
