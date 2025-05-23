import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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
            <BreadcrumbLink>Tentang Kami</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Tentang Maronan Beta</h1>

        <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image src="/img/about..png" alt="Maronan Beta Team" fill className="object-cover" />
        </div>

        <Tabs defaultValue="tentang" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tentang">Tentang Kami</TabsTrigger>
            <TabsTrigger value="visi">Visi & Misi</TabsTrigger>
            <TabsTrigger value="tim">Tim Kami</TabsTrigger>
          </TabsList>
          <TabsContent value="tentang" className="mt-6">
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg">
                Maronan Beta adalah platform e-commerce terpercaya yang didirikan pada tahun 2023 dengan tujuan
                menyediakan pengalaman belanja online terbaik bagi masyarakat Indonesia.
              </p>
              <p>
                Kami menawarkan berbagai produk berkualitas dari berbagai kategori, mulai dari elektronik, fashion,
                peralatan rumah tangga, hingga kebutuhan sehari-hari. Dengan komitmen untuk memberikan layanan terbaik,
                kami memastikan setiap produk yang kami jual memenuhi standar kualitas tinggi dan dijual dengan harga
                yang kompetitif.
              </p>
              <p>
                Maronan Beta terus berkembang dan berinovasi untuk memenuhi kebutuhan pelanggan kami yang terus berubah.
                Kami bekerja sama dengan berbagai merek terkemuka dan UMKM lokal untuk menyediakan pilihan produk yang
                beragam dan mendukung pertumbuhan ekonomi lokal.
              </p>
              <p>
                Keamanan dan kepuasan pelanggan adalah prioritas utama kami. Kami menggunakan teknologi keamanan terkini
                untuk melindungi data dan transaksi pelanggan, serta menyediakan layanan pelanggan yang responsif untuk
                membantu menyelesaikan setiap masalah yang mungkin timbul.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="visi" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Visi</h3>
                  <p>
                    Menjadi platform e-commerce terdepan di Indonesia yang menghubungkan konsumen dengan produk
                    berkualitas dan mendukung pertumbuhan ekonomi digital nasional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Misi</h3>
                  <ul className="space-y-2">
                    <li>Menyediakan produk berkualitas dengan harga terjangkau</li>
                    <li>Memberikan pengalaman belanja online yang aman, nyaman, dan efisien</li>
                    <li>Mendukung pertumbuhan UMKM lokal melalui platform digital</li>
                    <li>Mengembangkan teknologi inovatif untuk meningkatkan layanan</li>
                    <li>Membangun hubungan jangka panjang dengan pelanggan dan mitra</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tim" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src="/img/CEO-Ricky.jpg" alt="CEO" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Ricky Steven Silaban</h3>
                  <p className="text-muted-foreground">CEO & Founder</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src="/img/CTO-Sry.jpg" alt="CTO" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Sry Desi Marbun</h3>
                  <p className="text-muted-foreground">CTO</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src="/img/CMO-Mery.jpg" alt="CMO" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Mery Kristina</h3>
                  <p className="text-muted-foreground">CMO</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
