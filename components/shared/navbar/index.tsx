import React from "react";
import { useAppContext } from "../../../context";
import Nav from "./Nav";

function Navbar() {
  const { name } = useAppContext();

  return (
    <header className="sticky top-0 bg-white p-3 flex items-center justify-between">
      <h3 className="text-center">{name}</h3>
      <Nav />
    </header>
  );
}

export default Navbar;
