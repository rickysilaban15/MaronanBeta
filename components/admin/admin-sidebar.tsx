"use client"

import { Button } from "@/components/ui/button"
import { useUser } from "@/components/user-provider"
import { useRouter } from "next/navigation"
import { LayoutDashboard, Package, Tag, ShoppingCart, Users, LogOut, BarChart, FileText } from "lucide-react"

type AdminTab = "dashboard" | "products" | "categories" | "orders" | "users" | "analytics" | "reports"

interface AdminSidebarProps {
  activeTab: AdminTab
  setActiveTab: (tab: AdminTab) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const { logout, user } = useUser()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="w-64 bg-muted/40 border-r min-h-screen p-4">
      <div className="flex items-center justify-center mb-8 pt-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="mb-4 px-4 py-2">
        <p className="text-sm text-muted-foreground">Selamat datang,</p>
        <p className="font-medium">{user?.name || "Admin"}</p>
      </div>

      <nav className="space-y-2">
        <Button
          variant={activeTab === "dashboard" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("dashboard")}
        >
          <LayoutDashboard className="mr-2 h-5 w-5" />
          Dashboard
        </Button>

        <Button
          variant={activeTab === "products" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("products")}
        >
          <Package className="mr-2 h-5 w-5" />
          Produk
        </Button>

        <Button
          variant={activeTab === "categories" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("categories")}
        >
          <Tag className="mr-2 h-5 w-5" />
          Kategori
        </Button>

        <Button
          variant={activeTab === "orders" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("orders")}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Pesanan
        </Button>

        <Button
          variant={activeTab === "users" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("users")}
        >
          <Users className="mr-2 h-5 w-5" />
          Pengguna
        </Button>

        <Button
          variant={activeTab === "analytics" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("analytics")}
        >
          <BarChart className="mr-2 h-5 w-5" />
          Analitik
        </Button>

        <Button
          variant={activeTab === "reports" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("reports")}
        >
          <FileText className="mr-2 h-5 w-5" />
          Laporan
        </Button>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="outline" className="w-full justify-start text-destructive" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" />
          Keluar
        </Button>
      </div>
    </div>
  )
}
