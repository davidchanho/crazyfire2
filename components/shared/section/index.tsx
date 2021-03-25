import React, { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode;
}

function Section({ header, children }: Props) {
  return (
    <section>
      <header>
        <h2 className="text-center text-3xl font-bold underline mb-3 ">
          {header}
        </h2>
      </header>
      {children}
    </section>
  );
}

export default Section;
