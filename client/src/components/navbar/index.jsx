import React, { useState } from "react";
import Hamburger from "components/hamburger";
import { NavContainer, Wrapper, Link, Icon } from "./style";
import {
  faInbox,
  faNewspaper,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <Hamburger open={open} setOpen={setOpen} />
      <Wrapper>
        <Link>
          <Icon icon={faInbox} />
          Backlog
        </Link>
        <Link>
          <Icon icon={faMicrosoft} />
          Board
        </Link>
        <Link>
          <Icon icon={faNewspaper} />
          Feed
        </Link>
        <Link>
          <Icon icon={faChartLine} />
          Reports
        </Link>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;
