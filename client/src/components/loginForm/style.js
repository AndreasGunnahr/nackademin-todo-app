import styled from "styled-components";
import { Input, P, LinkButton, H1, FlexCol, FlexRow } from "components/shared";

export const FormContainer = styled.form`
  height: 100%;
  flex: 50%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled(FlexCol)`
  margin-bottom: 2rem;
`;

export const FormWrapper = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 2rem;
  &:first-child {
    background: red;
  }
`;

export const InputField = styled(Input)`
  height: 50px;
  padding-left: 0.8rem;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export const LoginButton = styled(Input)`
  font-size: 1rem;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 1.25rem 0;
  margin-right: 1rem;
  cursor: pointer;
`;

export const RegisterButton = styled(LinkButton)`
  font-size: 1rem;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 1.25rem 0;
`;

export const CreateTitle = styled(H1)`
  font-size: 3rem;
  @media (max-width: 1440px) {
    font-size: 2.75rem;
  }
`;

export const CreateSubTitle = styled(H1)`
  font-size: 0.825rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 1px;
  margin-top: 1rem;
`;

export const ForgotPassword = styled(P)`
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const ErrorMessage = styled(P)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.red};
  font-style: normal;
`;

export const Label = styled(P)`
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;
