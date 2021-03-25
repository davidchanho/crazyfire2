import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

function HIWItem({ title, icon }: Props) {
  return (
    <li className="mx-2 flex flex-col items-center">
      <h3 className="text-center font-bold underline">{title}</h3>
      {icon}
    </li>
  );
}

export default HIWItem;
