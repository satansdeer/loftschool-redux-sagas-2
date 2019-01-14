export function fetchResource(resourceName) {
  switch (resourceName) {
    case "users":
      return returnWithDelay(
        [{ name: "John" }, { name: "Jane" }, { name: "Jim" }],
        1000
      );
    case "comments":
      return returnWithDelay(
        [
          { text: "Hello, i'm comment" },
          { text: "Some comment" },
          { text: "Another comment" }
        ],
        1000
      );
    default:
      return null;
  }
}

const returnWithDelay = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
};

export const buyCart = data => {
  return returnWithDelay(data, 1000);
};
