import "./App.css";
import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Miasto from "./components/miasto/miasto";
import Newsletter from "./components/newsletter/newsletter";
import Dodaj from "./components/dodaj/dodaj";
import Kontakt from "./components/kontakt/kontakt";
import Onas from "./components/onas/onas";
import EventWaw from "./components/events/events-waw/event-waw";
import EventGd from "./components/events/events-gd/event-gd";
import EventKrk from "./components/events/events-krk/event-krk";
import WarszawaEvent from "./components/events/events-waw/event-waw-displayer";
import KrkEvent from "./components/events/events-krk/event-krk-dis";
import GdEvent from "./components/events/events-gd/event-gd-dis";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}>
        <Route index element={<Miasto />} />
        <Route index element={<Miasto />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/dodaj" element={<Dodaj />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/warszawa" element={<EventWaw />} />
        <Route path="/event" element={<WarszawaEvent />} />
        <Route path="/gdansk" element={<EventGd />} />
        <Route path="/gdansk-event" element={<GdEvent />} />
        <Route path="/krakow" element={<EventKrk />} />
        <Route path="/krakow-event" element={<KrkEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
