import React, { useState } from "react";
import { useAuthContext } from "store/authContext";
import { useParams } from "react-router-dom";
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
  const { user } = useAuthContext();
  const { id } = useParams();

  const setTitleRef = (ref) => (titleRef = ref);
  const setDescRef = (ref) => (descRef = ref);

  const createTodo = async () => {
    const checkDesc = descRef.value ? descRef.value : "";

    const response = await fetch(`/api/boards/${id}/todos`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-type": "application/json",
      },
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
    const { error, todo } = await createTodo();
    if (!error) {
      todo["id"] = todo["_id"];
      delete todo["_id"];
      return onAdd(todo);
    }
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
