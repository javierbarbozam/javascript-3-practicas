const getDate = (value) => {
  const date = new Date(value);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString('en-us', options);
};

export { getDate };
