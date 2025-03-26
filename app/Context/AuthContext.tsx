// context/AuthContext.tsx
"use client";

import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

// 1. Defina a interface que descreve os dados e funções do contexto
interface AuthContextData {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  loading: boolean;
}

// 2. Crie o contexto com um valor padrão
const AuthContext = createContext<AuthContextData>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

// 3. Cria o Provider, que envolverá os componentes que precisam acessar o contexto
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Verifica se há usuário no localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // Atualiza o localStorage sempre que o "user" mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
