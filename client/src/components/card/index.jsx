import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Title,
  Description,
  TopContainer,
  DeleteButton,
  Divider,
} from "./style";

const Card = ({ laneId, id, title, description, onDelete, onClick }) => {
  const deleteTodo = async () => {
    const response = await fetch(`/api/todo/${id}`, { method: "DELETE" });
    const result = await response.json();
    return result;
  };

  const clickDelete = (e) => {
    const createdTodo = deleteTodo();
    if (createdTodo) return onDelete();
    e.stopPropagation();
  };

  return (
    <Container laneId={laneId} onClick={onClick} id={id}>
      <TopContainer>
        <Title>{title}</Title>
        <DeleteButton onClick={clickDelete}>
          <FontAwesomeIcon icon={faTimes} />
        </DeleteButton>
      </TopContainer>
      <Divider laneId={laneId} />
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
