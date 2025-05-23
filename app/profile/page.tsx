import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { UserProfile } from "@/components/profile/user-profile"
import { OrderHistory } from "@/components/profile/order-history"
import { SavedAddresses } from "@/components/profile/saved-addresses"
import { PaymentMethods } from "@/components/profile/payment-methods"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Profil Pengguna | Maronan",
  description: "Halaman profil pengguna Maronan",
}

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="orders">Pesanan</TabsTrigger>
          <TabsTrigger value="addresses">Alamat</TabsTrigger>
          <TabsTrigger value="payment">Pembayaran</TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <TabsContent value="profile" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Informasi Profil</h2>
            <Separator className="mb-6" />
            <UserProfile />
          </TabsContent>

          <TabsContent value="orders" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Riwayat Pesanan</h2>
            <Separator className="mb-6" />
            <ScrollArea className="h-[500px]">
              <OrderHistory />
            </ScrollArea>
          </TabsContent>

          <TabsContent value="addresses" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Alamat Tersimpan</h2>
            <Separator className="mb-6" />
            <SavedAddresses />
          </TabsContent>

          <TabsContent value="payment" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Metode Pembayaran</h2>
            <Separator className="mb-6" />
            <PaymentMethods />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  )
}
