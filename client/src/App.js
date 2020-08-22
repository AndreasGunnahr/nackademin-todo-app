import React from "react";
import GlobalStyle from "constants/globalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "constants/theme";
// import useModal from "hooks/useModal";

// IMPORT OF COMPONENTS
import Navbar from "components/navbar";
import StatusBar from "components/statusBar";
import Draggable from "components/draggable";
// import Modal from "components/modal";

const Container = styled.div``;

const App = () => {
  // const { isShowing, toggle } = useModal();

  // const handleCardClick = (id, metadata, laneId) => {
  //   console.log(metadata);
  //   toggle();
  // };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <StatusBar />
        <Draggable />
      </Container>
      {/* {isShowing && (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          // content={content}
          // setTodos={setTodos}
          // todos={todos}
        />
      )} */}
    </ThemeProvider>
  );
};

export default App;
