import { evaluationService } from "@services/evaluation";
import { projectService } from "@services/project";
import { roundService } from "@services/round";
import * as types from "../action-types/appUserData";

// ===== PROJECTS ========================================
// ===== AppUserDataProjects actions ==========
export const updateAppUserProjects = appUserProjects => dispatch => {
  dispatch({ type: types.updateAppUserProjects, payload: appUserProjects });
};

export const updateAppUserProjectsStatus = appUserProjectsStatus => dispatch => {
  dispatch({ type: types.updateAppUserProjectsStatus, payload: appUserProjectsStatus });
};

export const getProject= (project_id) => dispatch => {
  dispatch(updateAppUserProjectsStatus("LOADING"));
  return projectService
    .getProject(project_id)
    .then(result => {
      dispatch(updateAppUserProjects(result.data));
      dispatch(updateAppUserProjectsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserProjectsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getProjects = (count) => dispatch => {
  dispatch(updateAppUserProjectsStatus("LOADING"));
  return projectService
    .getProjects(count)
    .then(result => {
      dispatch(updateAppUserProjects(result.data));
      dispatch(updateAppUserProjectsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserProjectsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getProfileProjects = (profile_id) => dispatch => {
  dispatch(updateAppUserProjectsStatus("LOADING"));
  return projectService
    .getProfileProjects(profile_id)
    .then(result => {
      dispatch(updateAppUserProjects(result.data));
      dispatch(updateAppUserProjectsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserProjectsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};

// ===== ROUND ========================================
// ===== AppUserDataRounds actions ==========
export const updateAppUserRounds = appuserRounds => dispatch => {
  dispatch({ type: types.updateAppUserRounds, payload: appuserRounds });
};

export const updateAppUserRoundsStatus = appuserRoundsStatus => dispatch => {
  dispatch({ type: types.updateAppUserRoundsStatus, payload: appuserRoundsStatus });
};

export const getRound = (round_id) => dispatch => {
  dispatch(updateAppUserRoundsStatus("LOADING"));
  // if(round_id) {}
  return roundService
    .getRound(round_id)
    .then(result => {
      dispatch(updateAppUserRounds(result.data));
      dispatch(updateAppUserRoundsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserRoundsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getRounds = (count) => dispatch => {
  dispatch(updateAppUserRoundsStatus("LOADING"));
  return roundService
    .getRounds(count)
    .then(result => {
      dispatch(updateAppUserRounds(result.data));
      dispatch(updateAppUserRoundsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserRoundsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getProfileRounds = (profile_id) => dispatch => {
  dispatch(updateAppUserRoundsStatus("LOADING"));
  return roundService
    .getProfileRounds(profile_id)
    .then(result => {
      dispatch(updateAppUserRounds(result.data));
      dispatch(updateAppUserRoundsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserRoundsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};

// ===== EVALUATION ========================================
// ===== AppUserDataEvaluations actions ==========
export const updateAppUserEvaluations = appuserEvaluations => dispatch => {
  dispatch({ type: types.updateAppUserEvaluations, payload: appuserEvaluations });
};

export const updateAppUserEvaluationsStatus = appuserEvaluationsStatus => dispatch => {
  dispatch({ type: types.updateAppUserEvaluationsStatus, payload: appuserEvaluationsStatus });
};

export const getEvaluation = (evaluation_id) => dispatch => {
  dispatch(updateAppUserEvaluationsStatus("LOADING"));
  return evaluationService
    .getevaluation(evaluation_id)
    .then(result => {
      dispatch(updateAppUserEvaluations(result.data));
      dispatch(updateAppUserEvaluationsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserEvaluationsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getEvaluations = (count) => dispatch => {
  dispatch(updateAppUserEvaluationsStatus("LOADING"));
  return evaluationService
    .getevaluations(count)
    .then(result => {
      dispatch(updateAppUserEvaluations(result.data));
      dispatch(updateAppUserEvaluationsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserEvaluationsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
export const getProfileEvaluations = (evalation_id) => dispatch => {
  dispatch(updateAppUserEvaluationsStatus("LOADING"));
  return evaluationService
    .getProfileEvaluations(evalation_id)
    .then(result => {
      dispatch(updateAppUserEvaluations(result.data));
      dispatch(updateAppUserEvaluationsStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppUserEvaluationsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
