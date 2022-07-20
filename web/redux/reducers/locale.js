import * as types from "../action-types/locale";

const initialState = {
  languageCode: null,
  ltr: false,
  locale: "fa",
};

export default function localeReducer(state = initialState, action) {
  if (action.type === types.SetLanguage) {
    return {
      ...state,
      languageCode: action.payload.languageCode,
      ltr: action.payload.ltr,
      locale: action.payload.locale,
    };
  }
  return state;
}