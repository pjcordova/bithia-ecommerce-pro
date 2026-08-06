"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      const cleanEmail = email.toLowerCase().trim();

      if (cleanEmail === 'ceo@bithia.com' && password === 'admin123') {
        setUser({ id: 'admin-1', name: 'CEO Bithia', email: 'ceo@bithia.com', role: 'ADMIN' });
        toast.success('¡Bienvenido de vuelta, CEO!');
        return { success: true };
      }

      if (cleanEmail === 'staff@bithia.com' && password === 'staff123') {
        setUser({ id: 'staff-1', name: 'Staff Bithia', email: 'staff@bithia.com', role: 'USER' });
        toast.success('¡Turno iniciado con éxito!');
        return { success: true };
      }

      toast.error('Credenciales incorrectas');
      return { success: false, error: 'Correo o contraseña incorrectos' };
    } catch (error) {
      toast.error('Error al iniciar sesión');
      return { success: false, error: 'Ocurrió un error inesperado al iniciar sesión' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
    toast.info('Sesión cerrada');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};