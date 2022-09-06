import { useState } from "react";
import Todo from "./todo";
import React from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      Moja aplikacja Todo
      <input placeholder="Wpisz Event" value={""} />
      <button> Dodaj</button>
      {todoList.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}
export default TodoList;
