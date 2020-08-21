import styled, { css } from "styled-components";
import theme from "constants/theme";

export const headerFont = css`
  font-family: "Montserrat", sans-serif;
`;

export const textFont = css`
  font-family: "Raleway", sans-serif;
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
`;

export const H1 = styled.h1`
  ${headerFont};
  color: ${theme.color.black};
  font-size: 2rem;
  font-weight: 900;
  //   @media (min-width: 415px) {
  //     font-size: 2.25rem;
  //   }
  //   @media (min-width: 768px) {
  //     font-size: 2.5rem;
  //   }
  //   @media (min-width: 1024px) {
  //     font-size: 3.25rem;
  //   }
  //   @media (min-width: 1440px) {
  //     font-size: 3.75rem;
  //   }
  //
`;

export const H2 = styled.input``;
export const H3 = styled.input``;
export const H4 = styled.input``;

export const P = styled.p`
  ${textFont};
  color: ${theme.color.black};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  // @media (min-width: 415px) {
  //   font-size: 1rem;
  // }

  // @media (min-width: 1440px) {
  //   font-size: 1.15rem;
  // }
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
