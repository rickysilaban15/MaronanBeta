"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/components/user-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, User, ShoppingBag, Heart, CreditCard, LogOut } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { OrderHistory } from "@/components/profile/order-history"
import { SavedAddresses } from "@/components/profile/saved-addresses"
import { PaymentMethods } from "@/components/profile/payment-methods"

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, updateUserProfile } = useUser()
  const { toast } = useToast()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  useEffect(() => {
    setIsClient(true)
    if (!user) {
      router.push("/masuk")
    } else {
      setProfileData((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        phone: user.phone || "",
      }))
    }
  }, [user, router])

  if (!isClient || !user) {
    return <div className="container mx-auto px-4 py-8">Memuat...</div>
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      updateUserProfile({
        name: profileData.name,
        phone: profileData.phone,
      })

      toast({
        title: "Profil diperbarui",
        description: "Informasi profil Anda telah berhasil diperbarui.",
      })

      setIsLoading(false)
    }, 1000)
  }

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate passwords
    if (profileData.newPassword !== profileData.confirmPassword) {
      toast({
        title: "Password tidak cocok",
        description: "Password baru dan konfirmasi password harus sama.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Password diperbarui",
        description: "Password Anda telah berhasil diperbarui.",
      })

      setProfileData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }))

      setIsLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
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
            <BreadcrumbLink>Profil Saya</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/img/Profil.jpg" alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#profile">
                    <User className="mr-2 h-4 w-4" />
                    Profil Saya
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#orders">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Pesanan Saya
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#wishlist">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#payment">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Metode Pembayaran
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Keluar
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="orders">Pesanan</TabsTrigger>
              <TabsTrigger value="addresses">Alamat</TabsTrigger>
              <TabsTrigger value="payment">Pembayaran</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" id="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Profil</CardTitle>
                  <CardDescription>Perbarui informasi profil Anda di sini.</CardDescription>
                </CardHeader>
                <form onSubmit={handleUpdateProfile}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        placeholder="Nama lengkap Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        disabled
                        placeholder="Email Anda"
                      />
                      <p className="text-sm text-muted-foreground">Email tidak dapat diubah.</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        placeholder="Nomor telepon Anda"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Menyimpan...
                        </>
                      ) : (
                        "Simpan Perubahan"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Ubah Password</CardTitle>
                  <CardDescription>Perbarui password akun Anda di sini.</CardDescription>
                </CardHeader>
                <form onSubmit={handleUpdatePassword}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Password Saat Ini</Label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={profileData.currentPassword}
                        onChange={handleProfileChange}
                        placeholder="Masukkan password saat ini"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Password Baru</Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={profileData.newPassword}
                        onChange={handleProfileChange}
                        placeholder="Masukkan password baru"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={profileData.confirmPassword}
                        onChange={handleProfileChange}
                        placeholder="Konfirmasi password baru"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Menyimpan...
                        </>
                      ) : (
                        "Ubah Password"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="orders" id="orders">
              <OrderHistory />
            </TabsContent>

            <TabsContent value="addresses" id="addresses">
              <SavedAddresses />
            </TabsContent>

            <TabsContent value="payment" id="payment">
              <PaymentMethods />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
