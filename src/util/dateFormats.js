export const fromISOStringToDate = (isoString) => {
  const options = {
    dateStyle: "full",
  };
  return new Date(isoString).toLocaleDateString("en-US", options);
};
