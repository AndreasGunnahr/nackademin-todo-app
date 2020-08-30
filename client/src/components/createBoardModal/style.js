import styled from "styled-components";
import { FlexRow, H1, P, Button, TextField, Input } from "components/shared";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
  pointer: cursor;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
  z-index: 2000;
  width: 450px;
  height: 450px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  border-radius: 10px;
`;

export const Title = styled(H1)`
  font-size: 1.75rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

export const ModalWrapper = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  border-radius: 3px;
  max-width: 500px;
  height: 100%;
  padding: 2rem;
`;

export const Wrapper = styled(FlexRow)`
  justify-content: space-between;
`;

export const Label = styled(P)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: black;
`;

export const InputField = styled(Input)`
  padding: 0.8rem;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.color.grey};
  border-bottom: 2px solid ${({ theme }) => theme.color.blue};
`;

export const TextArea = styled(TextField)`
  padding: 0.8rem;
  height: 115px;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  border: none;
  background: ${({ theme }) => theme.color.grey};
  border-bottom: 2px solid ${({ theme }) => theme.color.blue};
  color: black;
`;

export const CreateButton = styled(Button)`
  padding: 0.8rem;
  font-size: 0.925rem;
  margin-top: 1rem;
  &:disabled {
    background: ${({ theme }) => theme.color.grey};
  }
`;

export const ErrorMessage = styled(P)`
  font-size: 0.925rem;
  color: ${({ theme }) => theme.color.red};
  font-style: normal;
`;
