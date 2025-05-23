"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminProducts } from "@/components/admin/admin-products"
import { AdminCategories } from "@/components/admin/admin-categories"
import { AdminOrders } from "@/components/admin/admin-orders"
import { AdminUsers } from "@/components/admin/admin-users"
import { AdminStats } from "@/components/admin/admin-stats"
import { AdminAnalytics } from "@/components/admin/admin-analytics"
import { AdminReports } from "@/components/admin/admin-reports"

type AdminTab = "dashboard" | "products" | "categories" | "orders" | "users" | "analytics" | "reports"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard")

  return (
    <div className="flex min-h-screen">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-6">
        {activeTab === "dashboard" && <AdminStats />}
        {activeTab === "products" && <AdminProducts />}
        {activeTab === "categories" && <AdminCategories />}
        {activeTab === "orders" && <AdminOrders />}
        {activeTab === "users" && <AdminUsers />}
        {activeTab === "analytics" && <AdminAnalytics />}
        {activeTab === "reports" && <AdminReports />}
      </div>
    </div>
  )
}
