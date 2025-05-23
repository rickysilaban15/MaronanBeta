"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { formatRupiah } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: any
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id))

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${product.name} telah ditambahkan ke keranjang belanja Anda.`,
    })
  }

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      setIsWishlisted(false)
      toast({
        title: "Dihapus dari wishlist",
        description: `${product.name} telah dihapus dari wishlist Anda.`,
      })
    } else {
      addToWishlist(product)
      setIsWishlisted(true)
      toast({
        title: "Ditambahkan ke wishlist",
        description: `${product.name} telah ditambahkan ke wishlist Anda.`,
      })
    }
  }

  return (
    <Card className="overflow-hidden">
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
          className="absolute top-2 right-2 bg-white/80 dark:bg-black/50"
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
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
        <div className="flex items-center gap-2 mb-2">
          {product.discount ? (
            <>
              <span className="text-lg font-bold">{formatRupiah(product.price * (1 - product.discount / 100))}</span>
              <span className="text-sm text-muted-foreground line-through">{formatRupiah(product.price)}</span>
            </>
          ) : (
            <span className="text-lg font-bold">{formatRupiah(product.price)}</span>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs ml-1 text-muted-foreground">({product.rating || 0})</span>
          </div>
          <Badge variant={product.stock > 0 ? "outline" : "secondary"} className="text-xs">
            {product.stock > 0 ? `Stok: ${product.stock}` : "Habis"}
          </Badge>
        </div>
        <Button className="w-full" size="sm" onClick={handleAddToCart} disabled={product.stock <= 0}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock > 0 ? "Tambah ke Keranjang" : "Stok Habis"}
        </Button>
      </CardContent>
    </Card>
  )
}
