import styled from "styled-components";
import { H1, A, Span } from "components/shared";

export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.color.grey};
  @media (max-width: 470px) {
    height: 58px;
  }
`;

export const Title = styled(H1)`
  font-size: 1.25rem;
  letter-spacing: 1px;
`;

export const Badge = styled(Span)`
  padding: 0.4rem 1rem;
  margin-left: 2rem;
  border-radius: 10px;
  color: white;
  background: ${({ theme }) => theme.color.blue};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const UserCircle = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
`;

export const Divider = styled.div`
  height: 50%;
  border-left: 3px solid ${({ theme }) => theme.color.blue};
  margin: 0 2rem;
`;

export const AddUserButton = styled(A)`
  font-size: 1rem;

  color: ${({ theme }) => theme.color.blue};
`;
