import React from "react";
import styled from "styled-components";
import LoginForm from "components/loginForm";
import Paper from "assets/paper.jpg";

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.grey};
  @media (max-width: 470px) {
    height: calc(100vh - 58px);
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 60%;
  background: url(${Paper}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Login = () => {
  return (
    <Container>
      <ImageContainer />
      <LoginForm />
    </Container>
  );
};

export default Login;
