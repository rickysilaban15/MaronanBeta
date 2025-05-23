"use client"

import { useUser } from "@/components/user-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default function AdminPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    // Redirect if not admin
    if (!user || user.role !== "admin") {
      router.push("/masuk")
    }
  }, [user, router])

  if (!user || user.role !== "admin") {
    return null
  }

  return <AdminDashboard />
}
