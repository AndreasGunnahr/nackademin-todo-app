import React, { useState } from "react";
import {
  Container,
  Wrapper,
  InputField,
  TextArea,
  CreateButton,
  CancelButton,
  ErrorMessage,
} from "./style";

const CardForm = ({ laneId, onCancel, onAdd, titleRef, descRef }) => {
  const [error, setError] = useState("");

  const setTitleRef = (ref) => (titleRef = ref);
  const setDescRef = (ref) => (descRef = ref);

  const createTodo = async () => {
    const checkDesc = descRef.value ? descRef.value : "";
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.value,
        description: checkDesc,
        done: false,
        metadata: { title: titleRef.value, description: checkDesc },
        laneId,
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleAdd = async () => {
    if (!titleRef.value) return setError("*Enter a valid title.");
    const { data, message } = await createTodo();
    console.log(data);
    console.log(message);
    if (data) data["id"] = data["_id"];
    delete data["_id"];
    return onAdd(data);
  };

  return (
    <Container>
      <InputField ref={setTitleRef} placeholder="Title" />
      <TextArea ref={setDescRef} placeholder="Description" />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Wrapper>
        <CreateButton onClick={handleAdd}>Create</CreateButton>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </Wrapper>
    </Container>
  );
};
export default CardForm;
