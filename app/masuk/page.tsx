"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useUser } from "@/components/user-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { login, register, checkCredentials } = useUser()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({
    login: {
      email: "",
      password: "",
    },
    register: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [isLoading, setIsLoading] = useState({
    login: false,
    register: false,
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors.login[name as keyof typeof errors.login]) {
      setErrors((prev) => ({
        ...prev,
        login: { ...prev.login, [name]: "" },
      }))
    }
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors.register[name as keyof typeof errors.register]) {
      setErrors((prev) => ({
        ...prev,
        register: { ...prev.register, [name]: "" },
      }))
    }
  }

  const validateLoginForm = () => {
    const newErrors = {
      email: loginData.email ? "" : "Email harus diisi",
      password: loginData.password ? "" : "Password harus diisi",
    }

    setErrors((prev) => ({ ...prev, login: newErrors }))
    return !Object.values(newErrors).some((error) => error)
  }

  const validateRegisterForm = () => {
    const newErrors = {
      name: registerData.name ? "" : "Nama harus diisi",
      email: registerData.email ? "" : "Email harus diisi",
      password: registerData.password ? "" : "Password harus diisi",
      confirmPassword: registerData.confirmPassword
        ? registerData.password !== registerData.confirmPassword
          ? "Password tidak cocok"
          : ""
        : "Konfirmasi password harus diisi",
    }

    setErrors((prev) => ({ ...prev, register: newErrors }))
    return !Object.values(newErrors).some((error) => error)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateLoginForm()) {
      return
    }

    setIsLoading((prev) => ({ ...prev, login: true }))

    // Simulate API call
    setTimeout(() => {
      const user = checkCredentials(loginData.email, loginData.password)

      if (user) {
        login(user)
        toast({
          title: "Login berhasil",
          description: `Selamat datang kembali, ${user.name}!`,
        })

        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/")
        }
      } else {
        toast({
          title: "Login gagal",
          description: "Email atau password salah",
          variant: "destructive",
        })
      }

      setIsLoading((prev) => ({ ...prev, login: false }))
    }, 1000)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateRegisterForm()) {
      return
    }

    setIsLoading((prev) => ({ ...prev, register: true }))

    // Simulate API call
    setTimeout(() => {
      const success = register({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      })

      if (success) {
        toast({
          title: "Registrasi berhasil",
          description: "Silakan login dengan akun baru Anda",
        })

        // Reset form and switch to login tab
        setRegisterData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        })

        // Switch to login tab
        const loginTab = document.getElementById("login-tab") as HTMLButtonElement
        if (loginTab) {
          loginTab.click()
        }
      } else {
        toast({
          title: "Registrasi gagal",
          description: "Email sudah terdaftar, silakan gunakan email lain",
          variant: "destructive",
        })
      }

      setIsLoading((prev) => ({ ...prev, register: false }))
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4 mr-1" />
              Beranda
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Masuk / Daftar</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-md mx-auto">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" id="login-tab">
              Masuk
            </TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Masuk</CardTitle>
                <CardDescription>Masuk ke akun Anda untuk melanjutkan belanja</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className={errors.login.email ? "border-red-500" : ""}
                      placeholder="Masukkan email Anda"
                    />
                    {errors.login.email && <p className="text-sm text-red-500">{errors.login.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Password</Label>
                      <Button variant="link" className="p-0 h-auto text-xs">
                        Lupa password?
                      </Button>
                    </div>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className={errors.login.password ? "border-red-500" : ""}
                      placeholder="Masukkan password Anda"
                    />
                    {errors.login.password && <p className="text-sm text-red-500">{errors.login.password}</p>}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading.login}>
                    {isLoading.login ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      "Masuk"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Daftar</CardTitle>
                <CardDescription>Buat akun baru untuk mulai berbelanja</CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nama Lengkap</Label>
                    <Input
                      id="register-name"
                      name="name"
                      value={registerData.name}
                      onChange={handleRegisterChange}
                      className={errors.register.name ? "border-red-500" : ""}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                    {errors.register.name && <p className="text-sm text-red-500">{errors.register.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      className={errors.register.email ? "border-red-500" : ""}
                      placeholder="Masukkan email Anda"
                    />
                    {errors.register.email && <p className="text-sm text-red-500">{errors.register.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      className={errors.register.password ? "border-red-500" : ""}
                      placeholder="Buat password Anda"
                    />
                    {errors.register.password && <p className="text-sm text-red-500">{errors.register.password}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Konfirmasi Password</Label>
                    <Input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      className={errors.register.confirmPassword ? "border-red-500" : ""}
                      placeholder="Konfirmasi password Anda"
                    />
                    {errors.register.confirmPassword && (
                      <p className="text-sm text-red-500">{errors.register.confirmPassword}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading.register}>
                    {isLoading.register ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      "Daftar"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Akun Demo:</p>
          <p>Admin: admin@maronan.com / admin123</p>
          <p>User: user@maronan.com / user123</p>
        </div>
      </div>
    </div>
  )
}

const handleSubmitUser = async (e) => {
  e.preventDefault()
  const res = await fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama,
      email,
      password
    })
  })
  const result = await res.json()
  console.log('User terdaftar:', result)
}
