import { combineReducers } from "redux";

import { settingReducer } from "./setting";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  setting: settingReducer,
  user: userReducer,
});

export default rootReducer;
