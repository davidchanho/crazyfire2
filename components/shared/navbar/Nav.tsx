import React from "react";
import { useAppContext } from "../../../context";
import NavLink from "./NavLink";

function Nav() {
  const { links } = useAppContext();

  return (
    <nav>
      <ul className="flex">
        {links.map((link) => {
          return <NavLink key={link} link={link} />;
        })}
      </ul>
    </nav>
  );
}

export default Nav;
