import React from "react";
import useBusinessHours from "./useBusinessHours";

interface Props {
  day: string;
  open: number | "CLOSED";
  close: number | "CLOSED";
}

function BusinessHoursItem({ day, open, close }: Props) {
  const { renderTime } = useBusinessHours({ open, close });

  return (
    <tr>
      <th className="capitalize">{day}</th>
      {renderTime()}
    </tr>
  );
}

export default BusinessHoursItem;
