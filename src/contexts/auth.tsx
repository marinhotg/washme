import { createContext, useContext, useState } from "react";
import { router } from 'expo-router';

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

	async function signIn(email: string, password: string) {
		console.log('Tentando login com:', email, password);
		if (email === 'teste@email.com' && password === '123456') {
			console.log('Login bem sucedido');
			setIsAuthenticated(true);
			router.replace('/(app)');
		} else {
			console.log('Login falhou');
			throw new Error('Email ou senha inválidos');
		}
	}
  function signOut() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
