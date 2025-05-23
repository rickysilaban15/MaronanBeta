"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Plus, Edit, Trash2, CheckCircle2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PaymentMethod = {
  id: string
  type: "card" | "bank" | "ewallet"
  name: string
  details: string
  isDefault: boolean
  cardType?: string
  lastFour?: string
  expiryDate?: string
  bankName?: string
  accountNumber?: string
  ewalletType?: string
  ewalletNumber?: string
}

// Sample payment methods
const samplePaymentMethods: PaymentMethod[] = [
  {
    id: "pm-1",
    type: "card",
    name: "Visa",
    details: "**** **** **** 1234",
    isDefault: true,
    cardType: "visa",
    lastFour: "1234",
    expiryDate: "12/25",
  },
  {
    id: "pm-2",
    type: "bank",
    name: "Bank BCA",
    details: "1234567890",
    isDefault: false,
    bankName: "BCA",
    accountNumber: "1234567890",
  },
  {
    id: "pm-3",
    type: "ewallet",
    name: "DANA",
    details: "081234567890",
    isDefault: false,
    ewalletType: "DANA",
    ewalletNumber: "081234567890",
  },
]

export function PaymentMethods() {
  const { toast } = useToast()
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(samplePaymentMethods)
  const [isEditing, setIsEditing] = useState(false)
  const [currentMethod, setCurrentMethod] = useState<PaymentMethod | null>(null)
  const [paymentType, setPaymentType] = useState<"card" | "bank" | "ewallet">("card")

  const handleAddPaymentMethod = (type: "card" | "bank" | "ewallet") => {
    setIsEditing(false)
    setCurrentMethod(null)
    setPaymentType(type)
  }

  const handleEditPaymentMethod = (method: PaymentMethod) => {
    setIsEditing(true)
    setCurrentMethod(method)
    setPaymentType(method.type)
  }

  const handleDeletePaymentMethod = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus metode pembayaran ini?")) {
      setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
      toast({
        title: "Metode pembayaran dihapus",
        description: "Metode pembayaran telah berhasil dihapus.",
      })
    }
  }

  const handleSetDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
    toast({
      title: "Metode pembayaran utama diperbarui",
      description: "Metode pembayaran utama telah berhasil diperbarui.",
    })
  }

  const handleSavePaymentMethod = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: isEditing ? "Metode pembayaran diperbarui" : "Metode pembayaran ditambahkan",
      description: isEditing
        ? "Metode pembayaran telah berhasil diperbarui."
        : "Metode pembayaran baru telah berhasil ditambahkan.",
    })
  }

  const getPaymentIcon = (type: string) => {
    return <CreditCard className="h-5 w-5" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Metode Pembayaran</CardTitle>
        <CardDescription>Kelola metode pembayaran Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="card">Kartu Kredit/Debit</TabsTrigger>
            <TabsTrigger value="bank">Rekening Bank</TabsTrigger>
            <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="flex justify-end mb-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => handleAddPaymentMethod("card")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Metode Pembayaran
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{isEditing ? "Edit Metode Pembayaran" : "Tambah Metode Pembayaran"}</DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue={paymentType} onValueChange={(value) => setPaymentType(value as any)}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Kartu Kredit/Debit</TabsTrigger>
                      <TabsTrigger value="bank">Rekening Bank</TabsTrigger>
                      <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card">
                      <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Nomor Kartu</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            defaultValue={
                              currentMethod?.type === "card" ? "•••• •••• •••• " + currentMethod.lastFour : ""
                            }
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Nama Pemilik Kartu</Label>
                            <Input
                              id="cardName"
                              placeholder="Nama sesuai kartu"
                              defaultValue={currentMethod?.type === "card" ? currentMethod.name : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardExpiry">Tanggal Kadaluarsa</Label>
                            <Input
                              id="cardExpiry"
                              placeholder="MM/YY"
                              defaultValue={currentMethod?.type === "card" ? currentMethod.expiryDate : ""}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardCvv">CVV</Label>
                          <Input id="cardCvv" placeholder="123" maxLength={4} />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cardDefault"
                            defaultChecked={currentMethod?.isDefault || false}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor="cardDefault">Jadikan sebagai metode pembayaran utama</Label>
                        </div>

                        <div className="flex justify-end">
                          <Button type="submit">Simpan</Button>
                        </div>
                      </form>
                    </TabsContent>
                    <TabsContent value="bank">
                      <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankName">Bank</Label>
                          <Select defaultValue={currentMethod?.type === "bank" ? currentMethod.bankName : ""}>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih bank" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="BCA">Bank BCA</SelectItem>
                              <SelectItem value="Mandiri">Bank Mandiri</SelectItem>
                              <SelectItem value="BNI">Bank BNI</SelectItem>
                              <SelectItem value="BRI">Bank BRI</SelectItem>
                              <SelectItem value="CIMB">Bank CIMB Niaga</SelectItem>
                              <SelectItem value="Permata">Bank Permata</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountNumber">Nomor Rekening</Label>
                          <Input
                            id="accountNumber"
                            placeholder="Nomor rekening"
                            defaultValue={currentMethod?.type === "bank" ? currentMethod.accountNumber : ""}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountName">Nama Pemilik Rekening</Label>
                          <Input
                            id="accountName"
                            placeholder="Nama sesuai rekening"
                            defaultValue={currentMethod?.type === "bank" ? currentMethod.name : ""}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="bankDefault"
                            defaultChecked={currentMethod?.isDefault || false}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor="bankDefault">Jadikan sebagai metode pembayaran utama</Label>
                        </div>

                        <div className="flex justify-end">
                          <Button type="submit">Simpan</Button>
                        </div>
                      </form>
                    </TabsContent>
                    <TabsContent value="ewallet">
                      <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="ewalletType">Jenis E-Wallet</Label>
                          <Select defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletType : ""}>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih e-wallet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="DANA">DANA</SelectItem>
                              <SelectItem value="GoPay">GoPay</SelectItem>
                              <SelectItem value="OVO">OVO</SelectItem>
                              <SelectItem value="ShopeePay">ShopeePay</SelectItem>
                              <SelectItem value="LinkAja">LinkAja</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="ewalletNumber">Nomor Telepon</Label>
                          <Input
                            id="ewalletNumber"
                            placeholder="Nomor telepon terdaftar"
                            defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletNumber : ""}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="ewalletName">Nama Pemilik</Label>
                          <Input
                            id="ewalletName"
                            placeholder="Nama pemilik e-wallet"
                            defaultValue={currentMethod?.type === "ewallet" ? currentMethod.name : ""}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ewalletDefault"
                            defaultChecked={currentMethod?.isDefault || false}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor="ewalletDefault">Jadikan sebagai metode pembayaran utama</Label>
                        </div>

                        <div className="flex justify-end">
                          <Button type="submit">Simpan</Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-4">
              {paymentMethods.length > 0 ? (
                paymentMethods.map((method) => (
                  <div key={method.id} className="border rounded-lg p-4 relative">
                    {method.isDefault && (
                      <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        Utama
                      </span>
                    )}
                    <div className="flex items-start mb-2">
                      <div className="bg-muted rounded-full p-2 mr-3">{getPaymentIcon(method.type)}</div>
                      <div>
                        <h3 className="font-medium">{method.name}</h3>
                        <p className="text-sm">{method.details}</p>
                        <p className="text-xs text-muted-foreground">
                          {method.type === "card" && `Berlaku hingga: ${method.expiryDate}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => handleEditPaymentMethod(method)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Edit Metode Pembayaran</DialogTitle>
                          </DialogHeader>
                          <Tabs defaultValue={paymentType} onValueChange={(value) => setPaymentType(value as any)}>
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="card">Kartu Kredit/Debit</TabsTrigger>
                              <TabsTrigger value="bank">Rekening Bank</TabsTrigger>
                              <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                            </TabsList>
                            <TabsContent value="card">
                              <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                  <Label htmlFor="cardNumber">Nomor Kartu</Label>
                                  <Input
                                    id="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    defaultValue={
                                      currentMethod?.type === "card" ? "•••• •••• •••• " + currentMethod.lastFour : ""
                                    }
                                  />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="cardName">Nama Pemilik Kartu</Label>
                                    <Input
                                      id="cardName"
                                      placeholder="Nama sesuai kartu"
                                      defaultValue={currentMethod?.type === "card" ? currentMethod.name : ""}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="cardExpiry">Tanggal Kadaluarsa</Label>
                                    <Input
                                      id="cardExpiry"
                                      placeholder="MM/YY"
                                      defaultValue={currentMethod?.type === "card" ? currentMethod.expiryDate : ""}
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="cardCvv">CVV</Label>
                                  <Input id="cardCvv" placeholder="123" maxLength={4} />
                                </div>

                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="cardDefault"
                                    defaultChecked={currentMethod?.isDefault || false}
                                    className="rounded border-gray-300"
                                  />
                                  <Label htmlFor="cardDefault">Jadikan sebagai metode pembayaran utama</Label>
                                </div>

                                <div className="flex justify-end">
                                  <Button type="submit">Simpan</Button>
                                </div>
                              </form>
                            </TabsContent>
                            <TabsContent value="bank">
                              <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                  <Label htmlFor="bankName">Bank</Label>
                                  <Select defaultValue={currentMethod?.type === "bank" ? currentMethod.bankName : ""}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Pilih bank" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="BCA">Bank BCA</SelectItem>
                                      <SelectItem value="Mandiri">Bank Mandiri</SelectItem>
                                      <SelectItem value="BNI">Bank BNI</SelectItem>
                                      <SelectItem value="BRI">Bank BRI</SelectItem>
                                      <SelectItem value="CIMB">Bank CIMB Niaga</SelectItem>
                                      <SelectItem value="Permata">Bank Permata</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="accountNumber">Nomor Rekening</Label>
                                  <Input
                                    id="accountNumber"
                                    placeholder="Nomor rekening"
                                    defaultValue={currentMethod?.type === "bank" ? currentMethod.accountNumber : ""}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="accountName">Nama Pemilik Rekening</Label>
                                  <Input
                                    id="accountName"
                                    placeholder="Nama sesuai rekening"
                                    defaultValue={currentMethod?.type === "bank" ? currentMethod.name : ""}
                                  />
                                </div>

                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="bankDefault"
                                    defaultChecked={currentMethod?.isDefault || false}
                                    className="rounded border-gray-300"
                                  />
                                  <Label htmlFor="bankDefault">Jadikan sebagai metode pembayaran utama</Label>
                                </div>

                                <div className="flex justify-end">
                                  <Button type="submit">Simpan</Button>
                                </div>
                              </form>
                            </TabsContent>
                            <TabsContent value="ewallet">
                              <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                  <Label htmlFor="ewalletType">Jenis E-Wallet</Label>
                                  <Select
                                    defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletType : ""}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Pilih e-wallet" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="DANA">DANA</SelectItem>
                                      <SelectItem value="GoPay">GoPay</SelectItem>
                                      <SelectItem value="OVO">OVO</SelectItem>
                                      <SelectItem value="ShopeePay">ShopeePay</SelectItem>
                                      <SelectItem value="LinkAja">LinkAja</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="ewalletNumber">Nomor Telepon</Label>
                                  <Input
                                    id="ewalletNumber"
                                    placeholder="Nomor telepon terdaftar"
                                    defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletNumber : ""}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="ewalletName">Nama Pemilik</Label>
                                  <Input
                                    id="ewalletName"
                                    placeholder="Nama pemilik e-wallet"
                                    defaultValue={currentMethod?.type === "ewallet" ? currentMethod.name : ""}
                                  />
                                </div>

                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="ewalletDefault"
                                    defaultChecked={currentMethod?.isDefault || false}
                                    className="rounded border-gray-300"
                                  />
                                  <Label htmlFor="ewalletDefault">Jadikan sebagai metode pembayaran utama</Label>
                                </div>

                                <div className="flex justify-end">
                                  <Button type="submit">Simpan</Button>
                                </div>
                              </form>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePaymentMethod(method.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Hapus
                      </Button>
                      {!method.isDefault && (
                        <Button variant="outline" size="sm" onClick={() => handleSetDefault(method.id)}>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Jadikan Utama
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Anda belum memiliki metode pembayaran tersimpan.</p>
                  <Button className="mt-4" onClick={() => handleAddPaymentMethod("card")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Metode Pembayaran
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Filter by payment method type */}
          {["card", "bank", "ewallet"].map((type) => (
            <TabsContent key={type} value={type}>
              <div className="flex justify-end mb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => handleAddPaymentMethod(type as any)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Tambah {type === "card" ? "Kartu" : type === "bank" ? "Rekening" : "E-Wallet"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>{isEditing ? "Edit Metode Pembayaran" : "Tambah Metode Pembayaran"}</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue={paymentType} onValueChange={(value) => setPaymentType(value as any)}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="card">Kartu Kredit/Debit</TabsTrigger>
                        <TabsTrigger value="bank">Rekening Bank</TabsTrigger>
                        <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                      </TabsList>
                      <TabsContent value="card">
                        <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Nomor Kartu</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              defaultValue={
                                currentMethod?.type === "card" ? "•••• •••• •••• " + currentMethod.lastFour : ""
                              }
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardName">Nama Pemilik Kartu</Label>
                              <Input
                                id="cardName"
                                placeholder="Nama sesuai kartu"
                                defaultValue={currentMethod?.type === "card" ? currentMethod.name : ""}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cardExpiry">Tanggal Kadaluarsa</Label>
                              <Input
                                id="cardExpiry"
                                placeholder="MM/YY"
                                defaultValue={currentMethod?.type === "card" ? currentMethod.expiryDate : ""}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardCvv">CVV</Label>
                            <Input id="cardCvv" placeholder="123" maxLength={4} />
                          </div>

                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="cardDefault"
                              defaultChecked={currentMethod?.isDefault || false}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor="cardDefault">Jadikan sebagai metode pembayaran utama</Label>
                          </div>

                          <div className="flex justify-end">
                            <Button type="submit">Simpan</Button>
                          </div>
                        </form>
                      </TabsContent>
                      <TabsContent value="bank">
                        <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="bankName">Bank</Label>
                            <Select defaultValue={currentMethod?.type === "bank" ? currentMethod.bankName : ""}>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih bank" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="BCA">Bank BCA</SelectItem>
                                <SelectItem value="Mandiri">Bank Mandiri</SelectItem>
                                <SelectItem value="BNI">Bank BNI</SelectItem>
                                <SelectItem value="BRI">Bank BRI</SelectItem>
                                <SelectItem value="CIMB">Bank CIMB Niaga</SelectItem>
                                <SelectItem value="Permata">Bank Permata</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="accountNumber">Nomor Rekening</Label>
                            <Input
                              id="accountNumber"
                              placeholder="Nomor rekening"
                              defaultValue={currentMethod?.type === "bank" ? currentMethod.accountNumber : ""}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="accountName">Nama Pemilik Rekening</Label>
                            <Input
                              id="accountName"
                              placeholder="Nama sesuai rekening"
                              defaultValue={currentMethod?.type === "bank" ? currentMethod.name : ""}
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="bankDefault"
                              defaultChecked={currentMethod?.isDefault || false}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor="bankDefault">Jadikan sebagai metode pembayaran utama</Label>
                          </div>

                          <div className="flex justify-end">
                            <Button type="submit">Simpan</Button>
                          </div>
                        </form>
                      </TabsContent>
                      <TabsContent value="ewallet">
                        <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="ewalletType">Jenis E-Wallet</Label>
                            <Select defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletType : ""}>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih e-wallet" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="DANA">DANA</SelectItem>
                                <SelectItem value="GoPay">GoPay</SelectItem>
                                <SelectItem value="OVO">OVO</SelectItem>
                                <SelectItem value="ShopeePay">ShopeePay</SelectItem>
                                <SelectItem value="LinkAja">LinkAja</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="ewalletNumber">Nomor Telepon</Label>
                            <Input
                              id="ewalletNumber"
                              placeholder="Nomor telepon terdaftar"
                              defaultValue={currentMethod?.type === "ewallet" ? currentMethod.ewalletNumber : ""}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="ewalletName">Nama Pemilik</Label>
                            <Input
                              id="ewalletName"
                              placeholder="Nama pemilik e-wallet"
                              defaultValue={currentMethod?.type === "ewallet" ? currentMethod.name : ""}
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="ewalletDefault"
                              defaultChecked={currentMethod?.isDefault || false}
                              className="rounded border-gray-300"
                            />
                            <Label htmlFor="ewalletDefault">Jadikan sebagai metode pembayaran utama</Label>
                          </div>

                          <div className="flex justify-end">
                            <Button type="submit">Simpan</Button>
                          </div>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {paymentMethods.filter((method) => method.type === type).length > 0 ? (
                  paymentMethods
                    .filter((method) => method.type === type)
                    .map((method) => (
                      <div key={method.id} className="border rounded-lg p-4 relative">
                        {method.isDefault && (
                          <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            Utama
                          </span>
                        )}
                        <div className="flex items-start mb-2">
                          <div className="bg-muted rounded-full p-2 mr-3">{getPaymentIcon(method.type)}</div>
                          <div>
                            <h3 className="font-medium">{method.name}</h3>
                            <p className="text-sm">{method.details}</p>
                            <p className="text-xs text-muted-foreground">
                              {method.type === "card" && `Berlaku hingga: ${method.expiryDate}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => handleEditPaymentMethod(method)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Edit Metode Pembayaran</DialogTitle>
                              </DialogHeader>
                              <Tabs defaultValue={paymentType} onValueChange={(value) => setPaymentType(value as any)}>
                                <TabsList className="grid w-full grid-cols-3">
                                  <TabsTrigger value="card">Kartu Kredit/Debit</TabsTrigger>
                                  <TabsTrigger value="bank">Rekening Bank</TabsTrigger>
                                  <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                                </TabsList>
                                <TabsContent value="card">
                                  <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="cardNumber">Nomor Kartu</Label>
                                      <Input
                                        id="cardNumber"
                                        placeholder="1234 5678 9012 3456"
                                        defaultValue={
                                          currentMethod?.type === "card"
                                            ? "•••• •••• •••• " + currentMethod.lastFour
                                            : ""
                                        }
                                      />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="cardName">Nama Pemilik Kartu</Label>
                                        <Input
                                          id="cardName"
                                          placeholder="Nama sesuai kartu"
                                          defaultValue={currentMethod?.type === "card" ? currentMethod.name : ""}
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="cardExpiry">Tanggal Kadaluarsa</Label>
                                        <Input
                                          id="cardExpiry"
                                          placeholder="MM/YY"
                                          defaultValue={currentMethod?.type === "card" ? currentMethod.expiryDate : ""}
                                        />
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="cardCvv">CVV</Label>
                                      <Input id="cardCvv" placeholder="123" maxLength={4} />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                      <input
                                        type="checkbox"
                                        id="cardDefault"
                                        defaultChecked={currentMethod?.isDefault || false}
                                        className="rounded border-gray-300"
                                      />
                                      <Label htmlFor="cardDefault">Jadikan sebagai metode pembayaran utama</Label>
                                    </div>

                                    <div className="flex justify-end">
                                      <Button type="submit">Simpan</Button>
                                    </div>
                                  </form>
                                </TabsContent>
                                <TabsContent value="bank">
                                  <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="bankName">Bank</Label>
                                      <Select
                                        defaultValue={currentMethod?.type === "bank" ? currentMethod.bankName : ""}
                                      >
                                        <SelectTrigger>
                                          <SelectValue placeholder="Pilih bank" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="BCA">Bank BCA</SelectItem>
                                          <SelectItem value="Mandiri">Bank Mandiri</SelectItem>
                                          <SelectItem value="BNI">Bank BNI</SelectItem>
                                          <SelectItem value="BRI">Bank BRI</SelectItem>
                                          <SelectItem value="CIMB">Bank CIMB Niaga</SelectItem>
                                          <SelectItem value="Permata">Bank Permata</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="accountNumber">Nomor Rekening</Label>
                                      <Input
                                        id="accountNumber"
                                        placeholder="Nomor rekening"
                                        defaultValue={currentMethod?.type === "bank" ? currentMethod.accountNumber : ""}
                                      />
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="accountName">Nama Pemilik Rekening</Label>
                                      <Input
                                        id="accountName"
                                        placeholder="Nama sesuai rekening"
                                        defaultValue={currentMethod?.type === "bank" ? currentMethod.name : ""}
                                      />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                      <input
                                        type="checkbox"
                                        id="bankDefault"
                                        defaultChecked={currentMethod?.isDefault || false}
                                        className="rounded border-gray-300"
                                      />
                                      <Label htmlFor="bankDefault">Jadikan sebagai metode pembayaran utama</Label>
                                    </div>

                                    <div className="flex justify-end">
                                      <Button type="submit">Simpan</Button>
                                    </div>
                                  </form>
                                </TabsContent>
                                <TabsContent value="ewallet">
                                  <form onSubmit={handleSavePaymentMethod} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="ewalletType">Jenis E-Wallet</Label>
                                      <Select
                                        defaultValue={
                                          currentMethod?.type === "ewallet" ? currentMethod.ewalletType : ""
                                        }
                                      >
                                        <SelectTrigger>
                                          <SelectValue placeholder="Pilih e-wallet" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="DANA">DANA</SelectItem>
                                          <SelectItem value="GoPay">GoPay</SelectItem>
                                          <SelectItem value="OVO">OVO</SelectItem>
                                          <SelectItem value="ShopeePay">ShopeePay</SelectItem>
                                          <SelectItem value="LinkAja">LinkAja</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="ewalletNumber">Nomor Telepon</Label>
                                      <Input
                                        id="ewalletNumber"
                                        placeholder="Nomor telepon terdaftar"
                                        defaultValue={
                                          currentMethod?.type === "ewallet" ? currentMethod.ewalletNumber : ""
                                        }
                                      />
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="ewalletName">Nama Pemilik</Label>
                                      <Input
                                        id="ewalletName"
                                        placeholder="Nama pemilik e-wallet"
                                        defaultValue={currentMethod?.type === "ewallet" ? currentMethod.name : ""}
                                      />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                      <input
                                        type="checkbox"
                                        id="ewalletDefault"
                                        defaultChecked={currentMethod?.isDefault || false}
                                        className="rounded border-gray-300"
                                      />
                                      <Label htmlFor="ewalletDefault">Jadikan sebagai metode pembayaran utama</Label>
                                    </div>

                                    <div className="flex justify-end">
                                      <Button type="submit">Simpan</Button>
                                    </div>
                                  </form>
                                </TabsContent>
                              </Tabs>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeletePaymentMethod(method.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Hapus
                          </Button>
                          {!method.isDefault && (
                            <Button variant="outline" size="sm" onClick={() => handleSetDefault(method.id)}>
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                              Jadikan Utama
                            </Button>
                          )}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Anda belum memiliki {type === "card" ? "kartu" : type === "bank" ? "rekening bank" : "e-wallet"}{" "}
                      tersimpan.
                    </p>
                    <Button className="mt-4" onClick={() => handleAddPaymentMethod(type as any)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Tambah {type === "card" ? "Kartu" : type === "bank" ? "Rekening" : "E-Wallet"}
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
