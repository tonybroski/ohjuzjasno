import WawDisplayer from "./event-waw-displayer";
import "./event-waw-style.css";
function EventWaw() {
  const events = [
    {
      id: 1,
      place: "Praga Centrum",
      title: "Hatari",
    },
    {
      id: 2,
      place: "Praga Centrum",
      title: "Hatari",
    },
    {
      id: 3,
      place: "Praga Centrum",
      title: "Hatari",
    },
    {
      id: 4,
      place: "Praga Centrum",
      title: "Hatari",
    },
    {
      id: 5,
      place: "Praga Centrum",
      title: "Hatari",
    },
    {
      id: 6,
      place: "Praga Centrum",
      title: "Hatari",
    },
  ];

  return <WawDisplayer events={events} />;
}

export default EventWaw;
