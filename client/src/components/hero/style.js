import styled from "styled-components";
import { H1, FlexRow, Button } from "components/shared";

export const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.grey};
  @media (max-width: 470px) {
    height: calc(100vh - 58px);
  }
`;

export const Wrapper = styled(FlexRow)`
  max-width: 1600px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const CallToAction = styled.div`
  flex: 1;
  margin-right: 4rem;
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const Title = styled(H1)`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.blue};
  @media (min-width: 415px) {
    font-size: 2.25rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 4rem;
  }
  @media (min-width: 1600px) {
    font-size: 4.5rem;
  }
`;

export const ActionButton = styled(Button)`
  margin-top: 3rem;
  font-size: 1.35rem;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  width: 500px;
  padding: 1.75rem 0;

  @media (max-width: 1440px) {
    width: 400px;
    padding: 1.5rem 0;
    font-size: 1.25rem;
  }
  @media (max-width: 1101px) {
    padding: 1.25rem 0;
    width: 100%;
  }
`;

export const LottieContainer = styled.div`
  flex: 1;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    height: 450px;
    width: 450px;
    margin-top: -5rem;
  }
`;
