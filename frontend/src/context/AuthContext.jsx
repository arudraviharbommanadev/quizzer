import { createContext, useEffect, useMemo, useState } from 'react';
import { getItem, removeItem, setItem } from '../utils/localStorage.js';
import * as authService from '../services/authService.js';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getItem('quizzer_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    const { token, user: profile } = response?.data || {};
    if (token && profile) {
      setItem('quizzer_token', token);
      setItem('quizzer_user', JSON.stringify(profile));
      setUser(profile);
    }
    return response;
  };

  const register = async (payload) => {
    const response = await authService.register(payload);
    return response;
  };

  const logout = () => {
    removeItem('quizzer_token');
    removeItem('quizzer_user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout, loading }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
