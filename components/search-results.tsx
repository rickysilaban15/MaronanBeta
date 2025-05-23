"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ProductGrid } from "@/components/product-grid"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { dummyProducts } from "@/lib/data"

interface SearchResultsProps {
  initialQuery?: string
}

export function SearchResults({ initialQuery = "" }: SearchResultsProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery)
    }
  }, [initialQuery])

  const performSearch = (searchQuery: string) => {
    setIsSearching(true)

    // Simulate API call with timeout
    setTimeout(() => {
      const filteredProducts = dummyProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setResults(filteredProducts)
      setIsSearching(false)
    }, 300)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      performSearch(query)
      // Update URL with search query
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    router.push("/search")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Cari produk..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pr-10"
            />
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Cari
          </Button>
        </form>
      </div>

      {isSearching ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Mencari produk...</p>
        </div>
      ) : query ? (
        <>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">
              Hasil pencarian untuk "{query}" ({results.length} produk)
            </h1>
          </div>

          {results.length > 0 ? (
            <ProductGrid products={results} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">Tidak ada produk ditemukan</h2>
              <p className="text-muted-foreground mb-6">
                Maaf, kami tidak dapat menemukan produk yang sesuai dengan pencarian Anda.
              </p>
              <p className="text-sm text-muted-foreground">
                Saran:
                <ul className="mt-2 list-disc list-inside">
                  <li>Periksa ejaan kata kunci pencarian Anda</li>
                  <li>Coba gunakan kata kunci yang lebih umum</li>
                  <li>Coba cari dengan kategori produk</li>
                </ul>
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">Cari Produk</h2>
          <p className="text-muted-foreground mb-6">Masukkan kata kunci untuk mencari produk yang Anda inginkan.</p>
        </div>
      )}
    </div>
  )
}
