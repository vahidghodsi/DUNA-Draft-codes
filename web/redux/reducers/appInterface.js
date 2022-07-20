import * as types from "@redux/action-types/appInterface";

const initialState = {
  content: null,
};

export default function userReducer(state = initialState, action) {
  if (action.type === types.updateInterface) {
    // console.log("[USER reducer]:", action.payload );
    return {
      ...state,
      ...action.payload
    };
  }

  if (action.type === types.clearInterface) {
    return {
      ...initialState
    };
  }

  return state;
}
