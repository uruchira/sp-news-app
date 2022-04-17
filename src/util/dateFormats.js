export const fromISOStringToDate = (isoString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
  };
  return new Date(isoString).toLocaleDateString("en-US", options);
};
