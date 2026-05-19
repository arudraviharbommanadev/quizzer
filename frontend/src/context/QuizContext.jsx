import { createContext, useMemo, useState } from 'react';

export const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [results, setResults] = useState([]);

  const value = useMemo(
    () => ({ quiz, setQuiz, attempt, setAttempt, results, setResults }),
    [quiz, attempt, results]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
