import styled from "styled-components";
import { P, Button, FlexRow,TextField,Input } from "components/shared";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto 0.5rem auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: -2px 3px 3px 0px rgba(176, 176, 176, 1);
`;

export const Wrapper = styled(FlexRow)`
  justify-content: space-between;
`;

export const InputField = styled(Input)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.825rem;
  background: ${({ theme }) => theme.color.grey};
  border-bottom: 2px solid ${({ theme }) => theme.color.blue};
  &::placeholder {
    font-style: italic;
  }
`;

export const TextArea = styled(TextField)`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.825rem;
  border: none;
  background: ${({ theme }) => theme.color.grey};
  border-bottom: 2px solid ${({ theme }) => theme.color.blue};
  &::placeholder {
    font-style: italic;
  }
`

export const CreateButton = styled(Button)``;

export const CancelButton = styled(Button)``;

export const ErrorMessage = styled(P)`
  font-size: 0.825rem;
  color: ${({ theme }) => theme.color.red};
  margin-bottom: 1rem;
  font-style: normal;
`;
