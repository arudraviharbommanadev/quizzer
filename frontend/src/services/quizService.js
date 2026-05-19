import { createQuizRequest, fetchQuizById, fetchQuizzes, submitQuizRequest, updateQuizRequest } from '../api/quizApi.js';

export const getQuizzes = () => fetchQuizzes();
export const getQuiz = (id) => fetchQuizById(id);
export const createQuiz = (payload) => createQuizRequest(payload);
export const updateQuiz = (id, payload) => updateQuizRequest(id, payload);
export const submitQuiz = (attemptId, payload) => submitQuizRequest(attemptId, payload);
