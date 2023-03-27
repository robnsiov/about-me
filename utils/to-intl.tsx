export const toIntl = (date: Date) => {
  //   console.log(date);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};
