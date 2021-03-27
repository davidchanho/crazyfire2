import React from "react";
import { useAppContext } from "../../context";
import Section from "../shared/section";
import BusinessHoursItem from "./BusinessHoursItem";

function BusinessHours() {
  const { businessHours } = useAppContext();

  return (
    <Section>
      <table className="w-5/12 m-auto">
        <caption>Business Hours</caption>
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
