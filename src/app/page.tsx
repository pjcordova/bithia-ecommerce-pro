"use client";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { isAuthenticated, isAdmin } = useAuth() as any
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login')
    } else if (isAdmin) {
      router.replace('/dashboard')
    } else {
      router.replace('/pos')
    }
  }, [isAuthenticated, isAdmin, router])

  return null
}