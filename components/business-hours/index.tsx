import React from "react";
import { useAppContext } from "../../context";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import BusinessHoursItem from "./BusinessHoursItem";

function BusinessHours() {
  const { businessHours } = useAppContext();

  return (
    <Section>
      <SectionTitle>Business Hours</SectionTitle>
      <table className="w-5/12 m-auto">
        <tbody>
          {businessHours.map((b) => {
            return <BusinessHoursItem key={b.day} {...b} />;
          })}
        </tbody>
      </table>
    </Section>
  );
}

export default BusinessHours;
