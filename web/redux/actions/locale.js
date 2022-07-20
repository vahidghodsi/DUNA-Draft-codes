import * as types from "../action-types/locale";
import { localeService } from "../../services/locale";

export const setLanguage = () => ({
  type: types.SetLanguage,
  payload: {
    languageCode: localeService.getActiveLanguage(),
    ltr: localeService.isLTR(),
    locale: localeService.getDefaultLocale(),
  },
});

export const initLanguage = () => (dispatch) => {
  dispatch(setLanguage());
  localeService.setDirElement();
  localeService.setLangElement();
};