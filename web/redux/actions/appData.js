import { evaluationService } from "@services/evaluation";
import { projectService } from "@services/project";
import { roundService } from "@services/round";
import * as types from "@redux/action-types/appData";

// ===== PROJECTS ========================================
// ===== AppDataProject actions ==========
export const updateAppDataProject = appDataProject => dispatch => {
  dispatch({ type: types.updateAppDataProject, payload: appDataProject });
};

export const updateAppDataProjectStatus = appDataProjectStatus => dispatch => {
  dispatch({ type: types.updateAppDataProjectStatus, payload: appDataProjectStatus });
};

export const getProject = project_id => dispatch => {
  dispatch(updateAppDataProjectStatus("LOADING"));
  return projectService
    .getProject(project_id)
    .then(result => {
      dispatch(updateAppDataProject(result.data));
      dispatch(updateAppDataProjectStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppDataProjectStatus("ERROR", error));
      // utilService.handleError(error);
    });
};

// ===== ROUND ========================================
// ===== AppDataRound actions ==========
export const updateAppDataRound = appDataRound => dispatch => {
  dispatch({ type: types.updateAppDataRound, payload: appDataRound });
};

export const updateAppDataRoundStatus = appDataRoundStatus => dispatch => {
  dispatch({ type: types.updateAppDataRoundStatus, payload: appDataRoundStatus });
};

export const getRound = (round_id, date) => dispatch => {
  dispatch(updateAppDataRoundStatus("LOADING"));
  return roundService
    .getRound(round_id, date)
    .then(result => {
      dispatch(updateAppDataRound(result.data));
      dispatch(updateAppDataRoundStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppDataRoundStatus("ERROR", error));
      // utilService.handleError(error);
    });
};

// ===== EVALUATION ========================================
// ===== AppDataEvaluation actions ==========
export const updateAppDataEvaluation = appDataEvaluation => dispatch => {
  dispatch({ type: types.updateAppDataEvaluation, payload: appDataEvaluation });
};

export const updateAppDataEvaluationStatus = appDataEvaluationStatus => dispatch => {
  dispatch({ type: types.updateAppDataEvaluationStatus, payload: appDataEvaluationStatus });
};

export const getEvaluation = evaluation_id => dispatch => {
  dispatch(updateAppDataEvaluationStatus("LOADING"));
  return evaluationService
    .getEvaluation(evaluation_id)
    .then(result => {
      dispatch(updateAppDataEvaluation(result.data));
      dispatch(updateAppDataEvaluationStatus("LOADED"));
    })
    .catch(error => {
      dispatch(updateAppDataEvaluationStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
