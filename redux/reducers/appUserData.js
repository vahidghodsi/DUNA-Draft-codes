import * as types from "@redux/action-types/appUserData";

const initialState = {
  projects: [],
  projectsStatus: "UNSET", //LAODING, LOADED, ERROR
  rounds: [],
  roundsStatus: "UNSET", //LAODING, LOADED, ERROR
  evaluations: [],
  evaluationsStatus: "UNSET", //LAODING, LOADED, ERROR
};

export default function appReducer(state = initialState, action) {
  // ===== AppUserProjects ==========
  if (action.type === types.updateAppUserProjects) {
    return {
      ...state,
      projects: action.payload,
    };
  }

  if (action.type === types.updateAppUserProjectsStatus) {
    return {
      ...state,
      projectsStatus: action.payload,
    };
  }

  // ===== AppUserRounds ==========
  if (action.type === types.updateAppUserRounds) {
    return {
      ...state,
      rounds: action.payload,
    };
  }

  if (action.type === types.updateAppUserRoundsStatus) {
    return {
      ...state,
      roundsStatus: action.payload,
    };
  }

  // ===== AppUserEvaluations ==========
  if (action.type === types.updateAppUserEvaluations) {
    return {
      ...state,
      evaluations: action.payload,
    };
  }

  if (action.type === types.updateAppUserEvaluationsStatus) {
    return {
      ...state,
      evaluationsStatus: action.payload,
    };
  }

  return state;
}
