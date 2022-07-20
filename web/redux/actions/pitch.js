import * as types from "../action-types/pitch";

// ===== AppWindow actions ==========
export const updatePitch = pitchState => dispatch => {
  dispatch({ type: types.updatePitch, payload: pitchState });
};

export const togglePitchDevMode = () => (dispatch, getState) => {
  const { dev_mode } = getState().pitch;
  dispatch({ type: types.updatePitch, payload: { dev_mode: !dev_mode } });
};

export const updatePitchSlide = pitchSlideState => dispatch => {
  dispatch({ type: types.updatePitchSlide, payload: pitchSlideState });
};

export const updatePitchSlideTotalStages = elementStage => (dispatch, getState) => {
  const { slide } = getState().pitch;
  if (elementStage > slide.totalStages) {
    dispatch({ type: types.updatePitchSlide, payload: { totalStages: elementStage } });
  }
};
