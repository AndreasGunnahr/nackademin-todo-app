import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background: ${({ theme }) => theme.color.white};
    overflow-x: hidden;
    

  }

  .dREOdA{
    max-width: 95%;
    margin: 0 auto;
  }

  a.sc-fznzOf.cTpshl{
    width: 95%;
    margin: 0 auto;
  }

  .react-trello-board{
    padding: 1rem;
  }

`;

export default GlobalStyle;
