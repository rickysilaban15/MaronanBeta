import { ProductFilter } from "@/components/product-filter"
import { ProductGrid } from "@/components/product-grid"
import { ProductSearch } from "@/components/product-search"
import { ProductSort } from "@/components/product-sort"
import { Suspense } from "react"
import { ProductSkeleton } from "@/components/product-skeleton"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Semua Produk</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <ProductFilter />
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <ProductSearch />
            <ProductSort />
          </div>

          <Suspense fallback={<ProductSkeleton count={12} />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

const handleSubmitProduk = async (e) => {
  e.preventDefault()
  const res = await fetch('/api/produk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama: namaProduk,
      harga,
      stok
    })
  })
  const result = await res.json()
  console.log('Produk ditambahkan:', result)
}

