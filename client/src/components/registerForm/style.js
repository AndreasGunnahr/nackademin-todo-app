import styled from "styled-components";

import { Input, P, LinkButton, H1, FlexCol, FlexRow } from "components/shared";

export const FormContainer = styled.form`
  height: 100%;
  flex: 50%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    flex: 100%;
  }
`;

export const Wrapper = styled(FlexCol)`
  margin-bottom: 2rem;
`;

export const Label = styled(P)`
  font-size: 1rem;
  margin-bottom: 0.75rem;
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
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const RegisterButton = styled(Input)`
  font-size: 1rem;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 1.25rem 0;
  margin-top: 1rem;
  cursor: pointer;
`;

export const CreateTitle = styled(H1)`
  font-size: 3rem;

  @media (max-width: 1440px) {
    font-size: 2.5rem;
  }
`;

export const CreateSubTitle = styled(H1)`
  font-size: 0.825rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const ExistingAccount = styled(P)`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Highlight = styled(LinkButton)`
  background: none;
  padding: 0;
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color.orange};
`;

export const ErrorMessage = styled(P)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.red};
  font-style: normal;
  margin-bottom: 1rem;
`;
