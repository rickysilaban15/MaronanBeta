"use client"

import { useState, useEffect } from "react"
import { useUser } from "@/components/user-provider"

export function GreetingBanner() {
  const { user } = useUser()
  const [greeting, setGreeting] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const getGreeting = () => {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        return "Selamat Pagi"
      } else if (hour >= 12 && hour < 15) {
        return "Selamat Siang"
      } else if (hour >= 15 && hour < 19) {
        return "Selamat Sore"
      } else {
        return "Selamat Malam"
      }
    }

    setGreeting(getGreeting())

    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) return null

  return (
    <div className="bg-muted/30 rounded-lg p-4 mb-6">
      <p className="text-lg">
        {greeting}, {user ? user.name : "Pengunjung"}! Selamat datang di Maronan Beta.
      </p>
    </div>
  )
}
