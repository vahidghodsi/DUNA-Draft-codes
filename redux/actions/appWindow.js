import * as types from "../action-types/appWindow";

// ===== AppWindow actions ==========
export const updateAppWindow = WindowState => dispatch => {
  dispatch({ type: types.updateAppWindow, payload: WindowState });
};
