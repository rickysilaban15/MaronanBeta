"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useUser } from "@/components/user-provider"

export function UserProfile() {
  const { user, updateUser } = useUser()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: user?.name || "Ricky",
    email: user?.email || "rickysilaban77@gmail.com",
    phone: user?.phone || "087818894504",
    bio: user?.bio || "Saya suka berbelanja di Maronan",
    avatar: user?.avatar || "/placeholder.svg?height=100&width=100",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Update user data
    updateUser({
      ...user,
      ...formData,
    })

    setIsEditing(false)

    toast({
      title: "Profil Diperbarui",
      description: "Informasi profil Anda telah berhasil diperbarui.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Card className="w-full md:w-1/3 p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={formData.avatar || "/placeholder.svg"} alt={formData.name} />
              <AvatarFallback>{formData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="text-center">
              <h3 className="text-lg font-medium">{formData.name}</h3>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
            </div>

            {!isEditing && (
              <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
                Edit Profil
              </Button>
            )}
          </div>
        </Card>

        <CardContent className="w-full md:w-2/3 p-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatar">URL Avatar</Label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={4}
              />
            </div>

            {isEditing && (
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                  Batal
                </Button>
                <Button type="submit">Simpan Perubahan</Button>
              </div>
            )}
          </form>
        </CardContent>
      </div>
    </div>
  )
}
