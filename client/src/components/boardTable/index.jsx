import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "store/authContext";
import {
  Container,
  Wrapper,
  TopWrapper,
  CreateBoard,
  VerticalDivider,
  Title,
  Card,
  CardTitle,
  CardDescription,
  CardWrapper,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./style";

const BoardTable = ({ toggle, boards, setBoards, toggleEdit }) => {
  const { user } = useAuthContext();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/api/boards/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-type": "application/json",
      },
    });
    const { error, board } = await response.json();
    if (!error) {
      setBoards(boards.filter((item) => item._id !== board._id));
    }
  };

  return (
    <Container>
      <TopWrapper>
        <Title>My boards</Title>
        <CreateBoard onClick={() => toggle()}>Create new board</CreateBoard>
      </TopWrapper>

      <Wrapper>
        {boards.map((board) => (
          <Board
            key={board._id}
            board={board}
            handleDelete={handleDelete}
            toggleEdit={toggleEdit}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

const Board = ({ board, handleDelete, toggleEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Link to={`/boards/${board._id}`} style={{ textDecoration: "none" }}>
      <Card isOpen={isOpen}>
        <DropDownContainer>
          <DropDownHeader isOpen={isOpen} onClick={(e) => toggleMenu(e)}>
            ●●●
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem
                  onClick={(e) => {
                    e.preventDefault();
                    toggleEdit(board);
                    setIsOpen(false);
                  }}
                >
                  Edit board
                </ListItem>
                <ListItem
                  onClick={(e) => {
                    handleDelete(e, board._id);
                    setIsOpen(false);
                  }}
                >
                  Delete board
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

        <VerticalDivider />
        <CardWrapper>
          <CardTitle>{board.title}</CardTitle>
          <CardDescription>{board.description}</CardDescription>
        </CardWrapper>
      </Card>
    </Link>
  );
};

export default BoardTable;
