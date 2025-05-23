"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, BarChart, PieChart, Users, ShoppingBag } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatRupiah } from "@/lib/utils"

// Sample data for reports
const topProducts = [
  { id: "1", name: "Smartphone XYZ Pro", category: "Elektronik", sold: 120, revenue: 599880000 },
  { id: "2", name: "Laptop Ultrabook ABC", category: "Elektronik", sold: 85, revenue: 1062500000 },
  { id: "3", name: "Smart TV 55 Inch 4K", category: "Elektronik", sold: 65, revenue: 519935000 },
  { id: "4", name: "Headphone Bluetooth Premium", category: "Elektronik", sold: 110, revenue: 208890000 },
  { id: "5", name: "Kamera Mirrorless Pro", category: "Elektronik", sold: 45, revenue: 1124955000 },
]

const topCustomers = [
  { id: "1", name: "Felicia", orders: 12, spent: 15600000 },
  { id: "2", name: "Yohana", orders: 10, spent: 12500000 },
  { id: "3", name: "Petrik", orders: 8, spent: 9800000 },
  { id: "4", name: "Dewi Lestari", orders: 7, spent: 8900000 },
  { id: "5", name: "Eko Prasetyo", orders: 6, spent: 7500000 },
]

const salesByCategory = [
  { category: "Elektronik", sales: 3500000000, percentage: 45 },
  { category: "Fashion Pria", sales: 1200000000, percentage: 15 },
  { category: "Fashion Wanita", sales: 1500000000, percentage: 20 },
  { category: "Peralatan Rumah", sales: 800000000, percentage: 10 },
  { category: "Makanan & Minuman", sales: 400000000, percentage: 5 },
  { category: "Kesehatan", sales: 300000000, percentage: 3 },
  { category: "Buku & Alat Tulis", sales: 200000000, percentage: 2 },
]

export function AdminReports() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(2023, 0, 1),
    to: new Date(),
  })

  const handleGenerateReport = (reportType: string) => {
    // In a real application, this would generate and download a report
    alert(
      `Generating ${reportType} report from ${dateRange.from ? format(dateRange.from, "PP") : "start"} to ${dateRange.to ? format(dateRange.to, "PP") : "now"}`,
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Laporan</h2>

        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[300px] justify-start text-left font-normal", !dateRange && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "PPP")} - {format(dateRange.to, "PPP")}
                    </>
                  ) : (
                    format(dateRange.from, "PPP")
                  )
                ) : (
                  "Pilih rentang tanggal"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="range" selected={dateRange} onSelect={setDateRange as any} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleGenerateReport("sales")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BarChart className="h-12 w-12 mb-4 text-primary" />
            <CardTitle className="mb-2">Laporan Penjualan</CardTitle>
            <CardDescription>Analisis penjualan berdasarkan periode, produk, dan kategori</CardDescription>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleGenerateReport("products")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <ShoppingBag className="h-12 w-12 mb-4 text-primary" />
            <CardTitle className="mb-2">Laporan Produk</CardTitle>
            <CardDescription>Analisis performa produk, stok, dan tren penjualan</CardDescription>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleGenerateReport("customers")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="h-12 w-12 mb-4 text-primary" />
            <CardTitle className="mb-2">Laporan Pelanggan</CardTitle>
            <CardDescription>Analisis perilaku pelanggan dan loyalitas</CardDescription>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleGenerateReport("financial")}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <PieChart className="h-12 w-12 mb-4 text-primary" />
            <CardTitle className="mb-2">Laporan Keuangan</CardTitle>
            <CardDescription>Analisis pendapatan, pengeluaran, dan profit</CardDescription>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Produk Terlaris</TabsTrigger>
          <TabsTrigger value="customers">Pelanggan Terbaik</TabsTrigger>
          <TabsTrigger value="categories">Penjualan per Kategori</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Produk Terlaris</CardTitle>
                  <CardDescription>Produk dengan penjualan tertinggi dalam periode yang dipilih</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleGenerateReport("top-products")}>
                  <Download className="h-4 w-4 mr-2" />
                  Unduh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produk</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead className="text-right">Terjual</TableHead>
                    <TableHead className="text-right">Pendapatan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">{product.sold}</TableCell>
                      <TableCell className="text-right">{formatRupiah(product.revenue)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pelanggan Terbaik</CardTitle>
                  <CardDescription>
                    Pelanggan dengan nilai pembelian tertinggi dalam periode yang dipilih
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleGenerateReport("top-customers")}>
                  <Download className="h-4 w-4 mr-2" />
                  Unduh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead className="text-right">Jumlah Pesanan</TableHead>
                    <TableHead className="text-right">Total Pembelian</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell className="text-right">{customer.orders}</TableCell>
                      <TableCell className="text-right">{formatRupiah(customer.spent)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Penjualan per Kategori</CardTitle>
                  <CardDescription>Distribusi penjualan berdasarkan kategori produk</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleGenerateReport("sales-by-category")}>
                  <Download className="h-4 w-4 mr-2" />
                  Unduh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kategori</TableHead>
                    <TableHead className="text-right">Penjualan</TableHead>
                    <TableHead className="text-right">Persentase</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesByCategory.map((category) => (
                    <TableRow key={category.category}>
                      <TableCell className="font-medium">{category.category}</TableCell>
                      <TableCell className="text-right">{formatRupiah(category.sales)}</TableCell>
                      <TableCell className="text-right">{category.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
