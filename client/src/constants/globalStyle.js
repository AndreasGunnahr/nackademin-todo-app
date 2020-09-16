import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
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
    max-height: calc(100vh - 140px);
  }

  .gclEPe{
    position: absolute;
    bottom: 0;
    margin: 0;
    margin-bottom: .25rem;
  }

`;

export default GlobalStyle;
