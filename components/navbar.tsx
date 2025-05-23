"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { ShoppingCart, Heart, User, Menu, Search, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { useUser } from "@/components/user-provider"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Beranda", path: "/" },
  { name: "Produk", path: "/produk" },
  { name: "Kategori", path: "/kategori" },
  { name: "Tentang", path: "/tentang" },
  { name: "Kontak", path: "/kontak" },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const { user, logout } = useUser()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const cartCount = isClient ? cart.length : 0
  const wishlistCount = isClient ? wishlist.length : 0

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
      setSearchQuery("")
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === route.path ? "text-primary font-semibold" : "text-muted-foreground",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.name}
                    </Link>
                  ))}
                  {user && (
                    <Button variant="ghost" className="justify-start" onClick={handleLogout}>
                      Keluar
                    </Button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center ml-2 lg:ml-0">
              <span className="text-xl font-bold">Maronan Beta</span>
            </Link>

            <nav className="hidden lg:flex items-center ml-8 space-x-6">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.path ? "text-primary font-semibold" : "text-muted-foreground",
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Cari produk..."
                  className="w-[200px] md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" aria-label="Cari" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}

            <ModeToggle />

            <Link href="/wishlist">
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/keranjang">
              <Button variant="ghost" size="icon" aria-label="Keranjang">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href={user ? (user.role === "admin" ? "/admin" : "/profil") : "/masuk"}>
              <Button variant="ghost" size="icon" aria-label="Akun">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
