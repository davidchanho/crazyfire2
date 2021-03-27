import React, { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren<{}>) {
  return <header className='section-title'>{children}</header>;
}

export default SectionTitle;
