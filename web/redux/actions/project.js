import * as types from "@redux/action-types/project";
import { projectService } from "@services/project";
import { updateAppUserProjects, updateAppUserProjectsStatus } from "./appUserData";
// import { updateAppStatus } from "./app";
// import { errorOccurred, isRequested, isRequesting } from "./request";

export const getProjectsResult = data => ({
  type: types.GetProjectsResult,
  payload: data,
});

export const getProjects = () => dispatch => {
  // dispatch(isRequesting());
  // dispatch(updateAppStatus("LOADING"));
  dispatch(updateAppUserProjectsStatus("LOADING"));

  return projectService
    .getProjects()
    .then(result => {
      dispatch(getProjectsResult(result.data)); // should be removed later
      // dispatch(isRequested());
      // dispatch(updateAppStatus("LOADED"));
      dispatch(updateAppUserProjects(result.data));
      dispatch(updateAppUserProjectsStatus("LOADED"));
    })
    .catch(error => {
      // dispatch(errorOccurred());
      // dispatch(updateAppStatus("ERROR"));
      dispatch(updateAppUserProjectsStatus("ERROR", error));
      // utilService.handleError(error);
    });
};
