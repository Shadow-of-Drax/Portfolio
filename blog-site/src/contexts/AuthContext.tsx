import React, { createContext, useState, useEffect } from 'react';

interface AuthContextProps {
  token: string | null;
  userId: string | null;
  username: string | null;
  login: (token: string, userId: string, username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  userId: null,
  username: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const login = (token: string, userId: string, username: string) => {
    setToken(token);
    setUserId(userId);
    setUsername(username);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUsername(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if (token && userId && username) {
      login(token, userId, username);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, userId, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};