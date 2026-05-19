import api from './axios.js';

export const fetchResults = (quizId) => api.get(`/results/${quizId}`);
export const fetchParticipantResult = (attemptId) => api.get(`/results/attempt/${attemptId}`);
