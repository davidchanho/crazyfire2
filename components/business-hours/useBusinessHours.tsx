import React from "react";

const useBusinessHours = ({ open, close }) => {
  const formatTime = (time: number | string) => {
    if (typeof time === "string" && time === "CLOSED") {
      return "CLOSED";
    }

    if (typeof time === "number") {
      if (time < 13) {
        return `${time} am`;
      }

      return `${time - 12} pm`;
    }

    return null;
  };

  const renderTime = () => {
    if (open === "CLOSED" && close === "CLOSED") {
      return <td className="text-red-400">CLOSED</td>;
    }

    return (
      <td>
        {formatTime(open)} - {formatTime(close)}
      </td>
    );
  };

  return { renderTime };
};

export default useBusinessHours;
