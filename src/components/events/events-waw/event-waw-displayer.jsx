import EventWawDisInside from "./event-waw-display-inside";
import "./event-waw-displayer.css";
const WawDisplayer = ({ events }) => {
  return (
    <div className="eventWaw-main-container">
      {events.map((event) => (
        <EventWawDisInside key={event.id} event={event} />
      ))}
      {/* <h2 className="city-title">Warszawa</h2> */}
      {/* <div className="container-for-events"></div> */}
    </div>
  );
};

export default WawDisplayer;
