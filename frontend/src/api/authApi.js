import api from './axios.js';

export const loginRequest = (payload) => api.post('/auth/login', payload);
export const registerRequest = (payload) => api.post('/auth/register', payload);
export const joinQuizRequest = (payload) => api.post('/participant/join', payload);
