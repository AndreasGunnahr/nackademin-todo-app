import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuthContext } from "store/authContext";
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
  const { user } = useAuthContext();

  const updateTodo = async () => {
    const response = await fetch(`/api/todos/${content.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({
        title: newTitle,
        description: newDesc,
        metadata: { title: newTitle, description: newDesc },
      }),
    });
    const result = await response.json();
    return result;
  };

  const handleUpdate = async () => {
    const { message, todo } = await updateTodo();
    if (todo) {
      todo["id"] = todo["_id"];
      delete todo["_id"];
      hide();
      updateCard(content.id, todo);
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
                <UpdateButton
                  disabled={!(newTitle !== title || newDesc !== description)}
                  onClick={handleUpdate}
                >
                  Update todo
                </UpdateButton>
              </Wrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default Modal;
