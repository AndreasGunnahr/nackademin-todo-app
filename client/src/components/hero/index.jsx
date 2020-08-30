import React from "react";
import Lottie from "react-lottie";
import {
  Container,
  Wrapper,
  CallToAction,
  Title,
  ActionButton,
  LottieContainer,
} from "./style";
import animationData from "assets/animationLoop.json";

const defaultOptions = {
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <CallToAction>
          <Title>
            Getting organized <br /> is a sign of self-respect.
          </Title>
          <ActionButton to="/login">
            Start your organized journey today!
          </ActionButton>
        </CallToAction>
        <LottieContainer>
          <Lottie options={defaultOptions} />
        </LottieContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;
