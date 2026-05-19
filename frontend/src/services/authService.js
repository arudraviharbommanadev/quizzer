import { loginRequest, registerRequest, joinQuizRequest } from '../api/authApi.js';

export const login = async (credentials) => {
  return loginRequest(credentials);
};

export const register = async (payload) => {
  return registerRequest(payload);
};

export const joinQuiz = async (payload) => {
  return joinQuizRequest(payload);
};
