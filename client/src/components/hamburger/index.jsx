import React from "react";
import { Lines, Container } from "./style";

const Hamburger = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <Lines />
      <Lines />
      <Lines />
    </Container>
  );
};

export default Hamburger;
