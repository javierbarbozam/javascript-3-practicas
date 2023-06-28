const getDate = (value) => {
  const date = new Date(value);
  const options = {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString('en-us', options);
};

export { getDate };
