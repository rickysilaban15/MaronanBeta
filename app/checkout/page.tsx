"use client"

import type React from "react"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { formatRupiah } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod")
  const [selectedBank, setSelectedBank] = useState("")
  const [selectedEwallet, setSelectedEwallet] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    paymentMethod: "cod",
  })

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    setIsClient(true)

    // Redirect if cart is empty
    if (localStorage.getItem("cart") === "[]") {
      router.push("/keranjang")
    }
  }, [router])

  if (!isClient) {
    return <div className="container mx-auto px-4 py-8">Memuat...</div>
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Pesanan Berhasil!</h1>
          <p className="mb-6">Terima kasih atas pesanan Anda. Kami akan segera memproses pesanan Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Kembali ke Beranda</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profil?tab=orders">Lihat Pesanan</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (1 - (item.discount || 0) / 100) * item.quantity,
    0,
  )
  const shipping = subtotal > 0 ? 15000 : 0
  const total = subtotal + shipping

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value)
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Nama lengkap harus diisi",
      phone: formData.phone ? "" : "Nomor telepon harus diisi",
      address: formData.address ? "" : "Alamat lengkap harus diisi",
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Form tidak valid",
        description: "Silakan isi semua field yang wajib diisi",
        variant: "destructive",
      })
      return
    }

    // Validate payment method details
    if (selectedPaymentMethod === "transfer" && !selectedBank) {
      toast({
        title: "Bank belum dipilih",
        description: "Silakan pilih bank untuk transfer",
        variant: "destructive",
      })
      return
    }

    if (selectedPaymentMethod === "ewallet" && !selectedEwallet) {
      toast({
        title: "E-Wallet belum dipilih",
        description: "Silakan pilih e-wallet untuk pembayaran",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      clearCart()
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Informasi Pengiriman</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      Nomor Telepon <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="address">
                      Alamat Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={errors.address ? "border-red-500" : ""}
                      rows={3}
                    />
                    {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={2} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>

                <Tabs value={selectedPaymentMethod} onValueChange={handlePaymentMethodChange}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                    <TabsTrigger value="transfer">Transfer Bank</TabsTrigger>
                    <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
                  </TabsList>

                  <TabsContent value="cod" className="mt-4">
                    <div className="p-4 bg-muted rounded-md">
                      <p>Pembayaran dilakukan saat barang diterima.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Pastikan Anda menyiapkan uang pas untuk memudahkan proses pembayaran.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="transfer" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bank">Pilih Bank</Label>
                        <Select value={selectedBank} onValueChange={setSelectedBank}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih bank" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bca">Bank BCA</SelectItem>
                            <SelectItem value="mandiri">Bank Mandiri</SelectItem>
                            <SelectItem value="bni">Bank BNI</SelectItem>
                            <SelectItem value="bri">Bank BRI</SelectItem>
                            <SelectItem value="cimb">Bank CIMB Niaga</SelectItem>
                            <SelectItem value="permata">Bank Permata</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedBank && (
                        <div className="p-4 bg-muted rounded-md">
                          <p className="font-medium">Instruksi Pembayaran:</p>
                          <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                            <li>Transfer ke rekening {selectedBank.toUpperCase()} a.n. PT Maronan Beta</li>
                            <li>Nomor rekening akan dikirimkan melalui email setelah checkout</li>
                            <li>Lakukan pembayaran dalam 24 jam</li>
                            <li>Konfirmasi pembayaran melalui WhatsApp atau email</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="ewallet" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="ewallet">Pilih E-Wallet</Label>
                        <Select value={selectedEwallet} onValueChange={setSelectedEwallet}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih e-wallet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dana">DANA</SelectItem>
                            <SelectItem value="gopay">GoPay</SelectItem>
                            <SelectItem value="ovo">OVO</SelectItem>
                            <SelectItem value="shopeepay">ShopeePay</SelectItem>
                            <SelectItem value="linkaja">LinkAja</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedEwallet && (
                        <div className="p-4 bg-muted rounded-md">
                          <p className="font-medium">Instruksi Pembayaran:</p>
                          <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                            <li>QR Code pembayaran akan dikirimkan melalui email setelah checkout</li>
                            <li>Buka aplikasi {selectedEwallet.toUpperCase()} Anda</li>
                            <li>Scan QR Code atau masukkan nomor virtual account</li>
                            <li>Konfirmasi dan selesaikan pembayaran</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-6 lg:hidden">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Memproses..." : "Selesaikan Pesanan"}
              </Button>
            </div>
          </form>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>

              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground"> x{item.quantity}</span>
                    </div>
                    <span>{formatRupiah(item.price * (1 - (item.discount || 0) / 100) * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pengiriman</span>
                  <span>{formatRupiah(shipping)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>

              <Button className="w-full mt-6 hidden lg:block" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Memproses..." : "Selesaikan Pesanan"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
