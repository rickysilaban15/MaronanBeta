"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { useReactToPrint } from "react-to-print"
import { Printer, Download, Share2 } from "lucide-react"

interface InvoiceProps {
  order: {
    id: string
    date: string
    status: string
    items: {
      id: number
      name: string
      price: number
      quantity: number
    }[]
    shipping: number
    tax: number
    total: number
    paymentMethod: string
    shippingAddress: {
      name: string
      street: string
      city: string
      province: string
      postalCode: string
    }
  }
}

export function InvoiceGenerator({ order }: InvoiceProps) {
  const { toast } = useToast()
  const invoiceRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: `Invoice-${order.id}`,
    onAfterPrint: () => {
      toast({
        title: "Invoice Dicetak",
        description: "Invoice berhasil dicetak.",
      })
    },
  })

  const handleDownload = () => {
    toast({
      title: "Invoice Diunduh",
      description: "Invoice berhasil diunduh sebagai PDF.",
    })
  }

  const handleShare = () => {
    toast({
      title: "Invoice Dibagikan",
      description: "Link invoice telah disalin ke clipboard.",
    })
  }

  const calculateSubtotal = () => {
    return order.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Invoice #{order.id}</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Cetak
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Unduh
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Bagikan
          </Button>
        </div>
      </div>

      <Card ref={invoiceRef} className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">INVOICE</h2>
            <p className="text-muted-foreground">#{order.id}</p>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-bold">Maronan</h3>
            <p className="text-sm text-muted-foreground">Jl. Pahlawan No. 123</p>
            <p className="text-sm text-muted-foreground">Jakarta, Indonesia 12345</p>
            <p className="text-sm text-muted-foreground">support@maronan.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-medium mb-2">Ditagihkan Kepada:</h4>
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.street}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.province}
            </p>
            <p>{order.shippingAddress.postalCode}</p>
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">Tanggal Invoice:</span>
                <span>{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status Pembayaran:</span>
                <span className="capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Metode Pembayaran:</span>
                <span>{order.paymentMethod}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Produk</th>
                <th className="text-center py-2">Jumlah</th>
                <th className="text-right py-2">Harga</th>
                <th className="text-right py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2">{item.name}</td>
                  <td className="text-center py-2">{item.quantity}</td>
                  <td className="text-right py-2">Rp {item.price.toLocaleString("id-ID")}</td>
                  <td className="text-right py-2">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <div className="w-1/2">
            <div className="flex justify-between py-1">
              <span>Subtotal:</span>
              <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Pengiriman:</span>
              <span>Rp {order.shipping.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Pajak (10%):</span>
              <span>Rp {order.tax.toLocaleString("id-ID")}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between py-1 font-bold">
              <span>Total:</span>
              <span>Rp {order.total.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h4 className="font-medium mb-2">Catatan:</h4>
          <p className="text-sm text-muted-foreground">
            Terima kasih telah berbelanja di Maronan. Jika Anda memiliki pertanyaan tentang invoice ini, silakan hubungi
            layanan pelanggan kami di support@maronan.com atau +627818894504.
          </p>
        </div>
      </Card>
    </div>
  )
}
