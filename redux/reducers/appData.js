import * as types from "@redux/action-types/appData";

const initialState = {
  project: undefined,
  projectStatus: "UNSET", //LAODING, LOADED, ERROR
  round: undefined,
  roundStatus: "UNSET", //LAODING, LOADED, ERROR
  evaluation: undefined,
  evaluationStatus: "UNSET", //LAODING, LOADED, ERROR
};

export default function appReducer(state = initialState, action) {
  // ===== AppUserProjects ==========
  if (action.type === types.updateAppDataProject) {
    return {
      ...state,
      project: action.payload,
    };
  }

  if (action.type === types.updateAppDataProjectStatus) {
    return {
      ...state,
      projectStatus: action.payload,
    };
  }

  // ===== AppRound ==========
  if (action.type === types.updateAppDataRound) {
    return {
      ...state,
      round: action.payload,
    };
  }

  if (action.type === types.updateAppDataRoundStatus) {
    return {
      ...state,
      roundStatus: action.payload,
    };
  }

  // ===== AppEvaluation ==========
  if (action.type === types.updateAppDataEvaluation) {
    return {
      ...state,
      evaluation: action.payload,
    };
  }

  if (action.type === types.updateAppDataEvaluationStatus) {
    return {
      ...state,
      evaluationStatus: action.payload,
    };
  }

  return state;
}
