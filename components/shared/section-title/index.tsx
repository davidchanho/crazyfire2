import React, { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren<{}>) {
  return (
    <header className="font-bold underline text-5xl text-center mb-12">
      {children}
    </header>
  );
}

export default SectionTitle;
