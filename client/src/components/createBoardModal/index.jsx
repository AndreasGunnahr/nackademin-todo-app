import React, { useState } from "react";
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
  CreateButton,
  ErrorMessage,
  Label,
} from "./style";

const CreateBoardModal = ({ isShowing, hide, setBoards, boards }) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();

  const handleCreate = async () => {
    const response = await fetch(`/api/boards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const { error, board } = await response.json();
    if (!error) {
      setBoards([...boards, board]);
      hide();
    }
    setError(error);
  };

  return isShowing
    ? createPortal(
        <>
          <Overlay onClick={hide} />
          <Container>
            <ModalWrapper>
              <Title>Create a new board</Title>
              <Label>Title</Label>
              <InputField
                placeholder="Enter a board title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label>Description</Label>
              <TextArea
                placeholder="Enter a board description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Wrapper>
                <ErrorMessage>{error}</ErrorMessage>
                <CreateButton
                  disabled={!title || !description}
                  onClick={handleCreate}
                >
                  Create board
                </CreateButton>
              </Wrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default CreateBoardModal;
