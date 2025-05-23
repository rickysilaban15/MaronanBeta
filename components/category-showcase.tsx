"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, ShoppingBag, Shirt, Home, Utensils, Heart, BookOpen } from "lucide-react"

const categories = [
  {
    name: "Elektronik",
    icon: Laptop,
    href: "/kategori/elektronik",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-600 dark:text-blue-300",
  },
  {
    name: "Fashion Pria",
    icon: ShoppingBag,
    href: "/kategori/fashion-pria",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-600 dark:text-green-300",
  },
  {
    name: "Fashion Wanita",
    icon: Shirt,
    href: "/kategori/fashion-wanita",
    color: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-600 dark:text-pink-300",
  },
  {
    name: "Peralatan Rumah",
    icon: Home,
    href: "/kategori/peralatan-rumah",
    color: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-600 dark:text-orange-300",
  },
  {
    name: "Makanan & Minuman",
    icon: Utensils,
    href: "/kategori/makanan-minuman",
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-600 dark:text-red-300",
  },
  {
    name: "Kesehatan",
    icon: Heart,
    href: "/kategori/kesehatan",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-600 dark:text-purple-300",
  },
  {
    name: "Buku & Alat Tulis",
    icon: BookOpen,
    href: "/kategori/buku-alat-tulis",
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-600 dark:text-yellow-300",
  },
]

export function CategoryShowcase() {
  return (
    <div className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Kategori Produk</h2>
        <Link href="/kategori" className="text-sm font-medium text-primary hover:underline">
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                <div className={`p-3 rounded-full ${category.color} mb-3`}>
                  <category.icon className={`h-6 w-6 ${category.textColor}`} />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
