import styled from "styled-components";
import { H1, P, FlexCol, FlexRow, Button, textFont } from "components/shared";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2.5% 2.5%;
  background: ${({ theme }) => theme.color.grey};
  @media (max-width: 470px) {
    height: calc(100vh - 58px);
  }
`;

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Title = styled(H1)`
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const TopWrapper = styled(FlexRow)`
  justify-content: space-between;
  max-width: 1600px;
  margin: 1rem auto 2rem auto;
`;

export const CreateBoard = styled(Button)`
  padding: 0.8rem;
  font-size: 0.925rem;
`;
export const VerticalDivider = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.orange};
  width: 4px;
  height: 70%;
  border-radius: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CardWrapper = styled(FlexCol)``;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 125px;
  max-height: 150px;
  background: ${({ isOpen, theme }) =>
    isOpen ? "rgba(0,0,0,.6)" : theme.color.white};
  border-radius: 10px;
  padding: 1.25rem;
  cursor: pointer;
  box-shadow: -2px 3px 3px 0px rgba(176, 176, 176, 1);
  display: flex;
`;

export const CardTitle = styled(H1)`
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

export const CardDescription = styled(P)`
  font-size: 0.925rem;
  margin: 0.5rem 0 0 1.5rem;
`;

export const EditButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  // margin: 0.25rem 0.5rem 0 0;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.color.black};
  background: none;
  z-index: 1000;
  padding: 1rem;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  // border-radius: 10px;
`;

export const DropDownHeader = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  background: none;
  padding: 0.5rem 0.75rem;
  text-align: right;
  margin: 0 0 0 auto;
  background: ${({ isOpen, theme }) => (isOpen ? theme.color.white : "")};
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  ${textFont}
  width: 125px;
  background: ${({ theme }) => theme.color.white};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.color.black};
  padding: 0.5rem 1rem;
  // text-align: center;
  &:hover {
    background: ${({ theme }) => theme.color.grey};
  }
  &:last-child {
    &:hover {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;
