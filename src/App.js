import "./App.css";
import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Miasto from "./components/miasto/miasto";
import Newsletter from "./components/newsletter/newsletter";
import Dodaj from "./components/dodaj/dodaj";
import Kontakt from "./components/kontakt/kontakt";
import Onas from "./components/onas/onas";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/miasto" element={<Miasto />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/dodaj" element={<Dodaj />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/onas" element={<Onas />} />
    </Routes>
  );
}

export default App;