import * as types from "@redux/action-types/appEvents";

const initialState = {
  keyboardEvent: null,
  // keyboardEvent: {
  //   key: "",
  //   keyCode: "",
  //   shiftKey: false,
  //   altKey: false,
  // },
};

export default function appReducer(state = initialState, action) {
  // ===== AppEvents ==========
  if (action.type === types.updateAppEvents) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === types.updateAppEventskeyboard) {
    return {
      ...state,
      keyboardEvent : action.payload,
    };
  }

  if (action.type === types.clearAppEventskeyboard) {
    return {
      ...state,
      keyboardEvent : null,
    };
  }

  return state;
}
