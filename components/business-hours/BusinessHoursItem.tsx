import React from "react";
import { formatTime } from "../../utils/helpers/formatTime";

interface Props {
  day: string;
  open: number | "CLOSED";
  close: number | "CLOSED";
}

function BusinessHoursItem({ day, open, close }: Props) {
  return (
    <tr>
      <th className="capitalize">{day}</th>
      <td>
        {formatTime(open)} - {formatTime(close)}
      </td>
    </tr>
  );
}

export default BusinessHoursItem;
