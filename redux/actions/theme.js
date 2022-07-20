import * as types from "../action-types/theme";
import { themeService } from "../../services/theme";
import { themes } from "../../consts/theme";

export const setActiveTheme = () => ({
  type: types.SetActiveTheme,
  payload: themeService.getThemeName() ?? themeService.setThemeName(themes.light.name),
});

export const initTheme = () => dispatch => {
  dispatch(setActiveTheme());
};
