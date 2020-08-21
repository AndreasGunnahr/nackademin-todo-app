import React from "react";
import { Container, Title } from "./style";

const LaneHeader = ({ label, cards, title, current, target }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default LaneHeader;
