import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PromoSection() {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Diskon Spesial</h3>
          <p className="mb-4">Dapatkan diskon hingga 50% untuk produk elektronik pilihan</p>
          <Button asChild variant="secondary">
            <Link href="/produk?category=elektronik&discount=true">Belanja Sekarang</Link>
          </Button>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Koleksi Terbaru</h3>
          <p className="mb-4">Jelajahi koleksi fashion terbaru untuk pria dan wanita</p>
          <Button asChild variant="secondary">
            <Link href="/produk?category=fashion">Lihat Koleksi</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
