const setKey = (keyName, keyValue) => {
  typeof window !== "undefined" && window.localStorage.setItem(keyName, keyValue);
};

const getKey = keyName => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(keyName);
  }
};

const removeKey = keyName => {
  typeof window !== "undefined" && window.localStorage.removeItem(keyName);
};

export const localStorageService = {
  setKey,
  getKey,
  removeKey,
};
