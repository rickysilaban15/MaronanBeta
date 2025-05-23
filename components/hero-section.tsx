import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-muted/50 my-8">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Belanja Online Terpercaya</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Temukan berbagai produk berkualitas dengan harga terbaik di Maronan Beta. Pengiriman cepat dan aman ke
              seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/produk">Belanja Sekarang</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/kategori">Lihat Kategori</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/img/beranda.png"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
