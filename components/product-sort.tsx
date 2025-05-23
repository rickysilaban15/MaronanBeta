"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductSort() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("sort", value)
    } else {
      params.delete("sort")
    }

    router.push(`/produk?${params.toString()}`)
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm whitespace-nowrap">Urutkan:</span>
      <Select defaultValue={searchParams.get("sort") || ""} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pilih urutan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevansi</SelectItem>
          <SelectItem value="price-asc">Harga: Rendah ke Tinggi</SelectItem>
          <SelectItem value="price-desc">Harga: Tinggi ke Rendah</SelectItem>
          <SelectItem value="newest">Terbaru</SelectItem>
          <SelectItem value="popular">Terpopuler</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
