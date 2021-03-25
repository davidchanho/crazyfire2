import React from "react";
import Layout from "../components/shared/layout";
import Address from "../components/address";
import BusinessHours from "../components/business-hours";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Menu from "../components/menu";

export default function HomePage() {
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
