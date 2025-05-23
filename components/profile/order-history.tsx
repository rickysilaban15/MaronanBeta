"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatRupiah } from "@/lib/utils"
import { Eye, Download, Printer } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { OrderInvoice } from "@/components/profile/order-invoice"

type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

type Order = {
  id: string
  date: string
  total: number
  status: OrderStatus
  items: {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
  }[]
  shipping: {
    address: string
    method: string
    cost: number
    trackingNumber?: string
  }
  payment: {
    method: string
    status: "paid" | "pending" | "failed"
  }
}

// Sample order data
const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    date: "2025-05-10",
    total: 1250000,
    status: "delivered",
    items: [
      {
        id: "1",
        name: "Smartphone XYZ Pro",
        price: 4999000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=Smartphone",
      },
      {
        id: "4",
        name: "Headphone Bluetooth Premium",
        price: 899000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=Headphone",
      },
    ],
    shipping: {
      address: "Jl. Contoh No. 123, Jakarta Selatan",
      method: "JNE Regular",
      cost: 15000,
      trackingNumber: "JNE12345678",
    },
    payment: {
      method: "Transfer Bank BCA",
      status: "paid",
    },
  },
  {
    id: "ORD-002",
    date: "2025-05-08",
    total: 750000,
    status: "shipped",
    items: [
      {
        id: "12",
        name: "Sepatu Sneakers Pria",
        price: 799000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=Sneakers",
      },
    ],
    shipping: {
      address: "Jl. Contoh No. 123, Jakarta Selatan",
      method: "SiCepat REG",
      cost: 18000,
      trackingNumber: "SICPT87654321",
    },
    payment: {
      method: "DANA",
      status: "paid",
    },
  },
  {
    id: "ORD-003",
    date: "2025-05-05",
    total: 450000,
    status: "pending",
    items: [
      {
        id: "23",
        name: "Snack Box Premium",
        price: 150000,
        quantity: 3,
        image: "/placeholder.svg?height=80&width=80&text=Snack",
      },
    ],
    shipping: {
      address: "Jl. Contoh No. 123, Jakarta Selatan",
      method: "JNE Regular",
      cost: 15000,
    },
    payment: {
      method: "Transfer Bank Mandiri",
      status: "pending",
    },
  },
]

