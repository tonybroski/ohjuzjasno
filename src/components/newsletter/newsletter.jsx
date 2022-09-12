import React from "react";
import { useState } from "react";
import "./newsletter.css";
import "firebase/compat/firestore";
import UiComponents from "./uiComponents";

import db from "../../firebase";

function Newsletter() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("emails").add({
        email: input,
        // time: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage("Dziękujemy za subskrypcję!");
      setTimeout(() => {
        setMessage("");
      }, 3000);

      setInput("");
    }
  };
  return (
    <div className="newsletter-style">
      <div className="newsletter-container">
        <UiComponents />
        <form className="newsletter-form-style" onSubmit={submitHandler}>
          <h2 className="newsletter-h2-style">Zapisz się do Newslettera</h2>
          <div className="same-height">
            <input
              className="newsletter-input-style"
              type="email"
              onChange={inputHandler}
              value={input}
            />
            <button className="newsletter-button-style" type="submit">
              Wyślij
            </button>
          </div>
        </form>
        {message && <div className="newsletter-message">{message}</div>}
      </div>
    </div>
  );
}

export default Newsletter;

// https://www.w3schools.com/howto/howto_css_newsletter.asp
