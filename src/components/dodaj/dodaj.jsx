import React from "react";
import DatePick from "./datepickler";
import "./dodaj.css";

const Dodaj = function () {
  return (
    <div className="dodaj-style">
      <div className="dodaj-container">
        <div>
          <h1 className="dodaj-h1">Dodaj wydarzenie</h1>
          <p className="dodaj-p">
            Jeśli uważasz, że brakuje nam jakiegoś wydarzenia lub chcesz, aby
            Twoja własna impreza była wyświetlana, po prostu skorzystaj z
            formularza i wyślij nam kolejną imprezę. Zanim Twój wpis pojawi się
            na naszej stronie, sprawdzimy go ponownie, a następnie zatwierdzimy.
          </p>
          <h2 className="dodaj-h2">Dodaj używając Facebook-ID</h2>
          <p className="dodaj-p2">
            Proszę używać linków z bezpośrednim identyfikatorem Facebooka (np.:
            https://www.facebook.com/events/7885865858) zamiast krótkich linków
            (https://fb.me/e/2hjuu6).
          </p>
          <div className="dodaj-input-fb-container">
            <input className="facebook-id" placeholder="Facebook ID" />
            <input className="adres-email" placeholder="Twój adres e-mail" />
            <button className="dodaj-buton-wyslij-1">Wyślij</button>
          </div>
        </div>
        <div>
          <h2 className="poza-fb">Dodaj poza Facebook</h2>
          <div className="dodaj-input-nofb-container">
            <input
              className="nazwa-wydarzenia"
              placeholder="Nazwa wydarzenia"
            />

            <select
              className="
              lokalizacja"
            >
              <option value="Wybierz lokalizację">Wybierz lokalizację</option>
              <option value="Smolna">Smolna</option>
              <option value="Luzztro">Luzztro</option>
              <option value="Święta krowa">Święta krowa</option>
            </select>
            <DatePick className="datepick" />
            <input className="time-put" type="time" />
            <input className="line-up" placeholder="Line Up/Opis" />

            <button className="dodaj-buton-wyslij-1">Wyślij</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dodaj;

// a może użyć jakiś form???
