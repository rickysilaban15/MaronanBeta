"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Email tidak valid",
        description: "Silakan masukkan alamat email yang valid.",
        variant: "destructive",
      })
      return
    }

    setIsSubscribing(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Berlangganan berhasil!",
        description: "Terima kasih telah berlangganan newsletter kami.",
      })
      setEmail("")
      setIsSubscribing(false)
    }, 1000)
  }

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Maronan Beta</h3>
            <p className="text-muted-foreground mb-4">
              Platform e-commerce terpercaya dengan berbagai produk berkualitas dan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/elektronik" className="text-muted-foreground hover:text-primary">
                  Elektronik
                </Link>
              </li>
              <li>
                <Link href="/kategori/fashion-pria" className="text-muted-foreground hover:text-primary">
                  Fashion Pria
                </Link>
              </li>
              <li>
                <Link href="/kategori/fashion-wanita" className="text-muted-foreground hover:text-primary">
                  Fashion Wanita
                </Link>
              </li>
              <li>
                <Link href="/kategori/peralatan-rumah" className="text-muted-foreground hover:text-primary">
                  Peralatan Rumah
                </Link>
              </li>
              <li>
                <Link href="/kategori/makanan-minuman" className="text-muted-foreground hover:text-primary">
                  Makanan & Minuman
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="text-muted-foreground hover:text-primary">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="text-muted-foreground hover:text-primary">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/cara-belanja" className="text-muted-foreground hover:text-primary">
                  Cara Belanja
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Jl. Maronan No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@maronan.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Berlangganan Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  placeholder="Email Anda"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isSubscribing}>
                  {isSubscribing ? "..." : "Daftar"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Maronan Beta. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
