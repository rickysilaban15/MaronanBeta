"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { formatRupiah } from "@/lib/utils"
import { dummyProducts } from "@/lib/data"
import { Heart, Minus, Plus, ShoppingCart, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function ProductDetail({ id }: { id: string }) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [product, setProduct] = useState<any | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Find product by id
    const foundProduct = dummyProducts.find((p) => p.id === id)
    setProduct(foundProduct || null)
  }, [id])

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">Produk tidak ditemukan</h2>
      </div>
    )
  }

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }
    addToCart(productWithQuantity)
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${product.name} telah ditambahkan ke keranjang belanja Anda.`,
    })
  }

  const handleToggleWishlist = () => {
    if (isClient && isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Dihapus dari wishlist",
        description: `${product.name} telah dihapus dari wishlist Anda.`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Ditambahkan ke wishlist",
        description: `${product.name} telah ditambahkan ke wishlist Anda.`,
      })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error))
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link disalin",
        description: "Link produk telah disalin ke clipboard.",
      })
    }
  }

  const discountedPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image
          src={product.image || "/placeholder.svg?height=600&width=600"}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          priority
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">{product.category}</Badge>
          {product.stock > 0 ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Stok Tersedia
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
              Stok Habis
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3 mb-6">
          {product.discount ? (
            <>
              <span className="text-3xl font-bold">{formatRupiah(discountedPrice)}</span>
              <span className="text-lg text-muted-foreground line-through">{formatRupiah(product.price)}</span>
            </>
          ) : (
            <span className="text-3xl font-bold">{formatRupiah(product.price)}</span>
          )}
        </div>

        <Separator className="my-6" />

        <div className="mb-6">
          <p className="text-muted-foreground">{product.description}</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center">
            <span className="mr-4">Jumlah:</span>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= (product.stock || 10)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="flex-1" size="lg" onClick={handleAddToCart} disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Tambah ke Keranjang
            </Button>

            <Button variant="outline" size="icon" className="h-12 w-12" onClick={handleToggleWishlist}>
              <Heart className={`h-5 w-5 ${isClient && isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
            </Button>

            <Button variant="outline" size="icon" className="h-12 w-12" onClick={handleShare}>
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
