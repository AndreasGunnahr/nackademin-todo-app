import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "constants/theme";
import GlobalStyle from "constants/globalStyle";

// IMPORT OF COMPONENTS
import Navbar from "components/navbar";
import Routes from "./routes";
import AuthProvider from "store/authContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Routes />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
