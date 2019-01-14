export const receiveData = data => ({
  type: "RECEIVE_DATA",
  payload: data
});

export const dummyAction = () => ({ type: "DUMMY_ACTION" });

export const checkoutAction = () => ({ type: "CHECKOUT_REQUEST" });
