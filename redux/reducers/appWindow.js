import * as types from "@redux/action-types/appWindow";

const initialState = {
  //or appVisibilityState
  focused: false,
  visibility: "hidden",
  readyState: "unset",
  height: 0,
  width: 0,
};

export default function appReducer(state = initialState, action) {
  // ===== AppWindow ==========
  if (action.type === types.updateAppWindow) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
}
