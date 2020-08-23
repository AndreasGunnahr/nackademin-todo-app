import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/login"}>
            <ActionButton>Start your organized journey today!</ActionButton>
          </Link>
        </CallToAction>
        <LottieContainer>
          <Lottie options={defaultOptions} />
        </LottieContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;
