"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { formatRupiah } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="container mx-auto px-4 py-8">Memuat...</div>
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * (1 - (item.discount || 0) / 100) * item.quantity,
    0,
  )
  const shipping = subtotal > 0 ? 15000 : 0
  const total = subtotal + shipping

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Keranjang kosong",
        description: "Silakan tambahkan produk ke keranjang terlebih dahulu",
        variant: "destructive",
      })
      return
    }
    router.push("/checkout")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Keranjang Belanja</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Keranjang Anda Kosong</h2>
          <p className="text-muted-foreground mb-6">
            Silakan tambahkan produk ke keranjang Anda
          </p>
          <Button asChild>
            <Link href="/produk">Belanja Sekarang</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-32 h-32">
                        <Image
                          src={item.image || "/placeholder.svg?height=128&width=128"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex justify-between">
                          <Link href={`/produk/${item.id}`} className="font-medium hover:underline">
                            {item.name}
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                        <div className="flex items-center mt-2">
                          {item.discount ? (
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold">
                                {formatRupiah(item.price * (1 - item.discount / 100))}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                {formatRupiah(item.price)}
                              </span>
                              <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-0.5 rounded">
                                -{item.discount}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-lg font-bold">{formatRupiah(item.price)}</span>
                          )}
                        </div>
                        <div className="flex items-center mt-4">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number.parseInt(e.target.value) || 1)
                            }
                            className="h-8 w-16 mx-2 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="outline" onClick={() => clearCart()}>
                Kosongkan Keranjang
              </Button>
              <Button asChild variant="outline">
                <Link href="/produk">Lanjut Belanja</Link>
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Ringkasan Belanja</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatRupiah(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pengiriman</span>
                    <span>{formatRupiah(shipping)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatRupiah(total)}</span>
                  </div>
                  <Button className="w-full" onClick={handleCheckout}>
                    Lanjut ke Pembayaran
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

// Contoh fungsi handleSubmit untuk POST data keranjang ke API
export async function handleSubmitKeranjang(produkid, userId, jumlah) {
  try {
    const res = await fetch('/api/keranjang', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ produkid, userId, jumlah }),
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }

    const result = await res.json()
    console.log('Keranjang tersimpan:', result)
    return result
  } catch (error) {
    console.error('Gagal mengirim data keranjang:', error)
    throw error
  }
}
