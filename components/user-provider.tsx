"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  name: string
  email: string
  role: "user" | "admin"
  phone?: string
}

type UserContextType = {
  user: User | null
  login: (user: User) => void
  logout: () => void
  register: (userData: { name: string; email: string; password: string }) => boolean
  checkCredentials: (email: string, password: string) => User | null
  updateUserProfile: (userData: { name: string; phone?: string }) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

// Simulasi database pengguna
const DEMO_USERS = [
  {
    name: "Admin",
    email: "admin@maronan.com",
    password: "admin123",
    role: "admin" as const,
    phone: "081234567890",
  },
  {
    name: "Pengguna",
    email: "user@maronan.com",
    password: "user123",
    role: "user" as const,
    phone: "081234567891",
  },
]

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<Array<(typeof DEMO_USERS)[0]>>(DEMO_USERS)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Load user from localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error parsing user from localStorage:", error)
        localStorage.removeItem("user")
      }
    }

    // Load registered users from localStorage
    const savedUsers = localStorage.getItem("registeredUsers")
    if (savedUsers) {
      try {
        const parsedUsers = JSON.parse(savedUsers)
        setUsers([...DEMO_USERS, ...parsedUsers])
      } catch (error) {
        console.error("Error parsing registered users:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user))
      } else {
        localStorage.removeItem("user")
      }
    }
  }, [user, isClient])

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const register = (userData: { name: string; email: string; password: string }) => {
    // Check if email already exists
    if (users.some((u) => u.email === userData.email)) {
      return false
    }

    const newUser = {
      ...userData,
      role: "user" as const,
    }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)

    // Save registered users to localStorage (excluding demo users)
    const registeredUsers = updatedUsers.filter((u) => !DEMO_USERS.some((demo) => demo.email === u.email))

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

    return true
  }

  const checkCredentials = (email: string, password: string): User | null => {
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      return {
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        phone: foundUser.phone,
      }
    }

    return null
  }

  const updateUserProfile = (userData: { name: string; phone?: string }) => {
    if (!user) return

    const updatedUser = {
      ...user,
      ...userData,
    }

    setUser(updatedUser)

    // Update user in users array
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, name: userData.name, phone: userData.phone || u.phone } : u,
    )

    setUsers(updatedUsers)

    // Save updated users to localStorage
    const registeredUsers = updatedUsers.filter((u) => !DEMO_USERS.some((demo) => demo.email === u.email))
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  }

  return (
    <UserContext.Provider value={{ user, login, logout, register, checkCredentials, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
