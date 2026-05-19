export const getItem = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return null;
  }
};

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    return null;
  }
};
