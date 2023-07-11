const fetchEvent = async (value) => {
  const response = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${value}`);
  const data = await response.json();
  return data
};

export {fetchEvent}