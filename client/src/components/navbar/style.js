import styled from "styled-components";
import { A, FlexRow } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.color.blue};
  @media (max-width: 470px) {
    height: 58px;
  }
`;

export const Wrapper = styled(FlexRow)`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Link = styled(A)`
  margin-right: 2.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.color.grey};
  &:last-child {
    margin: 0;
  }
  &:nth-child(2) {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.75rem;
  font-size: 1.25rem;
`;
