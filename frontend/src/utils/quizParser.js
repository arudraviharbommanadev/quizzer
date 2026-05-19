export const buildQuizPayload = (data) => ({
  ...data,
  questions: data.questions?.map((question, index) => ({
    ...question,
    rank: index + 1,
  })) || [],
});
