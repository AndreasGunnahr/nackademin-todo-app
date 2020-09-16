import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useAuthContext } from "store/authContext";
import { useParams } from "react-router-dom";
import {
  Overlay,
  Container,
  ModalWrapper,
  Wrapper,
  Title,
  InputField,
  TextArea,
  CreateButton,
  ErrorMessage,
  Label,
} from "./style";

const NewCardModal = ({ laneId, onCancel, onAdd, isShowing, hide }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState("");
  const { user } = useAuthContext();
  const { id } = useParams();

  const createTodo = async () => {
    const response = await fetch(`/api/boards/${id}/todos`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        done: false,
        metadata: { title, description },
        laneId,
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleAdd = async () => {
    if (!title) return setError("*Enter a valid title.");
    const { error, todo } = await createTodo();
    if (!error) {
      todo["id"] = todo["_id"];
      delete todo["_id"];
      return onAdd(todo);
    }
  };

  return createPortal(
    <>
      <Overlay onClick={onCancel} />
      <Container>
        <ModalWrapper>
          <Title>Add new todo</Title>
          <Label>Title</Label>
          <InputField
            placeholder="Enter a title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Description</Label>
          <TextArea
            placeholder="Enter a description"
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Wrapper>
            <CreateButton
              disabled={!(title && description)}
              onClick={handleAdd}
            >
              Add todo
            </CreateButton>
          </Wrapper>
        </ModalWrapper>
      </Container>
    </>,
    document.body
  );
};

export default NewCardModal;
