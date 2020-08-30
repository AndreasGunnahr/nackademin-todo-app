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
  EditButton,
  ErrorMessage,
  Label,
} from "./style";

const EditBoardModal = ({
  isShowing,
  hide,
  setBoards,
  boards,
  clickedBoard,
}) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState(clickedBoard.title);
  const [description, setDescription] = useState(clickedBoard.description);
  const { user } = useAuthContext();

  const handleEdit = async () => {
    const response = await fetch(`/api/boards/${clickedBoard._id}`, {
      method: "PUT",
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
      const boardIndex = boards.findIndex(
        (item) => item._id === clickedBoard._id
      );
      const tempBoards = [...boards];
      tempBoards[boardIndex] = board;
      setBoards(tempBoards);
      hide();
    }
  };

  return isShowing
    ? createPortal(
        <>
          <Overlay onClick={hide} />
          <Container>
            <ModalWrapper>
              <Title>Edit board</Title>
              <Label>Title</Label>
              <InputField
                value={title}
                placeholder="Enter a board title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label>Description</Label>
              <TextArea
                value={description}
                placeholder="Enter a board description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Wrapper>
                <ErrorMessage>{error}</ErrorMessage>
                <EditButton
                  disabled={!title || !description}
                  onClick={handleEdit}
                >
                  Save board
                </EditButton>
              </Wrapper>
            </ModalWrapper>
          </Container>
        </>,
        document.body
      )
    : null;
};

export default EditBoardModal;
