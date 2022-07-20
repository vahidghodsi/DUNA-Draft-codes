import * as types from "@redux/action-types/appUser";
import { userService } from "@services/user";
import { updateAppStatus } from "./app";
// import { errorOccurred, isRequested, isRequesting } from "./request";

export const getUser = (id) => dispatch => {
  dispatch(updateAppStatus("LOADING"));
  return userService
    .getUser(id)
    .then(result => {
      dispatch({ type: types.updateAppUser, payload: result.data });
      dispatch(updateAppStatus("LOADED"));
    })
    .catch(err => {
      console.log(err);
      // utilService.handleError(error);
    });
};

export const getUserByEmail = (email) => dispatch => {
  dispatch(updateAppStatus("LOADING"));
  return userService
    .getUserByEmail(email)
    .then(result => {
      dispatch({ type: types.updateAppUser, payload: result.data });
      dispatch(updateAppStatus("LOADED"));
    })
    .catch(err => {
      console.log(err);
      // utilService.handleError(error);
    });
};

export const signOut = () => dispatch => {
  dispatch({type: types.signOut});
};


/* ===== REFERENCE ========== */

// export const signIn = () => dispatch => {
//   dispatch(isRequesting());
//   return userService
//     .getUser()
//     .then(result => {
//       // dispatch({ type: types.updateUser, payload: result.data });
//       dispatch(isRequested());
//     })
//     .catch(error => {
//       dispatch(errorOccurred());
//       // utilService.handleError(error);
//     });
// };