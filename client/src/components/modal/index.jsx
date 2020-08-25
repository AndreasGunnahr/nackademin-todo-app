import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Overlay,
  Container,
  ModalWrapper,
  Wrapper,
  Title,
  InputField,
  TextArea,
  UpdateButton,
  ErrorMessage,
  Label,
} from "./style";

const Modal = ({ isShowing, hide, content, updateCard, todos }) => {
  const { title, description } = content.metadata;
  const [newTitle, setNewTitle] = useState(content.metadata.title);
  const [newDesc, setNewDesc] = useState(content.metadata.description);
  const [error, setError] = useState("");
  let todoIndex;

  const updateTodo = async () => {
    todoIndex = todos.findIndex((todo) => todo.id === content.id);
    const response = await fetch(`/api/todos/${content.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todos[todoIndex],
        title: newTitle,
        description: newDesc,
        metadata: { title: newTitle, description: newDesc },
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleUpdate = async () => {
    if (!(newTitle !== title || newDesc !== description)) {
      return setError("*Change either title or description to update");
    }

    const { message, data } = await updateTodo();
    if (data) {
      data["id"] = data["_id"];
      delete data["_id"];
      hide();
      updateCard(content.id, data);
      return;
    }
    alert(message);
  };

  return isShowing
    ? createPortal(
        <>
          <Overlay onClick={hide} />
          <Container>
            <ModalWrapper>
              <Title>Edit todo</Title>
              <Label>Title</Label>
              <InputField
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <Label>Description</Label>
              <TextArea
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Wrapper>
                <UpdateButton onClick={handleUpdate}>Update todo</UpdateButton>
              </Wrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default Modal;
