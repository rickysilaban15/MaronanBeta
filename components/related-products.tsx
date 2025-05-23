"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { formatRupiah } from "@/lib/utils"
import { dummyProducts } from "@/lib/data"

export function RelatedProducts({ productId }: { productId: string }) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [products, setProducts] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Find current product
    const currentProduct = dummyProducts.find((p) => p.id === productId)

    if (currentProduct) {
      // Get products from the same category
      const sameCategory = dummyProducts.filter((p) => p.id !== productId && p.category === currentProduct.category)

      // Get 4 random products from the same category
      const relatedProducts = sameCategory.sort(() => 0.5 - Math.random()).slice(0, 4)

      setProducts(relatedProducts)
    }
  }, [productId])

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${product.name} telah ditambahkan ke keranjang belanja Anda.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
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
            {isClient && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 dark:bg-black/50"
                onClick={() => handleToggleWishlist(product)}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            )}
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
  )
}
