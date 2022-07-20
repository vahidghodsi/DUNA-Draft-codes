import * as types from "@redux/action-types/project";

const initialState = {
  projects: null,
};

export default function projectReducer(state = initialState, action) {
  if (action.type === types.GetProjectsResult) {
    return {
      projects: action.payload,
    };
  }
  return state;
}