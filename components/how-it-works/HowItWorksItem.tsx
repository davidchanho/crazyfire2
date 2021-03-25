import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

function HowItWorksItem({ title, icon }: Props) {
  return (
    <li className="mx-2 flex flex-col items-center">
      <h3 className="text-center">{title}</h3>
      {icon}
    </li>
  );
}

export default HowItWorksItem;
