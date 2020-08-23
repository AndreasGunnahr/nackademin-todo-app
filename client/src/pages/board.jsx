import React from "react";
import styled from "styled-components";

// IMPORT OF COMPONENTS
import StatusBar from "components/statusBar";
import Draggable from "components/draggable";

const Container = styled.div``;

const Board = () => {
  return (
    <Container>
      <StatusBar />
      <Draggable />
    </Container>
  );
};

export default Board;
