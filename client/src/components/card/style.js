import styled from "styled-components";
import { H1, P, FlexRow } from "components/shared";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
  cursor: pointer;
`;

export const Title = styled(H1)`
  font-size: 1rem;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Description = styled(P)`
  font-size: 0.825rem;
  margin-top: 0.5rem;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const TopContainer = styled(FlexRow)`
  justify-content: space-between;
`;

export const DeleteButton = styled.a`
  font-size: 1rem;
`;
