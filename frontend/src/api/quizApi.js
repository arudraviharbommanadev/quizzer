import api from './axios.js';

export const fetchQuizzes = () => api.get('/quizzes');
export const fetchQuizById = (id) => api.get(`/quizzes/${id}`);
export const createQuizRequest = (payload) => api.post('/quizzes', payload);
export const updateQuizRequest = (id, payload) => api.put(`/quizzes/${id}`, payload);
export const submitQuizRequest = (attemptId, payload) => api.post(`/quizzes/${attemptId}/submit`, payload);
