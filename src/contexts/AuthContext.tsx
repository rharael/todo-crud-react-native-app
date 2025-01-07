import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  isLoggedIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async () => {
    try {
      await AsyncStorage.setItem('@isLoggedIn', 'true');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Erro ao salvar estado de login:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@isLoggedIn');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Erro ao remover estado de login:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
