import React from "react";
import { useAuthContext } from "store/authContext";
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
  const { user } = useAuthContext();
  const deleteTodo = async () => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    const result = await response.json();
    return result;
  };

  const clickDelete = (e) => {
    const createdTodo = deleteTodo();
    if (createdTodo) onDelete();
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
