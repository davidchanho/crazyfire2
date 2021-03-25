import Link from "next/link";
import React from "react";
import { useAppContext } from "../../../context";

function Navbar() {
  const { name } = useAppContext();

  return (
    <header className="p-3 flex items-center justify-between">
      <h3 className="text-center">{name}</h3>
      <nav>
        <ul className="flex">
          <li className="mx-2">
            <Link href="#menu">menu</Link>{" "}
          </li>
          <li className="mx-2">
            <Link href="#hours">hours</Link>
          </li>
          <li className="mx-2">
            <Link href="#address">address</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
