import React from "react";
import { useAppContext } from "../../context";
import BHItem from "./BHItem";

function BusinessHours() {
  const { businessHours } = useAppContext();

  return (
    <table>
      <caption>Business Hours</caption>
      {businessHours.map((b) => {
        return <BHItem key={b.day} {...b} />;
      })}
    </table>
  );
}

export default BusinessHours;
