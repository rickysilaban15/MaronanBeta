import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { ProductReviews } from "@/components/product-reviews"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Suspense } from "react"
import { ProductDetailSkeleton } from "@/components/product-detail-skeleton"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail id={params.id} />
      </Suspense>

      <div className="mt-12">
        <Tabs defaultValue="deskripsi">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="deskripsi">Deskripsi</TabsTrigger>
            <TabsTrigger value="spesifikasi">Spesifikasi</TabsTrigger>
            <TabsTrigger value="ulasan">Ulasan</TabsTrigger>
          </TabsList>
          <TabsContent value="deskripsi" className="mt-4">
            <div className="prose max-w-none dark:prose-invert">
              <h3>Deskripsi Produk</h3>
              <p>Deskripsi lengkap tentang produk ini akan muncul di sini.</p>
            </div>
          </TabsContent>
          <TabsContent value="spesifikasi" className="mt-4">
            <div className="prose max-w-none dark:prose-invert">
              <h3>Spesifikasi Produk</h3>
              <ul>
                <li>Spesifikasi 1</li>
                <li>Spesifikasi 2</li>
                <li>Spesifikasi 3</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ulasan" className="mt-4">
            <ProductReviews productId={params.id} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Produk Terkait</h2>
        <RelatedProducts productId={params.id} />
      </div>
    </div>
  )
}
