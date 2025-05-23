"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatRupiah } from "@/lib/utils"

const categories = [
  { id: "elektronik", name: "Elektronik" },
  { id: "fashion-pria", name: "Fashion Pria" },
  { id: "fashion-wanita", name: "Fashion Wanita" },
  { id: "peralatan-rumah", name: "Peralatan Rumah" },
  { id: "makanan-minuman", name: "Makanan & Minuman" },
  { id: "kesehatan", name: "Kesehatan" },
  { id: "buku-alat-tulis", name: "Buku & Alat Tulis" },
]

interface ProductFilterProps {
  initialCategory?: string
}

export function ProductFilter({ initialCategory }: ProductFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [onlyDiscount, setOnlyDiscount] = useState(false)
  const [inStock, setInStock] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize state from URL params or props
    if (!isInitialized) {
      const categoryParam = searchParams.get("category")
      const categories = categoryParam ? categoryParam.split(",") : initialCategory ? [initialCategory] : []
      setSelectedCategories(categories)

      const minPrice = Number(searchParams.get("minPrice") || 0)
      const maxPrice = Number(searchParams.get("maxPrice") || 10000000)
      setPriceRange([minPrice, maxPrice])

      setOnlyDiscount(searchParams.get("discount") === "true")
      setInStock(searchParams.get("inStock") === "true")

      setIsInitialized(true)
    }
  }, [searchParams, initialCategory, isInitialized])

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((cat) => cat !== category)))
  }

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Update category filter
    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","))
    } else {
      params.delete("category")
    }

    // Update price filter
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    // Update discount filter
    if (onlyDiscount) {
      params.set("discount", "true")
    } else {
      params.delete("discount")
    }

    // Update stock filter
    if (inStock) {
      params.set("inStock", "true")
    } else {
      params.delete("inStock")
    }

    router.push(`/produk?${params.toString()}`)
  }

  const handleResetFilters = () => {
    setPriceRange([0, 10000000])
    setSelectedCategories([])
    setOnlyDiscount(false)
    setInStock(false)
    router.push("/produk")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filter Produk</h3>

        <Accordion type="multiple" defaultValue={["categories", "price", "other"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Kategori</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Rentang Harga</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider value={priceRange} min={0} max={10000000} step={100000} onValueChange={setPriceRange} />
                <div className="flex justify-between text-sm">
                  <span>{formatRupiah(priceRange[0])}</span>
                  <span>{formatRupiah(priceRange[1])}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other">
            <AccordionTrigger>Lainnya</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="discount"
                    checked={onlyDiscount}
                    onCheckedChange={(checked) => setOnlyDiscount(checked === true)}
                  />
                  <Label htmlFor="discount">Hanya Produk Diskon</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={inStock}
                    onCheckedChange={(checked) => setInStock(checked === true)}
                  />
                  <Label htmlFor="inStock">Stok Tersedia</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={handleApplyFilters}>Terapkan Filter</Button>
        <Button variant="outline" onClick={handleResetFilters}>
          Reset Filter
        </Button>
      </div>
    </div>
  )
}
