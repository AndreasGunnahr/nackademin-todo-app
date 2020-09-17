import React from "react";
import styled from "styled-components";
import RegisterForm from "components/registerForm";
import Image from "assets/register.svg";

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.grey};
  @media (max-width: 470px) {
    height: calc(100vh - 58px);
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: url(${Image}) no-repeat;
  background-size: contain;
  background-position: center;
`;

const Register = () => {
  return (
    <Container>
      <RegisterForm />
      <ImageWrapper>
        <ImageContainer />
      </ImageWrapper>
    </Container>
  );
};

export default Register;
