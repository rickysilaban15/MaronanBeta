"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, ShoppingBag, Shirt, HomeIcon, Utensils, Heart, BookOpen } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"

const categories = [
  {
    name: "Elektronik",
    icon: Laptop,
    href: "/kategori/elektronik",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-600 dark:text-blue-300",
    description: "Smartphone, laptop, gadget, dan peralatan elektronik lainnya",
  },
  {
    name: "Fashion Pria",
    icon: ShoppingBag,
    href: "/kategori/fashion-pria",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-600 dark:text-green-300",
    description: "Pakaian, sepatu, aksesoris, dan kebutuhan fashion pria",
  },
  {
    name: "Fashion Wanita",
    icon: Shirt,
    href: "/kategori/fashion-wanita",
    color: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-600 dark:text-pink-300",
    description: "Pakaian, sepatu, tas, aksesoris, dan kebutuhan fashion wanita",
  },
  {
    name: "Peralatan Rumah",
    icon: HomeIcon,
    href: "/kategori/peralatan-rumah",
    color: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-600 dark:text-orange-300",
    description: "Perabotan, peralatan dapur, dekorasi, dan kebutuhan rumah tangga",
  },
  {
    name: "Makanan & Minuman",
    icon: Utensils,
    href: "/kategori/makanan-minuman",
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-600 dark:text-red-300",
    description: "Makanan kering, minuman, camilan, dan kebutuhan dapur",
  },
  {
    name: "Kesehatan",
    icon: Heart,
    href: "/kategori/kesehatan",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-600 dark:text-purple-300",
    description: "Suplemen, vitamin, obat-obatan, dan peralatan kesehatan",
  },
  {
    name: "Buku & Alat Tulis",
    icon: BookOpen,
    href: "/kategori/buku-alat-tulis",
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-600 dark:text-yellow-300",
    description: "Buku, alat tulis, perlengkapan kantor, dan kebutuhan sekolah",
  },
]

export default function CategoryListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4 mr-1" />
              Beranda
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Kategori</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-8">Kategori Produk</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${category.color} shrink-0`}>
                    <category.icon className={`h-6 w-6 ${category.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
