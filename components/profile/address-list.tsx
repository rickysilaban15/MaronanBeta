"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Plus, Edit, Trash2, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Dummy address data
const initialAddresses = [
  {
    id: "1",
    name: "Rumah",
    recipient: "Felicia",
    phone: "081234567890",
    address: "Jl. bangkong No. 123",
    city: "Batam",
    province: "Kepulauan Riau",
    postalCode: "12345",
    isDefault: true,
  },
  {
    id: "2",
    name: "Kantor",
    recipient: "Yohana",
    phone: "081234567890",
    address: "Jl. Bisnis No. 456, Gedung ABC Lantai 5",
    city: "Medan Kota",
    province: "Sumatera Utara",
    postalCode: "20210",
    
    isDefault: false,
  },
]

export function AddressList() {
  const { toast } = useToast()
  const [addresses, setAddresses] = useState(initialAddresses)
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState<any>(null)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    recipient: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    isDefault: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleAddAddress = () => {
    setEditingAddress(null)
    setFormData({
      id: "",
      name: "",
      recipient: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      isDefault: false,
    })
    setIsDialogOpen(true)
  }

  const handleEditAddress = (address: any) => {
    setEditingAddress(address)
    setFormData({
      id: address.id,
      name: address.name,
      recipient: address.recipient,
      phone: address.phone,
      address: address.address,
      city: address.city,
      province: address.province,
      postalCode: address.postalCode,
      isDefault: address.isDefault,
    })
    setIsDialogOpen(true)
  }

  const handleDeleteAddress = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus alamat ini?")) {
      setAddresses((prev) => prev.filter((address) => address.id !== id))
      toast({
        title: "Alamat dihapus",
        description: "Alamat telah berhasil dihapus.",
      })
    }
  }

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
    toast({
      title: "Alamat utama diubah",
      description: "Alamat utama telah berhasil diubah.",
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (editingAddress) {
        // Update existing address
        setAddresses((prev) =>
          prev.map((address) => {
            if (address.id === editingAddress.id) {
              return { ...formData, id: address.id }
            }
            // If setting a new default address, unset the previous default
            if (formData.isDefault && address.isDefault) {
              return { ...address, isDefault: false }
            }
            return address
          }),
        )
        toast({
          title: "Alamat diperbarui",
          description: "Alamat telah berhasil diperbarui.",
        })
      } else {
        // Add new address
        const newAddress = {
          ...formData,
          id: `${addresses.length + 1}`,
        }
        // If setting a new default address, unset the previous default
        if (newAddress.isDefault) {
          setAddresses((prev) => [...prev.map((address) => ({ ...address, isDefault: false })), newAddress])
        } else {
          setAddresses((prev) => [...prev, newAddress])
        }
        toast({
          title: "Alamat ditambahkan",
          description: "Alamat baru telah berhasil ditambahkan.",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Daftar Alamat</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddAddress}>
              <Plus className="h-4 w-4 mr-2" />
              Tambah Alamat
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingAddress ? "Edit Alamat" : "Tambah Alamat Baru"}</DialogTitle>
              <DialogDescription>
                {editingAddress
                  ? "Perbarui informasi alamat Anda di bawah ini."
                  : "Masukkan informasi alamat baru Anda di bawah ini."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Label Alamat</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Contoh: Rumah, Kantor"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Nama Penerima</Label>
                    <Input
                      id="recipient"
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap penerima"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nomor telepon penerima"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Nama jalan, nomor rumah, RT/RW, dll."
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="province">Provinsi</Label>
                    <Select value={formData.province} onValueChange={(value) => handleSelectChange("province", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih provinsi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DKI Jakarta">DKI Jakarta</SelectItem>
                        <SelectItem value="Jawa Barat">Jawa Barat</SelectItem>
                        <SelectItem value="Jawa Tengah">Jawa Tengah</SelectItem>
                        <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                        <SelectItem value="Bali">Bali</SelectItem>
                        {/* Add more provinces */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Kota/Kabupaten</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Nama kota/kabupaten"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Kode Pos</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Kode pos"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isDefault"
                    name="isDefault"
                    checked={formData.isDefault}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="isDefault" className="text-sm font-normal">
                    Jadikan sebagai alamat utama
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Menyimpan...
                    </>
                  ) : (
                    "Simpan Alamat"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {addresses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Anda belum memiliki alamat tersimpan</p>
            <Button className="mt-4" onClick={handleAddAddress}>
              <Plus className="h-4 w-4 mr-2" />
              Tambah Alamat
            </Button>
          </div>
        ) : (
          addresses.map((address) => (
            <Card key={address.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{address.name}</h4>
                      {address.isDefault && (
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          Utama
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium mt-1">{address.recipient}</p>
                    <p className="text-sm">{address.phone}</p>
                    <p className="text-sm mt-2">
                      {address.address}, {address.city}, {address.province}, {address.postalCode}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEditAddress(address)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteAddress(address.id)}
                      disabled={address.isDefault}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {!address.isDefault && (
                      <Button variant="outline" size="sm" onClick={() => handleSetDefault(address.id)}>
                        <Check className="h-4 w-4 mr-2" />
                        Jadikan Utama
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
