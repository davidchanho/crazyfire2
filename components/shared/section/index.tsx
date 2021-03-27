import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Section({ children, ...rest }: Props) {
  return (
    <section className="py-28 w-9/12" {...rest}>
      {children}
    </section>
  );
}

export default Section;
