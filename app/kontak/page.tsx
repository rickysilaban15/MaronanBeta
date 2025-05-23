import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
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
            <BreadcrumbLink>Kontak</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-4xl font-bold mb-6 text-center">Hubungi Kami</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Kami siap membantu Anda dengan pertanyaan, saran, atau masalah yang Anda miliki. Silakan hubungi kami melalui
        salah satu cara di bawah ini.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telepon</h3>
            <p className="text-muted-foreground mb-4">Senin - Jumat: 08.00 - 17.00 WIB</p>
            <p className="font-medium">+62 87818894504</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Kami akan membalas dalam 24 jam</p>
            <p className="font-medium">info@maronan.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Alamat</h3>
            <p className="text-muted-foreground mb-4">Kantor Pusat</p>
            <p className="font-medium">Jl. Maronan No. 123, Jakarta Selatan, Indonesia</p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Masukkan email Anda" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input id="subject" placeholder="Masukkan subjek pesan" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea id="message" placeholder="Tulis pesan Anda di sini" rows={6} />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const handleSubmitKontak = async (e) => {
  e.preventDefault()
  const res = await fetch('/api/kontak', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama: name,
      email,
      pesan: message
    })
  })
  const result = await res.json()
  console.log('Kontak terkirim:', result)
}
