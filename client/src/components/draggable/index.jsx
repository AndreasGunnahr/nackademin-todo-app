import React, { useState, useEffect } from "react";
import Board from "react-trello";
import theme from "constants/theme";

// IMPORT OF COMPONENTS
import Card from "components/card";
import CardForm from "components/cardForm";
import LaneHeader from "components/laneHeader";

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
    const { data } = await response.json();
    const changeIdProperty = data.map(({ _id: id, ...rest }) => ({
      id,
      ...rest,
    }));

    setTodos(changeIdProperty);
  };

  let board = {
    lanes: [
      {
        id: "TODO LIST",
        title: "Todo list",
        label: "0/10",

        cards: todos,
      },
      { id: "ON GOING", title: "On going", cards: [] },
      {
        id: "COMPLETED",
        title: "Completed",

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
          components={{
            LaneHeader,
            Card,
            NewCardForm: CardForm,
          }}
          style={{ backgroundColor: `${theme.color.white}` }}
          laneStyle={{
            borderRadius: "10px",
            backgroundColor: `${theme.color.grey}`,
            marginRight: "1rem",
            fontFamily: '"Raleway", sans-serif',
            fontSize: ".825rem",
            fontStyle: "italic",
          }}
          // canAddLanes={true}
        />
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Draggable;
