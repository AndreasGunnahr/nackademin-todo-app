import styled from "styled-components";
import { P, FlexRow, } from "components/shared";

export const Container = styled.div`
  width: 95%;
  background: ${({ theme, laneId }) => laneId === "COMPLETED" ? theme.color.green : theme.color.white };
  padding: 1rem;
  cursor: grab;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  box-shadow: -2px 3px 3px 0px rgba(176, 176, 176, 1);
`;

export const Title = styled(P)`
  font-size: 0.925rem;
  font-weight: 900;
  font-style: normal;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  margin: 0.75rem 0;
`;

export const Description = styled(P)`
  font-size: 0.725rem;
  margin-top: 0.5rem;
  font-style: normal;
  width: 30ch;
  word-break: break-all;
  white-space: normal;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const TopContainer = styled(FlexRow)`
  justify-content: space-between;
`;

export const DeleteButton = styled.a`
  font-size: 1rem;
  cursor: pointer;
`;
