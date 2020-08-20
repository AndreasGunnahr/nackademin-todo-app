import React from "react";
import Image from "assets/guy.jpg";
import {
  Container,
  Wrapper,
  Title,
  Badge,
  Divider,
  UserCircle,
  AddUserButton,
} from "./style";

const StatusBar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Title of board</Title>
        <Badge>Sprint 8</Badge>
      </Wrapper>
      <Wrapper>
        <UserCircle src={Image} />
        <Divider />
        <AddUserButton>+ Add new user</AddUserButton>
      </Wrapper>
    </Container>
  );
};

export default StatusBar;
