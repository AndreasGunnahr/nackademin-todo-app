import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Hamburger from "components/hamburger";
import {
  NavContainer,
  AuthWrapper,
  Wrapper,
  Link,
  Icon,
  Logo,
  SignOutButton,
} from "./style";
import { faNewspaper, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

import { useAuthContext } from "store/authContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, onLogout } = useAuthContext();
  const history = useHistory();

  return (
    <NavContainer>
      <Logo to="/">Plan&Create</Logo>
      <Hamburger open={open} setOpen={setOpen} />
      {isAuthenticated ? (
        <>
          <AuthWrapper>
            <Link to="/boards">
              <Icon icon={faMicrosoft} />
              Boards
            </Link>
            <Link to="#">
              <Icon icon={faNewspaper} />
              Feed
            </Link>
            <Link to="#">
              <Icon icon={faChartLine} />
              Reports
            </Link>
          </AuthWrapper>
          <SignOutButton
            onClick={() => {
              onLogout();
              history.push("/login");
            }}
          >
            LOG OUT
          </SignOutButton>
        </>
      ) : (
        <Wrapper>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Wrapper>
      )}
    </NavContainer>
  );
};

export default Navbar;
