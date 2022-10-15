import { createContext, useState } from "react";

//as the actual value we want to access
export const EventContext = createContext({
  currentEvent: null,
  setCurrentEvent: () => null,
});

export const EventProvider = ({ children }) => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const value = { currentEvent, setCurrentEvent };
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
