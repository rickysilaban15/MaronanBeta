"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatRupiah } from "@/lib/utils"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Sample data for charts
const monthlySalesData = [
  { name: "Jan", total: 15000000 },
  { name: "Feb", total: 18000000 },
  { name: "Mar", total: 22000000 },
  { name: "Apr", total: 19000000 },
  { name: "Mei", total: 25000000 },
  { name: "Jun", total: 32000000 },
  { name: "Jul", total: 28000000 },
  { name: "Agu", total: 30000000 },
  { name: "Sep", total: 35000000 },
  { name: "Okt", total: 33000000 },
  { name: "Nov", total: 38000000 },
  { name: "Des", total: 45000000 },
]

const categoryData = [
  { name: "Elektronik", value: 35 },
  { name: "Fashion Pria", value: 20 },
  { name: "Fashion Wanita", value: 25 },
  { name: "Peralatan Rumah", value: 10 },
  { name: "Lainnya", value: 10 },
]

const trafficSourceData = [
  { name: "Direct", value: 30 },
  { name: "Organic Search", value: 25 },
  { name: "Social Media", value: 20 },
  { name: "Referral", value: 15 },
  { name: "Email", value: 10 },
]

const userActivityData = [
  { name: "Jan", active: 1200, new: 400 },
  { name: "Feb", active: 1300, new: 450 },
  { name: "Mar", active: 1400, new: 500 },
  { name: "Apr", active: 1350, new: 480 },
  { name: "Mei", active: 1500, new: 520 },
  { name: "Jun", active: 1600, new: 550 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("year")
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analitik</h2>

        <div className="flex items-center gap-4">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih rentang waktu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Minggu Ini</SelectItem>
              <SelectItem value="month">Bulan Ini</SelectItem>
              <SelectItem value="quarter">Kuartal Ini</SelectItem>
              <SelectItem value="year">Tahun Ini</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pilih tanggal"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="sales">Penjualan</TabsTrigger>
          <TabsTrigger value="products">Produk</TabsTrigger>
          <TabsTrigger value="customers">Pelanggan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(340500000)}</div>
                <p className="text-xs text-muted-foreground">+18.2% dari periode sebelumnya</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">+12.5% dari periode sebelumnya</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rata-rata Nilai Pesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(265187)}</div>
                <p className="text-xs text-muted-foreground">+5.1% dari periode sebelumnya</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pengguna Baru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+8.2% dari periode sebelumnya</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Penjualan Bulanan</CardTitle>
                <CardDescription>Tren penjualan selama 12 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={monthlySalesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => formatRupiah(value).replace("Rp", "")} />
                    <Tooltip formatter={(value) => [formatRupiah(value as number), "Total"]} />
                    <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribusi Kategori</CardTitle>
                <CardDescription>Persentase penjualan berdasarkan kategori produk</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Penjualan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(123456789)}</div>
                <p className="text-xs text-muted-foreground">+20% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Penjualan Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(98765432)}</div>
                <p className="text-xs text-muted-foreground">+15% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Penjualan Langsung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(24691357)}</div>
                <p className="text-xs text-muted-foreground">+25% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pengembalian Dana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(1000000)}</div>
                <p className="text-xs text-muted-foreground">-5% dari bulan lalu</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Grafik Penjualan</CardTitle>
              <CardDescription>Tren penjualan dari waktu ke waktu</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => formatRupiah(value).replace("Rp", "")} />
                  <Tooltip formatter={(value) => [formatRupiah(value as number), "Total"]} />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produk Terlaris</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Produk A</div>
                <p className="text-xs text-muted-foreground">Terjual 500 unit</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produk dengan Retur Tertinggi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Produk B</div>
                <p className="text-xs text-muted-foreground">Dikembalikan 50 kali</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produk dengan Ulasan Terbaik</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Produk C</div>
                <p className="text-xs text-muted-foreground">Rating 4.8/5</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produk dengan Margin Tertinggi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Produk D</div>
                <p className="text-xs text-muted-foreground">Margin 40%</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pelanggan Baru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">150</div>
                <p className="text-xs text-muted-foreground">+10% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pelanggan Aktif</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1200</div>
                <p className="text-xs text-muted-foreground">+5% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nilai Pesanan Rata-rata Pelanggan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatRupiah(300000)}</div>
                <p className="text-xs text-muted-foreground">+3% dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tingkat Retensi Pelanggan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">Stabil dari bulan lalu</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Pengguna</CardTitle>
              <CardDescription>Pengguna aktif vs. pengguna baru</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={userActivityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="active" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="new" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
