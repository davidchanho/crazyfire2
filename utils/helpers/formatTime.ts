export const formatTime = (time: number | string) => {
  if (typeof time === "string" && time === "CLOSED") {
    return "CLOSED";
  }

  if (typeof time === "number") {
    if (time < 13) return `${time} am`;
    return `${time - 12} pm`;
  }

  return null;
};
