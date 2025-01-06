import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../user/userReducer";

export default configureStore ({
  reducer: {
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});
