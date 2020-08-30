import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "constants/theme";

export const headerFont = css`
  font-family: "Montserrat", sans-serif;
`;

export const textFont = css`
  font-family: "Raleway", sans-serif;
`;

export const TextField = styled.textarea`
  ${textFont};
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const Input = styled.input`
  ${textFont};
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const LinkButton = styled(Link)`
  ${textFont};
  font-size: 0.825rem;
  padding: 0.5rem;
  color: ${theme.color.white};
  background: ${theme.color.blue};
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
`;

export const Button = styled.button`
  ${textFont};
  font-size: 0.825rem;
  padding: 0.5rem;
  color: ${theme.color.white};
  background: ${theme.color.blue};
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
`;

export const H1 = styled.h1`
  ${headerFont};
  color: ${theme.color.black};
  font-size: 2rem;
  font-weight: 900;
`;

export const P = styled.p`
  ${textFont};
  color: ${theme.color.black};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  ${textFont};
  color: ${theme.color.black};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const A = styled.a`
  ${headerFont};
  color: ${theme.color.black};
  font-weight: 900;
  font-size: 16px;
  line-height: 1.4;
  text-decoration: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
