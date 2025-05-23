"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { PlusCircle, Pencil, Trash2, Home, Building } from "lucide-react"

// Sample address data
const initialAddresses = [
  {
    id: 1,
    label: "Rumah",
    name: "Ricky Silaban",
    phone: "087818894504",
    street: "Jl. Sudirman No. 123",
    city: "Jakarta",
    province: "DKI Jakarta",
    postalCode: "12930",
    isDefault: true,
    icon: Home,
  },
  {
    id: 2,
    label: "Kantor",
    name: "Felicia",
    phone: "081234125645",
    street: "Jl. Gatot Subroto No. 456",
    city: "Jakarta",
    province: "DKI Jakarta",
    postalCode: "12950",
    isDefault: false,
    icon: Building,
  },
]

export function SavedAddresses() {
  const { toast } = useToast()
  const [addresses, setAddresses] = useState(initialAddresses)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentAddress, setCurrentAddress] = useState<any>(null)

  const [formData, setFormData] = useState({
    id: 0,
    label: "",
    name: "",
    phone: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    isDefault: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData({
      id: 0,
      label: "",
      name: "",
      phone: "",
      street: "",
      city: "",
      province: "",
      postalCode: "",
      isDefault: false,
    })
  }

  const handleAddAddress = () => {
    const newAddress = {
      ...formData,
      id: addresses.length + 1,
      icon: formData.label === "Rumah" ? Home : Building,
    }

    setAddresses((prev) => [...prev, newAddress])

    toast({
      title: "Alamat Ditambahkan",
      description: "Alamat baru telah berhasil ditambahkan.",
    })

    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditAddress = () => {
    setAddresses((prev) => prev.map((addr) => (addr.id === formData.id ? { ...formData, icon: addr.icon } : addr)))

    toast({
      title: "Alamat Diperbarui",
      description: "Alamat telah berhasil diperbarui.",
    })

    resetForm()
    setIsEditDialogOpen(false)
  }

  const handleDeleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))

    toast({
      title: "Alamat Dihapus",
      description: "Alamat telah berhasil dihapus.",
    })
  }

  const handleSetDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    )

    toast({
      title: "Alamat Utama Diubah",
      description: "Alamat utama telah berhasil diubah.",
    })
  }

  const openEditDialog = (address: any) => {
    setFormData(address)
    setCurrentAddress(address)
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Alamat Tersimpan</h3>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Tambah Alamat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Tambah Alamat Baru</DialogTitle>
              <DialogDescription>Tambahkan alamat pengiriman baru untuk memudahkan proses checkout.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="label">Label Alamat</Label>
                  <Select onValueChange={(value) => handleSelectChange("label", value)} defaultValue={formData.label}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih label" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Rumah">Rumah</SelectItem>
                      <SelectItem value="Kantor">Kantor</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nama Penerima</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="street">Alamat Lengkap</Label>
                <Textarea id="street" name="street" value={formData.street} onChange={handleChange} rows={2} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Kota</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="province">Provinsi</Label>
                  <Input id="province" name="province" value={formData.province} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">Kode Pos</Label>
                <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Batal
              </Button>
              <Button onClick={handleAddAddress}>Simpan Alamat</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className={address.isDefault ? "border-primary" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <address.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                  <CardTitle className="text-base">{address.label}</CardTitle>
                </div>
                {address.isDefault && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Utama</span>
                )}
              </div>
            </CardHeader>

            <CardContent className="pb-2">
              <div className="space-y-1 text-sm">
                <p className="font-medium">{address.name}</p>
                <p>{address.phone}</p>
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.province}, {address.postalCode}
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" onClick={() => openEditDialog(address)}>
                  <Pencil className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteAddress(address.id)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Hapus
                </Button>
              </div>

              {!address.isDefault && (
                <Button variant="outline" size="sm" onClick={() => handleSetDefault(address.id)}>
                  Jadikan Utama
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Alamat</DialogTitle>
            <DialogDescription>Perbarui informasi alamat pengiriman Anda.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-label">Label Alamat</Label>
                <Select onValueChange={(value) => handleSelectChange("label", value)} defaultValue={formData.label}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih label" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Rumah">Rumah</SelectItem>
                    <SelectItem value="Kantor">Kantor</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-name">Nama Penerima</Label>
                <Input id="edit-name" name="name" value={formData.name} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-phone">Nomor Telepon</Label>
              <Input id="edit-phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-street">Alamat Lengkap</Label>
              <Textarea id="edit-street" name="street" value={formData.street} onChange={handleChange} rows={2} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-city">Kota</Label>
                <Input id="edit-city" name="city" value={formData.city} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-province">Provinsi</Label>
                <Input id="edit-province" name="province" value={formData.province} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-postalCode">Kode Pos</Label>
              <Input id="edit-postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleEditAddress}>Simpan Perubahan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
