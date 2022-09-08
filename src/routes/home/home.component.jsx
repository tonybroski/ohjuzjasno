// import "./App.css";
import Navbar from "../../components/navbar/navbar";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      {/* <Body /> */}
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
