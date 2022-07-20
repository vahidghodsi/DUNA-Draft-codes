import * as types from "@redux/action-types/app";

const initialState = {
  status: "NORMAL", //LOADING, ERROR
  messages: [],
  sideMenu: {
    toggled: false,
  },
};

export default function appReducer(state = initialState, action) {
  // ===== AppStatus ==========
  if (action.type === types.updateAppStatus) {
    return {
      ...state,
      status: action.payload,
    };
  }

  // ===== AppMessage ==========
  if (action.type === types.updateAppMessage) {
    return {
      ...state,
      messages: action.payload,
    };
  }

  // ===== AppSideMenu ==========
  if (action.type === types.updateAppSideMenu) {
    return {
      ...state,
      sideMenu: action.payload,
    };
  }

  return state;
}
