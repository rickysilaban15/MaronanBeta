"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { formatRupiah } from "@/lib/utils"
import { Eye, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

type Order = {
  id: string
  customer: string
  date: string
  total: number
  status: OrderStatus
  items: number
}

const initialOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Felix Andrian",
    date: "2025-05-01",
    total: 1250000,
    status: "delivered",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Felicia",
    date: "2025-04-28",
    total: 750000,
    status: "shipped",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Ahmad Hidayat",
    date: "2025-04-18",
    total: 2100000,
    status: "processing",
    items: 4,
  },
  {
    id: "ORD-004",
    customer: "Petrik",
    date: "2025-05-17",
    total: 450000,
    status: "pending",
    items: 1,
  },
  {
    id: "ORD-005",
    customer: "Eko Prasetyo",
    date: "2025-04-10",
    total: 1800000,
    status: "cancelled",
    items: 3,
  },
  {
    id: "ORD-006",
    customer: "Rina Wijaya",
    date: "2025-04-05",
    total: 950000,
    status: "delivered",
    items: 2,
  },
  {
    id: "ORD-007",
    customer: "Joko Susilo",
    date: "2025-05-04",
    total: 1350000,
    status: "shipped",
    items: 3,
  },
  {
    id: "ORD-008",
    customer: "Maya Sari",
    date: "2025-04-01",
    total: 650000,
    status: "processing",
    items: 2,
  },
]

export function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all")

  const filteredOrders = orders.filter(
    (order) =>
      (order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || order.status === statusFilter),
  )

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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Kelola Pesanan</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari pesanan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full sm:w-[300px]"
          />
        </div>
        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as OrderStatus | "all")}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="pending">Menunggu</SelectItem>
            <SelectItem value="processing">Diproses</SelectItem>
            <SelectItem value="shipped">Dikirim</SelectItem>
            <SelectItem value="delivered">Diterima</SelectItem>
            <SelectItem value="cancelled">Dibatalkan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Pesanan</TableHead>
              <TableHead>Pelanggan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{formatRupiah(order.total)}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status === "pending" && "Menunggu"}
                    {order.status === "processing" && "Diproses"}
                    {order.status === "shipped" && "Dikirim"}
                    {order.status === "delivered" && "Diterima"}
                    {order.status === "cancelled" && "Dibatalkan"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Detail Pesanan {order.id}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-medium mb-2">Informasi Pelanggan</h3>
                              <p>Nama: {order.customer}</p>
                              <p>Email: customer@example.com</p>
                              <p>Telepon: +62 87818894504</p>
                            </div>
                            <div>
                              <h3 className="font-medium mb-2">Informasi Pengiriman</h3>
                              <p>Alamat: Jl. Contoh No. 123, Jakarta</p>
                              <p>Kurir: JNE Regular</p>
                              <p>No. Resi: JNE12345678</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium mb-2">Produk</h3>
                            <div className="rounded-md border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Produk</TableHead>
                                    <TableHead>Harga</TableHead>
                                    <TableHead>Jumlah</TableHead>
                                    <TableHead className="text-right">Subtotal</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Smartphone XYZ Pro</TableCell>
                                    <TableCell>{formatRupiah(4999000)}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell className="text-right">{formatRupiah(4999000)}</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Headphone Bluetooth</TableCell>
                                    <TableCell>{formatRupiah(899000)}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell className="text-right">{formatRupiah(899000)}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium mb-2">Status Pesanan</h3>
                              <Select
                                defaultValue={order.status}
                                onValueChange={(value) => handleUpdateStatus(order.id, value as OrderStatus)}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Menunggu</SelectItem>
                                  <SelectItem value="processing">Diproses</SelectItem>
                                  <SelectItem value="shipped">Dikirim</SelectItem>
                                  <SelectItem value="delivered">Diterima</SelectItem>
                                  <SelectItem value="cancelled">Dibatalkan</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">
                                Subtotal: {formatRupiah(order.total - 15000)}
                              </p>
                              <p className="text-sm text-muted-foreground">Pengiriman: {formatRupiah(15000)}</p>
                              <p className="text-lg font-bold">Total: {formatRupiah(order.total)}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
