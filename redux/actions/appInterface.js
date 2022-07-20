import * as types from "@redux/action-types/appInterface";

export const updateInterface = content => dispatch => {
  dispatch({ type: types.updateInterface, payload: content });
};

export const clearInterface = () => dispatch => {
  dispatch({ type: types.clearInterface });
};
