import * as types from "@redux/action-types/pitch";

const initialState = {
  dev_mode : true,
  totalSlides : 0,
  totalSections : 0,
  slide: {
    index: 0,
    title: "",
    section: "",
    totalStages: 0,
    currentStage: 0,
  },
};

export default function appReducer(state = initialState, action) {
  // ===== Pitch ==========
  if (action.type === types.updatePitch) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === types.updatePitchSlide) {
    return {
      ...state,
      slide: { ...state.slide, ...action.payload },
    };
  }

  return state;
}
