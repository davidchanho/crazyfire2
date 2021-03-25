import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Section({ children, ...rest }: Props) {
  return <section {...rest}>{children}</section>;
}

export default Section;
