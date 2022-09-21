import React from "react";

import { Link } from "react-router-dom";
import "./miasto.css";
const Miasto = function () {
  return (
    <div className="miasto-style">
      <Link className="miasto-button" to="/warszawa">
        Warszawa
      </Link>

      <Link className="miasto-button" to="/krakow">
        Kraków{" "}
      </Link>

      <Link className="miasto-button" to="/gdansk">
        Gdańsk
      </Link>
    </div>
  );
};

export default Miasto;
