"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ImagePlus, Plus, Trash2 } from "lucide-react"

export function AddProductForm() {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    stock: "",
    sku: "",
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    images: ["", "", "", ""],
    featured: false,
    popular: false,
    new: true,
    published: true,
    specifications: [{ name: "", value: "" }],
    variants: [{ name: "", options: [""] }],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDimensionChange = (dimension: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimension]: value,
      },
    }))
  }

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images]
    newImages[index] = value
    setFormData((prev) => ({ ...prev, images: newImages }))
  }

  const handleSpecificationChange = (index: number, field: string, value: string) => {
    const newSpecs = [...formData.specifications]
    newSpecs[index] = { ...newSpecs[index], [field]: value }
    setFormData((prev) => ({ ...prev, specifications: newSpecs }))
  }

  const addSpecification = () => {
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { name: "", value: "" }],
    }))
  }

  const removeSpecification = (index: number) => {
    const newSpecs = [...formData.specifications]
    newSpecs.splice(index, 1)
    setFormData((prev) => ({ ...prev, specifications: newSpecs }))
  }

  const handleVariantChange = (index: number, field: string, value: string) => {
    const newVariants = [...formData.variants]
    if (field === "name") {
      newVariants[index] = { ...newVariants[index], name: value }
    }
    setFormData((prev) => ({ ...prev, variants: newVariants }))
  }

  const handleVariantOptionChange = (variantIndex: number, optionIndex: number, value: string) => {
    const newVariants = [...formData.variants]
    const newOptions = [...newVariants[variantIndex].options]
    newOptions[optionIndex] = value
    newVariants[variantIndex] = { ...newVariants[variantIndex], options: newOptions }
    setFormData((prev) => ({ ...prev, variants: newVariants }))
  }

  const addVariant = () => {
    setFormData((prev) => ({
      ...prev,
      variants: [...prev.variants, { name: "", options: [""] }],
    }))
  }

  const removeVariant = (index: number) => {
    const newVariants = [...formData.variants]
    newVariants.splice(index, 1)
    setFormData((prev) => ({ ...prev, variants: newVariants }))
  }

  const addVariantOption = (variantIndex: number) => {
    const newVariants = [...formData.variants]
    newVariants[variantIndex].options.push("")
    setFormData((prev) => ({ ...prev, variants: newVariants }))
  }

  const removeVariantOption = (variantIndex: number, optionIndex: number) => {
    const newVariants = [...formData.variants]
    newVariants[variantIndex].options.splice(optionIndex, 1)
    setFormData((prev) => ({ ...prev, variants: newVariants }))
  }

  const handleToggle = (field: string, value: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the data to your API
    console.log("Product data:", formData)

    toast({
      title: "Produk Ditambahkan",
      description: "Produk baru berhasil ditambahkan.",
    })

    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      category: "",
      stock: "",
      sku: "",
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      images: ["", "", "", ""],
      featured: false,
      popular: false,
      new: true,
      published: true,
      specifications: [{ name: "", value: "" }],
      variants: [{ name: "", options: [""] }],
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="basic">Informasi Dasar</TabsTrigger>
          <TabsTrigger value="images">Gambar</TabsTrigger>
          <TabsTrigger value="specs">Spesifikasi</TabsTrigger>
          <TabsTrigger value="variants">Varian</TabsTrigger>
        </TabsList>

        <Card>
          <CardContent className="p-6">
            <TabsContent value="basic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Produk</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama produk"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Masukkan deskripsi produk"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Kategori</Label>
                    <Select
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      value={formData.category}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elektronik">Elektronik</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="kesehatan">Kesehatan & Kecantikan</SelectItem>
                        <SelectItem value="rumah">Rumah & Dapur</SelectItem>
                        <SelectItem value="olahraga">Olahraga</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Harga (Rp)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discountPrice">Harga Diskon (Rp)</Label>
                      <Input
                        id="discountPrice"
                        name="discountPrice"
                        type="number"
                        value={formData.discountPrice}
                        onChange={handleChange}
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stok</Label>
                      <Input
                        id="stock"
                        name="stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sku">SKU</Label>
                      <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} placeholder="PRD-12345" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Berat (gram)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Dimensi (cm)</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Input
                        placeholder="Panjang"
                        value={formData.dimensions.length}
                        onChange={(e) => handleDimensionChange("length", e.target.value)}
                      />
                      <Input
                        placeholder="Lebar"
                        value={formData.dimensions.width}
                        onChange={(e) => handleDimensionChange("width", e.target.value)}
                      />
                      <Input
                        placeholder="Tinggi"
                        value={formData.dimensions.height}
                        onChange={(e) => handleDimensionChange("height", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleToggle("featured", checked)}
                  />
                  <Label htmlFor="featured">Produk Unggulan</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="popular"
                    checked={formData.popular}
                    onCheckedChange={(checked) => handleToggle("popular", checked)}
                  />
                  <Label htmlFor="popular">Produk Populer</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="new" checked={formData.new} onCheckedChange={(checked) => handleToggle("new", checked)} />
                  <Label htmlFor="new">Produk Baru</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => handleToggle("published", checked)}
                  />
                  <Label htmlFor="published">Publikasikan</Label>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="images" className="mt-0">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Gambar Produk</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <div className="border rounded-md p-2 h-40 flex items-center justify-center bg-muted">
                        {image ? (
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Product image ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <ImagePlus className="h-10 w-10 text-muted-foreground" />
                        )}
                      </div>
                      <Input
                        placeholder={`URL Gambar ${index + 1}`}
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Spesifikasi Produk</h3>
                  <Button type="button" variant="outline" size="sm" onClick={addSpecification}>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Spesifikasi
                  </Button>
                </div>

                {formData.specifications.map((spec, index) => (
                  <div key={index} className="flex items-end gap-4">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`spec-name-${index}`}>Nama</Label>
                      <Input
                        id={`spec-name-${index}`}
                        value={spec.name}
                        onChange={(e) => handleSpecificationChange(index, "name", e.target.value)}
                        placeholder="Contoh: Processor, RAM, dll."
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`spec-value-${index}`}>Nilai</Label>
                      <Input
                        id={`spec-value-${index}`}
                        value={spec.value}
                        onChange={(e) => handleSpecificationChange(index, "value", e.target.value)}
                        placeholder="Contoh: Intel Core i5, 8GB, dll."
                      />
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSpecification(index)}
                      disabled={formData.specifications.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="variants" className="mt-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Varian Produk</h3>
                  <Button type="button" variant="outline" size="sm" onClick={addVariant}>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Varian
                  </Button>
                </div>

                {formData.variants.map((variant, variantIndex) => (
                  <div key={variantIndex} className="space-y-4 p-4 border rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor={`variant-name-${variantIndex}`}>Nama Varian</Label>
                        <Input
                          id={`variant-name-${variantIndex}`}
                          value={variant.name}
                          onChange={(e) => handleVariantChange(variantIndex, "name", e.target.value)}
                          placeholder="Contoh: Warna, Ukuran, dll."
                        />
                      </div>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeVariant(variantIndex)}
                        disabled={formData.variants.length === 1}
                        className="ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Opsi Varian</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addVariantOption(variantIndex)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Tambah Opsi
                        </Button>
                      </div>

                      {variant.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center gap-2">
                          <Input
                            value={option}
                            onChange={(e) => handleVariantOptionChange(variantIndex, optionIndex, e.target.value)}
                            placeholder={`Opsi ${optionIndex + 1}`}
                          />

                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeVariantOption(variantIndex, optionIndex)}
                            disabled={variant.options.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </CardContent>

          <CardFooter className="flex justify-end space-x-2 border-t p-6">
            <Button type="button" variant="outline">
              Batal
            </Button>
            <Button type="submit">Simpan Produk</Button>
          </CardFooter>
        </Card>
      </Tabs>
    </form>
  )
}
