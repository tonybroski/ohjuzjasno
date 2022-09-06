import "./body.css";
import React from "react";
import TodoList from "../todo/todolist";
const Body = () => {
  return (
    <div className="body">
      <div className="body-style">
        Warszawa:
        <TodoList />
      </div>
    </div>
  );
};

export default Body;
