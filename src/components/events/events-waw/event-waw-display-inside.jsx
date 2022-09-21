import "./event-waw-display-inside.css";
import { Link } from "react-router-dom";
const EventWawDisInside = ({ event }) => {
  const { place, title } = event;

  return (
    <div className="event-waw-dis-ins">
      <div className="event-waw-dis-body">
        <div className="event-waw-place">{place}</div>
        <div className="event-waw-title">
          {title}
          <Link className="link-waw-event" to="/event">
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventWawDisInside;
