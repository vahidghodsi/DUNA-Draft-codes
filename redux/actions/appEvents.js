import * as types from "../action-types/appEvents";

// ===== AppWindow actions ==========
export const updateAppEvents = events => dispatch => {
  dispatch({ type: types.updateAppEvents, payload: events });
};

export const updateAppEventsKeyboard = keyboardEventObj => dispatch => {
  dispatch({ type: types.updateAppEventskeyboard, payload: keyboardEventObj });
};

export const clearAppEventsKeyboard = () => dispatch => {
  dispatch({ type: types.clearAppEventskeyboard });
};
