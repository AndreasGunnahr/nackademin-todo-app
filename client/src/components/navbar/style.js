import styled from "styled-components";
import { FlexRow, LinkButton, Button, headerFont } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.color.blue};
  @media (max-width: 590px) {
    justify-content: flex-end;
  }
  @media (max-width: 470px) {
    height: 58px;
  }
`;

export const Wrapper = styled(FlexRow)`
  flex: 1;
  justify-content: flex-end;
`;

export const AuthWrapper = styled(FlexRow)`
  flex: 1;
  justify-content: center;
  @media (max-width: 590px) {
    display: none;
  }
`;

export const Link = styled(LinkButton)`
  ${headerFont}
  margin-right: 2.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.grey};
  &:last-child {
    margin: 0;
  }
  &:nth-child(2) {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Logo = styled(Link)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.75rem;
  font-size: 1.25rem;
`;

export const SignOutButton = styled(Button)`
  background: ${({ theme }) => theme.color.orange};
  padding: 0.75rem 2rem;
  font-size: 0.825rem;
  letter-spacing: 1px;
`;
