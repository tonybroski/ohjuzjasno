import React from "react";
import { useState } from "react";
import "./newsletter.css";
// import db from "./firebase";
// import firebase from "firebase/app";

import styled from "styled-components";
import UiComponents from "./uiComponents";

const Newsletter = function() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //add to firebase
      // db.collection("emails").add({
      //   email: input,
      //   time: firebase.firestore.FieldValue.serverTimestamp(),
      // });
    }
  };
  return (
    <Div className="newsletter-style">
      <Container className="newsletter-container">
        <UiComponents />
        <Form onSubmit={submitHandler}>
          <H2>Zapisz się do Newslettera</H2>
          <div className="same-height">
            <Input type="email" onChange={inputHandler} />
            <Button type="submit"> Wyślij </Button>
          </div>
        </Form>
      </Container>
    </Div>
  );
};
const Div = styled.div`
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  position: relative;
`;
const Form = styled.form`
  position: relative;
  padding: 3rem;
  min-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 30px #333;
  background: rgba(255, 255, 255, 0.2);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const H2 = styled.h2`
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: none;
  width: 80%;
  outline: none;
  color: cf1d22;
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  width: 20%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
`;
export default Newsletter;

// https://www.w3schools.com/howto/howto_css_newsletter.asp
