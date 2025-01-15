/* eslint-disable @typescript-eslint/no-explicit-any */
export const userActionTypes = {
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT",
};

export const returnUserData = (userData) => {
  return { type: userActionTypes.SET_USER, user: userData };
};
