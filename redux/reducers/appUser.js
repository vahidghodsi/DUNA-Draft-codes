import * as types from "@redux/action-types/appUser";

const initialState = {
  name: "",
};

export default function userReducer(state = initialState, action) {
  if (action.type === types.updateAppUser) {
    // console.log("[USER reducer]:", action.payload );
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === types.signOut) {
    return {
      ...initialState
    };
  }

  return state;
}
