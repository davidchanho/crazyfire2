import React, { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren<{}>) {
  return (
    <header>
      <h2 className="text-center text-3xl font-bold underline mb-3 ">
        {children}
      </h2>
    </header>
  );
}

export default SectionTitle;
