import { userActionTypes } from "./action";

const userInitialState = {
  user: {
    token: "",
    username: "",
    widgets: {},
  },
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        user: {
          token: action.user ? action.user.token : "",
          username: action.user ? action.user.username : "",
          widgets: action.user ? action.user.widgets : {},
        },
      };
    case userActionTypes.LOGOUT:
      return {
        ...state,
        user: {
          token: "",
          username: "",
          widgets: {},
        },
      };
    default:
      return state;
  }
}
