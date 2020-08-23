import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "constants/theme";
import GlobalStyle from "constants/globalStyle";

// IMPORT OF COMPONENTS
import Navbar from "components/navbar";

// IMPORT OF PAGES
import Home from "pages/home";
import Board from "pages/board";
import Login from "pages/login";
import Register from "pages/register";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyle />
      <Router>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/board"} component={Board} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
