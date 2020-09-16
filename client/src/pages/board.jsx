import React from "react";
import styled from "styled-components";

// IMPORT OF COMPONENTS
import StatusBar from "components/statusBar";
import Draggable from "components/draggable";

const Container = styled.div``;

const Board = (props) => {
  return (
    <Container>
      <StatusBar />
      <Draggable boardId={props.match.params.id} />
    </Container>
  );
};

export default Board;
