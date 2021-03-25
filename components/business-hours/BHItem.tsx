import React from "react";
import { formatTime } from "../../utils/helpers/formatTime";

interface BHItemProps {
  day: string;
  open: number | "CLOSED";
  close: number | "CLOSED";
}

function BHItem({ day, open, close }: BHItemProps) {
  return (
    <tr>
      <th className="capitalize">{day}</th>
      <td>
        {formatTime(open)} - {formatTime(close)}
      </td>
    </tr>
  );
}

export default BHItem;
