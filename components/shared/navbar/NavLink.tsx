import Link from "next/link";
import React from "react";

interface Props {
  link: string;
}

function NavLink({ link }: Props) {
  return (
    <li className="mx-2">
      <Link href={`#${link}`}>{link}</Link>
    </li>
  );
}

export default NavLink;
