import React from "react";
import { useAppContext } from "../../context";
import BusinessHoursItem from "./BusinessHoursItem";

function BusinessHours() {
  const { businessHours } = useAppContext();

  return (
    <table>
      <caption>Business Hours</caption>
      {businessHours.map((b) => {
        return <BusinessHoursItem key={b.day} {...b} />;
      })}
    </table>
  );
}

export default BusinessHours;
