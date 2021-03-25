import React from "react";
import { useAppContext } from "../../../context";

function Footer() {
  const { name, slogan } = useAppContext();

  return (
    <footer className="text-center text-white bg-black py-3">
      <h3>{name}</h3>
      <p>{slogan}</p>
      <small>
        Copyright © {new Date().getFullYear()} {name}. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
