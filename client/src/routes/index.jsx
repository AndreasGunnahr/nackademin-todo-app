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

const PrivateRoute = ({ component, path, ...options }) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/login" />;
};

const PublicRoute = ({ component, path, ...options }) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) return <Redirect to="/boards" />;
  return <Route {...options} component={component} />;
};

const Router = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/boards" component={Boards} />
      <PrivateRoute path="/boards/:id" component={Board} />
    </Switch>
  );
};

export default Router;
