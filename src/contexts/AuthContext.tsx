import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem('@isLoggedIn', 'true');
      await AsyncStorage.setItem('@accessToken', token);
      setIsLoggedIn(true);
      setAccessToken(token);
    } catch (error) {
      console.error('Erro ao salvar estado de login:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@isLoggedIn');
      await AsyncStorage.removeItem('@accessToken');
      setIsLoggedIn(false);
      setAccessToken(null);
    } catch (error) {
      console.error('Erro ao remover estado de login:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
