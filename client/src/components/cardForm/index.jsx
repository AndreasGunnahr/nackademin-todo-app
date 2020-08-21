import React, { useState } from "react";
// import { MovableCardWrapper } from "react-trello";
import {
  Container,
  Wrapper,
  Input,
  CreateButton,
  CancelButton,
  ErrorMessage,
} from "./style";

const CardForm = ({ onCancel, onAdd, titleRef, descRef }) => {
  const [error, setError] = useState("");

  const createTodo = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.value,
        description: descRef.value,
        done: false,
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleAdd = () => {
    if (!titleRef.value) return setError("*Enter a valid title.");
    const createdTodo = createTodo();
    if (createdTodo)
      return onAdd({ title: titleRef.value, description: descRef.value });
  };

  const setTitleRef = (ref) => (titleRef = ref);
  const setDescRef = (ref) => (descRef = ref);

  return (
    <Container>
      <Input ref={setTitleRef} placeholder="Title" />
      <Input ref={setDescRef} placeholder="Description" />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Wrapper>
        <CreateButton onClick={handleAdd}>Create</CreateButton>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </Wrapper>
    </Container>
  );
};
export default CardForm;
