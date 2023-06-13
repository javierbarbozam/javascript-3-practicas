const getDate = (value) => {
  const date = new Date(value);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

export { getDate };
