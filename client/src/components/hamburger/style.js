import styled from "styled-components";

export const Container = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: inline-block;
  }

  div {
    :nth-child(1) {
      transform: ${({ open }) =>
        open ? "translateY(9px) rotateZ(45deg)" : ""};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(-9px) rotateZ(-45deg)" : ""};
    }
  }
`;

export const Lines = styled.div`
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  :nth-child(2) {
    width: 25px;
    margin-left: auto;
  }
`;
