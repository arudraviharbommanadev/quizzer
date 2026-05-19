export const loadToken = () => {
  try {
    return window.localStorage.getItem('quizzer_token');
  } catch {
    return null;
  }
};

export const loadUser = () => {
  try {
    const user = window.localStorage.getItem('quizzer_user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const saveToken = (token) => {
  try {
    window.localStorage.setItem('quizzer_token', token);
  } catch {
    return null;
  }
};

export const saveUser = (profile) => {
  try {
    window.localStorage.setItem('quizzer_user', JSON.stringify(profile));
  } catch {
    return null;
  }
};
