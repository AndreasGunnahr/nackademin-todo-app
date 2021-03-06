import styled from "styled-components";
import {
  FlexRow,
  LinkButton,
  Button,
  headerFont,
  textFont,
} from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;

  padding: 0 2rem;
  background: ${({ theme }) => theme.color.blue};
  @media (max-width: 500px) {
    justify-content: space-between;
    height: 58px;
  }
  // @media (max-width: 470px) {
  // height: 58px;
  // }
`;

export const Wrapper = styled(FlexRow)`
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const AuthWrapper = styled(FlexRow)`
  flex: 1;
  justify-content: center;
  @media (max-width: 500px) {
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

export const Logo = styled(LinkButton)`
  ${headerFont}
  text-transform: uppercase;
  font-size: 1rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 3px;
  border-bottom: 2px solid;
  border-radius: 0;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
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
