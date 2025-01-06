import { createAction} from "@reduxjs/toolkit";


const initialStateUser = {
  token: "",
  username: "",
};


export const LOGIN = createAction("user/login");
export const LOGOUT = createAction("user/logout");


const userReducer = (state = initialStateUser, action: any) => {
  switch (action.type) {
    case LOGIN.type:
      return ({ ...state, state: action.payload });
    case LOGOUT.type:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;

// const userReducer2 = createReducer(initialStateUser, (builder) => {
//   builder
//     .addCase(login, (state, action) => {
//       state.username = action.payload
//     })
//     .addCase(logout, (state) => {
//       state.initialStateUser;
//     });
// });