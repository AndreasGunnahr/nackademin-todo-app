import React from "react";
import {
  Container,
  Title,
  Description,
  TopContainer,
  DeleteButton,
} from "./style";

const Card = ({ _id, title, description, onDelete }) => {
  const clickDelete = (e) => {
    onDelete();
    e.stopPropagation();
  };

  return (
    <Container id={_id}>
      <TopContainer>
        <Title>{title}</Title>
        <DeleteButton onClick={clickDelete}>X</DeleteButton>
      </TopContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
