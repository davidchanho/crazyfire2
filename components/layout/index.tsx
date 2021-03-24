import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import Head from "../head";
import Navbar from "../navbar";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
