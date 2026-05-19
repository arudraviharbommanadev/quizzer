import { fetchParticipantResult, fetchResults } from '../api/resultApi.js';

export const getResults = (quizId) => fetchResults(quizId);
export const getParticipantResult = (attemptId) => fetchParticipantResult(attemptId);
