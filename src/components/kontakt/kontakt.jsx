import React from "react";
import "./kontakt.css";
const Kontakt = function () {
  return (
    <div className="kontakt-style">
      <div className="div-main">
        <form className="form-kontakt">
          {/* <h1 className="kontakt-style-h1"> Kontakt</h1> */}
          <text className="text-style-kontakt">
            <p className="kontakt-title">Kontakt</p>
            <p className="kontakt-paragraf">
              Masz uwagi, krytykę, pytania, informacje... to nie ma znaczenia:
            </p>
            <p className="kontakt-paragraf">
              Tutaj możesz łatwo skontaktować się z nami.
            </p>
            <p className="kontakt-paragraf">
              PS: Jeśli masz pytania dotyczące konkretnego wydarzenia, podaj
              nazwę wydarzenia. Nawiasem mówiąc, zwykle nie jesteśmy
              organizatorem, ale nadal staramy się pomóc najlepiej, jak
              potrafimy
            </p>
          </text>
          <label className="kontakt-label">Imię (obowiązkowe):</label>
          <input className="input-styles" />
          <label className="kontakt-label">
            Twój adres e-mail (obowiązkowe):
          </label>
          <input className="input-styles" />
          <label className="kontakt-label">
            Twoja wiadomość (obowiązkowe):
          </label>
          <input type="textarea" className="input-styles" />

          <input
            className="kontakt-submit-button"
            type="submit"
            value="Wyślij"
          />
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
