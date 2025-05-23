"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { CreditCard, Landmark, Wallet } from "lucide-react"

export function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Metode Pembayaran</h3>

      <Tabs defaultValue="card" className="w-full" onValueChange={(value) => setPaymentMethod(value)}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="card" className="flex items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            Kartu
          </TabsTrigger>
          <TabsTrigger value="bank" className="flex items-center">
            <Landmark className="h-4 w-4 mr-2" />
            Bank
          </TabsTrigger>
          <TabsTrigger value="ewallet" className="flex items-center">
            <Wallet className="h-4 w-4 mr-2" />
            E-Wallet
          </TabsTrigger>
        </TabsList>

        <Card>
          <CardContent className="pt-6">
            <TabsContent value="card" className="mt-0">
              <RadioGroup defaultValue="visa">
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="visa" id="visa" />
                  <Label htmlFor="visa" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="Visa" className="h-8 mr-2" />
                    Visa
                  </Label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="mastercard" id="mastercard" />
                  <Label htmlFor="mastercard" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="Mastercard" className="h-8 mr-2" />
                    Mastercard
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="amex" id="amex" />
                  <Label htmlFor="amex" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="American Express" className="h-8 mr-2" />
                    American Express
                  </Label>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Nomor Kartu</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nama pada Kartu</Label>
                      <Input id="card-name" placeholder="RICKY SILABAN" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Tanggal Kadaluarsa</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </TabsContent>

            <TabsContent value="bank" className="mt-0">
              <RadioGroup defaultValue="bca">
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="bca" id="bca" />
                  <Label htmlFor="bca" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="BCA" className="h-8 mr-2" />
                    Bank Central Asia (BCA)
                  </Label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="mandiri" id="mandiri" />
                  <Label htmlFor="mandiri" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="Mandiri" className="h-8 mr-2" />
                    Bank Mandiri
                  </Label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="bni" id="bni" />
                  <Label htmlFor="bni" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="BNI" className="h-8 mr-2" />
                    Bank Negara Indonesia (BNI)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bri" id="bri" />
                  <Label htmlFor="bri" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="BRI" className="h-8 mr-2" />
                    Bank Rakyat Indonesia (BRI)
                  </Label>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <p className="text-sm font-medium mb-2">Instruksi Pembayaran:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Catat nomor virtual account yang akan diberikan setelah checkout</li>
                    <li>Login ke m-banking atau internet banking Anda</li>
                    <li>Pilih menu Transfer atau Pembayaran</li>
                    <li>Masukkan nomor virtual account</li>
                    <li>Konfirmasi dan selesaikan pembayaran</li>
                  </ol>
                </div>
              </RadioGroup>
            </TabsContent>

            <TabsContent value="ewallet" className="mt-0">
              <RadioGroup defaultValue="gopay">
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="gopay" id="gopay" />
                  <Label htmlFor="gopay" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="GoPay" className="h-8 mr-2" />
                    GoPay
                  </Label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="ovo" id="ovo" />
                  <Label htmlFor="ovo" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="OVO" className="h-8 mr-2" />
                    OVO
                  </Label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="dana" id="dana" />
                  <Label htmlFor="dana" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="DANA" className="h-8 mr-2" />
                    DANA
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shopeepay" id="shopeepay" />
                  <Label htmlFor="shopeepay" className="flex items-center">
                    <img src="/placeholder.svg?height=30&width=40" alt="ShopeePay" className="h-8 mr-2" />
                    ShopeePay
                  </Label>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <p className="text-sm font-medium mb-2">Instruksi Pembayaran:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Setelah checkout, Anda akan diarahkan ke halaman pembayaran</li>
                    <li>Buka aplikasi e-wallet yang Anda pilih</li>
                    <li>Scan QR code yang ditampilkan atau masukkan nomor telepon Anda</li>
                    <li>Konfirmasi pembayaran di aplikasi e-wallet Anda</li>
                  </ol>
                </div>
              </RadioGroup>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
