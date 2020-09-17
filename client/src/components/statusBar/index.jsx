import React from "react";
import { Container, Wrapper, Title, Badge } from "./style";

const StatusBar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Title of board</Title>
        <Badge>Sprint 8</Badge>
      </Wrapper>
    </Container>
  );
};

export default StatusBar;
