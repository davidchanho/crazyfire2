import React from "react";
import { useAppContext } from "../../../context";

function Navbar() {
  const { name } = useAppContext();

  return (
    <header className="p-3">
      <h3 className="text-center">{name}</h3>
    </header>
  );
}

export default Navbar;