export function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [showInvoice, setShowInvoice] = useState(false)

  const getStatusBadgeVariant = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return "outline"
      case "processing":
        return "secondary"
      case "shipped":
        return "default"
      case "delivered":
        return "success"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return "Menunggu"
      case "processing":
        return "Diproses"
      case "shipped":
        return "Dikirim"
      case "delivered":
        return "Diterima"
      case "cancelled":
        return "Dibatalkan"
      default:
        return status
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  const handlePrintInvoice = () => {
    if (selectedOrder) {
      window.print()
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Pesanan</CardTitle>
          <CardDescription>Lihat dan kelola pesanan Anda.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="pending">Menunggu</TabsTrigger>
              <TabsTrigger value="processing">Diproses</TabsTrigger>
              <TabsTrigger value="shipped">Dikirim</TabsTrigger>
              <TabsTrigger value="delivered">Diterima</TabsTrigger>
              <TabsTrigger value="cancelled">Dibatalkan</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {sampleOrders.length > 0 ? (
                  sampleOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row justify-between mb-4">
                        <div>
                          <p className="font-medium">Pesanan #{order.id}</p>
                          <p className="text-sm text-muted-foreground">{formatDate(order.date)}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <Badge variant={getStatusBadgeVariant(order.status)}>{getStatusLabel(order.status)}</Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm mb-1">
                          <span className="font-medium">Total:</span> {formatRupiah(order.total)}
                        </p>
                        <p className="text-sm mb-1">
                          <span className="font-medium">Metode Pembayaran:</span> {order.payment.method}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Status Pembayaran:</span>{" "}
                          <Badge variant={order.payment.status === "paid" ? "success" : "outline"}>
                            {order.payment.status === "paid" ? "Dibayar" : "Menunggu Pembayaran"}
                          </Badge>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                              <Eye className="h-4 w-4 mr-2" />
                              Detail
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Detail Pesanan #{order.id}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-medium mb-2">Informasi Pesanan</h3>
                                  <p className="text-sm mb-1">ID Pesanan: {order.id}</p>
                                  <p className="text-sm mb-1">Tanggal: {formatDate(order.date)}</p>
                                  <p className="text-sm mb-1">
                                    Status:{" "}
                                    <Badge variant={getStatusBadgeVariant(order.status)}>
                                      {getStatusLabel(order.status)}
                                    </Badge>
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">Informasi Pengiriman</h3>
                                  <p className="text-sm mb-1">Alamat: {order.shipping.address}</p>
                                  <p className="text-sm mb-1">Kurir: {order.shipping.method}</p>
                                  {order.shipping.trackingNumber && (
                                    <p className="text-sm mb-1">No. Resi: {order.shipping.trackingNumber}</p>
                                  )}
                                </div>
                              </div>

                              <div>
                                <h3 className="font-medium mb-2">Produk</h3>
                                <div className="border rounded-md">
                                  <div className="grid grid-cols-12 gap-2 p-3 border-b font-medium text-sm">
                                    <div className="col-span-6">Produk</div>
                                    <div className="col-span-2 text-right">Harga</div>
                                    <div className="col-span-2 text-center">Jumlah</div>
                                    <div className="col-span-2 text-right">Subtotal</div>
                                  </div>
                                  {order.items.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 gap-2 p-3 border-b text-sm">
                                      <div className="col-span-6 flex items-center">
                                        <div className="w-10 h-10 mr-2 relative flex-shrink-0">
                                          <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="object-cover rounded"
                                          />
                                        </div>
                                        <span>{item.name}</span>
                                      </div>
                                      <div className="col-span-2 text-right">{formatRupiah(item.price)}</div>
                                      <div className="col-span-2 text-center">{item.quantity}</div>
                                      <div className="col-span-2 text-right">
                                        {formatRupiah(item.price * item.quantity)}
                                      </div>
                                    </div>
                                  ))}
                                  <div className="grid grid-cols-12 gap-2 p-3 text-sm">
                                    <div className="col-span-10 text-right">Subtotal</div>
                                    <div className="col-span-2 text-right">
                                      {formatRupiah(order.total - order.shipping.cost)}
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-12 gap-2 p-3 text-sm border-b">
                                    <div className="col-span-10 text-right">Pengiriman</div>
                                    <div className="col-span-2 text-right">{formatRupiah(order.shipping.cost)}</div>
                                  </div>
                                  <div className="grid grid-cols-12 gap-2 p-3 font-medium">
                                    <div className="col-span-10 text-right">Total</div>
                                    <div className="col-span-2 text-right">{formatRupiah(order.total)}</div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline" onClick={() => setShowInvoice(true)}>
                                  <Printer className="h-4 w-4 mr-2" />
                                  Cetak Invoice
                                </Button>
                                <Button variant="outline">
                                  <Download className="h-4 w-4 mr-2" />
                                  Unduh Invoice
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Invoice
                        </Button>

                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm">
                            Beli Lagi
                          </Button>
                        )}

                        {order.status === "pending" && (
                          <Button variant="destructive" size="sm">
                            Batalkan
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Anda belum memiliki pesanan.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Other tabs will filter orders by status */}
            {["pending", "processing", "shipped", "delivered", "cancelled"].map((status) => (
              <TabsContent key={status} value={status}>
                <div className="space-y-4">
                  {sampleOrders.filter((order) => order.status === status).length > 0 ? (
                    sampleOrders
                      .filter((order) => order.status === status)
                      .map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row justify-between mb-4">
                            <div>
                              <p className="font-medium">Pesanan #{order.id}</p>
                              <p className="text-sm text-muted-foreground">{formatDate(order.date)}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <Badge variant={getStatusBadgeVariant(order.status)}>
                                {getStatusLabel(order.status)}
                              </Badge>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm mb-1">
                              <span className="font-medium">Total:</span> {formatRupiah(order.total)}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Metode Pembayaran:</span> {order.payment.method}
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Status Pembayaran:</span>{" "}
                              <Badge variant={order.payment.status === "paid" ? "success" : "outline"}>
                                {order.payment.status === "paid" ? "Dibayar" : "Menunggu Pembayaran"}
                              </Badge>
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Detail
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Tidak ada pesanan dengan status ini.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {showInvoice && selectedOrder && (
        <div className="fixed inset-0 bg-background z-50 overflow-auto p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-4">
              <Button variant="outline" className="mr-2" onClick={handlePrintInvoice}>
                <Printer className="h-4 w-4 mr-2" />
                Cetak
              </Button>
              <Button variant="outline" className="mr-2">
                <Download className="h-4 w-4 mr-2" />
                Unduh PDF
              </Button>
              <Button variant="ghost" onClick={() => setShowInvoice(false)}>
                Tutup
              </Button>
            </div>
            <OrderInvoice order={selectedOrder} />
          </div>
        </div>
      )}
    </>
  )
}
