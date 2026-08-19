"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { loginConCredenciales, obtenerSesionActual, cerrarSesionAction } from '@/app/actions/auth';

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
  // Empieza en true: mientras no sepamos si hay una cookie de sesión válida,
  // no podemos decidir si mostrar el contenido o mandar al login.
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let activo = true;
    obtenerSesionActual().then(res => {
      if (!activo) return;
      if (res.success) setUser(res.user);
      setLoading(false);
    });
    return () => { activo = false };
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await loginConCredenciales(email, password);

      if (res.success && res.user) {
        setUser(res.user);
        toast.success(res.user.role === 'ADMIN' ? '¡Bienvenida de vuelta!' : '¡Turno iniciado con éxito!');
        return { success: true };
      }

      toast.error(res.error || 'Credenciales incorrectas');
      return { success: false, error: res.error || 'Correo o contraseña incorrectos' };
    } catch (error) {
      toast.error('Error al iniciar sesión');
      return { success: false, error: 'Ocurrió un error inesperado al iniciar sesión' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    cerrarSesionAction();
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