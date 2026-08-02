"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si hay usuario pero NO es ADMIN, lo devolvemos al Punto de Venta
    if (user && user.role !== 'ADMIN') {
      router.replace('/pos');
    }
  }, [user, router]);

  // Si no hay usuario o no es ADMIN, no renderizamos el contenido
  if (!user || user.role !== 'ADMIN') return null;

  return <>{children}</>;
};