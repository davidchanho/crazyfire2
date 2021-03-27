import React from "react";
import Address from "../components/address";
import BusinessHours from "../components/business-hours";
import Contact from "../components/contact";
import HowItWorks from "../components/how-it-works";
import Menu from "../components/menu";
import Layout from "../components/shared/layout";

export default function HomePage() {
  return (
    <Layout>
      <HowItWorks />
      <div id="menu" />
      <Menu />
      <div id="hours" />
      <BusinessHours />
      <div id="address" />
      <Address />
      <div id="contact" />
      <Contact />
    </Layout>
  );
}
