// import { appService } from "../../services/app";
// import { isRequesting, isRequested, errorOccurred } from "./request";
import * as types from "../action-types/app";

// ===== AppStatus actions ==========
export const updateAppStatus = appStatus => dispatch => {
  dispatch({ type: types.updateAppStatus, payload: appStatus });
};

// ===== AppMessage actions ==========
let clearAppMessageTimeout = "";
export const updateAppMessage = message => (dispatch, getState) => {
  const { messages } = getState().app;
  let tempMessages = [...messages];

  // ** updating the clear mechanism, to avoid problem with multiple messages
  if (messages.length === 0 || message.content !== messages.slice(-1)[0].content) {
    // ** adding time stamp here
    tempMessages.push({...message, created_at : new Date().getTime()});
    dispatch({ type: types.updateAppMessage, payload: tempMessages });

    if (message.type === "alert") {
      let duration = message.duration || 0;
      // ** clearTimeout var holds the instance of timeout function, so with a new message, old instance should be removed
      clearTimeout(clearAppMessageTimeout);
      clearAppMessageTimeout = setTimeout(() => {
        // console.log("timeout-actions:");
        dispatch(clearAppMessage());
      }, duration + 5000);
    }
  }
};

export const deleteAppMessage = message => (dispatch, getState) => {
  const { messages } = getState().app;
  let tempMessages = messages.filter(msg => msg.time !== message.time);
  dispatch({ type: types.updateAppMessage, payload: tempMessages });
};

export const clearAppMessage = () => (dispatch, getState) => {
  const { messages } = getState().app;
  let tempMessages = messages.filter(msg => msg.type !== "alert");
  dispatch({ type: types.updateAppMessage, payload: tempMessages });
};

// ===== AppSideMenu actions ==========
export const updateAppSideMenu = appSideMenu => dispatch => {
  dispatch({ type: types.updateAppSideMenu, payload: appSideMenu });
};

export const toggleAppSideMenu = () => (dispatch, getState) => {
  const { sideMenu } = getState().app;
  let tempSideMenu = { ...sideMenu, toggled: !sideMenu.toggled };
  dispatch(updateAppSideMenu(tempSideMenu));
};

// export const menuFetched = categories => ({
//   type: types.MenuFetched,
//   payload: categories,
// });

// export const fetchMenu = () => async dispatch => {
//   await dispatch(isRequesting());
//   appService
//     .fetchMenu()
//     .then(async result => {
//       await dispatch(isRequested());
//       await dispatch(menuFetched(result.data.data.categories));
//     })
//     .catch(error => {
//       console.log(error);
//       dispatch(errorOccurred());
//     });
// };
