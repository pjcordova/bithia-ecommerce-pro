"use client";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { isAuthenticated, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(isAdmin ? '/dashboard' : '/pos')
    } else {
      router.replace('/login')
    }
  }, [isAuthenticated, isAdmin, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-bithia-bg">
      <div className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
    </div>
  )
}
