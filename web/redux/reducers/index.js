import { combineReducers } from "redux";

import appReducer from "./app";
import appWindowReducer from "./appWindow";
import appEvents from "./appEvents";
import appInterfaceReducer from "./appInterface";
import appDataReducer from "./appData";
import appUserReducer from "./appUser";
import appUserDataReducer from "./appUserData";
import themeReducer from "./theme";
import localeReducer from "./locale";
import pitchReducer from "./pitch";
// import projectReducer from "./project";
// import requestReducer from "./request";

const rootReducer = combineReducers({
  app: appReducer,
  appWindow: appWindowReducer,
  appEvents: appEvents,
  appInterface: appInterfaceReducer, // ** EXPERIMENT 
  appData: appDataReducer,
  appUser: appUserReducer,
  appUserData: appUserDataReducer,
  locale: localeReducer,
  theme: themeReducer,
  pitch: pitchReducer,
  // project: projectReducer,
  // request: requestReducer,
});

export default rootReducer;
