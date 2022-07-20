import { themes } from "../consts/theme";
import { localStorageService } from "./localStorage";
import { storage_key } from "../consts/storage-key";
import { appConfig } from "../app-config";

const getThemeName = () => localStorageService.getKey(storage_key.theme_name);

const getTheme = () => {
  let name = getThemeName();
  if (name) {
    return themes[name];
  } else {
    themeService.setThemeName(appConfig.defaultTheme);
    name = themeService.getThemeName();
    return themes[name];
  }
};

const setThemeName = themeName => {
  localStorageService.setKey(storage_key.theme_name, themeName);
};

const setThemeInitialized = () => {
  localStorageService.setKey(storage_key.theme_initialize, true);
};

export const themeService = {
  getThemeName,
  getTheme,
  setThemeName,
  setThemeInitialized,
};
