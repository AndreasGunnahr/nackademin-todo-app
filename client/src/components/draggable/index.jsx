import React, { useState, useEffect } from "react";
import Board from "react-trello";
import theme from "constants/theme";
import useModal from "hooks/useModal";

// IMPORT OF COMPONENTS
import Card from "components/card";
import CardForm from "components/cardForm";
import LaneHeader from "components/laneHeader";
import Modal from "components/modal";
import { useAuthContext } from "store/authContext";

const Draggable = ({ boardId }) => {
  const [todos, setTodos] = useState(null);
  const [content, setContent] = useState({});
  const [board, setBoard] = useState({});
  const [eventBus, setEventBus] = useState(undefined);
  const { isShowing, toggle } = useModal();
  const { user } = useAuthContext();

  useEffect(() => {
    getTodos();
  }, []);

  const handleEventBus = (handle) => {
    setEventBus(handle);
  };

  const getTodos = async () => {
    const response = await fetch(`/api/boards/${boardId}/todos`, {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    const { todos } = await response.json();

    const changeIdProperty = todos.map(({ _id: id, ...rest }) => ({
      id,
      ...rest,
    }));
    setBoard({
      lanes: [
        {
          id: "TODO",
          title: "Todo list",
          label: "0/10",
          cards: changeIdProperty.filter((todo) => todo.laneId === "TODO"),
        },
        {
          id: "WIP",
          title: "Work In Progress",
          cards: changeIdProperty.filter((todo) => todo.laneId === "WIP"),
        },
        {
          id: "COMPLETED",
          title: "Completed",
          cardStyle: {
            backgroundColor: "green",
          },
          cards: changeIdProperty.filter((todo) => todo.laneId === "COMPLETED"),
        },
      ],
    });
    setTodos(changeIdProperty);
  };

  const handleCardClick = (id, metadata, laneId) => {
    setContent({ id, metadata, laneId });
    toggle();
  };

  const updateCard = (id, todo) => {
    eventBus.publish({
      type: "UPDATE_CARD",
      laneId: todo.laneId,
      boardId,
      card: todo,
    });
  };

  const updateStatus = async (id, laneId) => {
    const done = laneId === "COMPLETED" ? true : false;
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({
        done,
        laneId,
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleUpdateStatus = async (fromLaneId, toLaneId, cardId) => {
    if (fromLaneId !== toLaneId) {
      const { todo } = await updateStatus(cardId, toLaneId);
      if (todo) {
        todo["id"] = todo["_id"];
        delete todo["_id"];
        eventBus.publish({
          type: "UPDATE_CARD",
          laneId: toLaneId,
          card: todo,
        });
      }
    }
  };

  return (
    <div>
      {todos ? (
        <>
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
              boxShadow: "-2px 3px 3px 0px rgba(176, 176, 176, 1)",
            }}
            onCardClick={handleCardClick}
            onCardMoveAcrossLanes={handleUpdateStatus}
            // canAddLanes={true}
            eventBusHandle={handleEventBus}
          />
          {isShowing && (
            <Modal
              isShowing={isShowing}
              hide={toggle}
              updateCard={updateCard}
              content={content}
              setTodos={setTodos}
              todos={todos}
            />
          )}
        </>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Draggable;
