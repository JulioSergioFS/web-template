import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices

import userReducer from "./slices/user";

import { persistReducer } from "redux-persist";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const userPersistConfig = {
  key: "user",
  storage,
  keyPrefix: "redux-",
  whitelist: ["users", "selectedUser"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export { rootPersistConfig, rootReducer };
