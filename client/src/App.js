import React from "react";
import GlobalStyle from "constants/globalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "constants/theme";

// IMPORT OF COMPONENTS
import Navbar from "components/navbar";
import StatusBar from "components/statusBar";
import Draggable from "components/draggable";

const Container = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <StatusBar />
        <Draggable />
      </Container>
    </ThemeProvider>
  );
};

export default App;
