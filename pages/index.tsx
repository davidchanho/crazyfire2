import React from "react";
import Address from "../components/address";
import BusinessHours from "../components/business-hours";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Layout from "../components/layout";
import Menu from "../components/menu";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Menu />
      <BusinessHours />
      <Address />
    </Layout>
  );
}
