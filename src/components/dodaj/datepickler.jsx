import React, { useState } from "react";
import "./datepickler.css";

function DatePick() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <h1>Selected Date:{date}</h1>
      <input
        className="date-input"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
}

export default DatePick;
