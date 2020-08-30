import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "store/authContext";
// import decode from "jwt-decode";

// IMPORT OF PAGES
import Home from "pages/home";
import Boards from "pages/boards";
import Board from "pages/board";
import Login from "pages/login";
import Register from "pages/register";

const PrivateRoute = ({ component, ...options }) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/login" />;
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/boards" component={Boards} />
      <PrivateRoute path="/boards/:id" component={Board} />
    </Switch>
  );
};

export default Router;
