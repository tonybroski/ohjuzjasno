import React from "react";
import "./UiComponents.css";
import styled from "styled-components";
const UiComponents = () => {
  return (
    <>
      <Circle className="circle-1" />
      <Circle2 className="circle-2" />
    </>
  );
};
const Circle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  overflow: hidden;
  background: linear-gradient(to right, rgb(68, 255, 0), rgb(22, 32, 18));

  // background: linear-gradient(to right, #ff5e62, #ff9966);
  // rgb(68, 255, 0)
  position: absolute;
  top: 60%;
  left: 70%;
  z-index: 1;
`;
const Circle2 = styled(Circle)`
  height: 150px;
  width: 150px;
  top: -45%;
  left: -10%;
`;

export default UiComponents;
