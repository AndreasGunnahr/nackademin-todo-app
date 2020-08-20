import React, { useState, useEffect } from "react";
import Board from "react-trello";
import Card from "components/card";
//   let eventBus = undefined;
//   const setEventBus = (handle) => {
//     eventBus = handle;
//   };

const Draggable = () => {
  const [eventBus, setEventBus] = useState(undefined);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await fetch("/api/todo");
    const result = await response.json();
    setTodos(result.data);
  };

  let board = {
    lanes: [
      {
        id: "TODO LIST",
        title: "Todo list",
        label: "0/10",
        style: { width: 300 },
        cards: todos,
      },
      { id: "ON GOING", title: "On going", style: { width: 300 }, cards: [] },
      {
        id: "COMPLETED",
        title: "Completed",
        style: { width: 300 },
        cards: [],
      },
    ],
  };

  return (
    <div>
      {todos ? (
        <Board
          data={board}
          editable={true}
          laneStyle={{ backgroundColor: "#f6f6f6" }}
          style={{ backgroundColor: "#FAFAFA" }}
          components={{ Card: Card }}
          eventBusHandle={setEventBus}
        />
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Draggable;
