import React from "react";
import { useAppContext } from "../../context";
import BusinessHoursItem from "./BusinessHoursItem";

function BusinessHours() {
  const { businessHours } = useAppContext();

  return (
    <table>
      <caption>Business Hours</caption>
      <tbody>
        {businessHours.map((b) => {
          return <BusinessHoursItem key={b.day} {...b} />;
        })}
      </tbody>
    </table>
  );
}

export default BusinessHours;
