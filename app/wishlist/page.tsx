"use client"

import { useWishlist } from "@/components/wishlist-provider"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatRupiah } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="container mx-auto px-4 py-8">Memuat...</div>
  }

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${product.name} telah ditambahkan ke keranjang belanja Anda.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist Saya</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Wishlist Anda Kosong</h2>
          <p className="text-muted-foreground mb-6">Tambahkan produk ke wishlist untuk menyimpannya di sini</p>
          <Button asChild>
            <Link href="/produk">Jelajahi Produk</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <Link href={`/produk/${product.id}`}>
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg?height=300&width=300"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 dark:bg-black/50 text-red-500"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <Heart className="h-5 w-5 fill-current" />
                </Button>
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <Link href={`/produk/${product.id}`}>
                  <h3 className="font-medium line-clamp-1 hover:underline">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <div className="flex items-center gap-2 mb-4">
                  {product.discount ? (
                    <>
                      <span className="text-lg font-bold">
                        {formatRupiah(product.price * (1 - product.discount / 100))}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">{formatRupiah(product.price)}</span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">{formatRupiah(product.price)}</span>
                  )}
                </div>
                <Button className="w-full" size="sm" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Tambah ke Keranjang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
