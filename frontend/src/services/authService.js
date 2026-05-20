import { loginRequest, joinQuizRequest } from '../api/authApi.js';

export const login = async (credentials) => {
  return loginRequest(credentials);
};

export const joinQuiz = async (payload) => {
  return joinQuizRequest(payload);
};
