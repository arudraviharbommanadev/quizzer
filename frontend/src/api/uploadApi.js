import api from './axios.js';

export const uploadQuestionsFile = (formData) => api.post('/quizzes/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
