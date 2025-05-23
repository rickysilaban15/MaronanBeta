import { formatRupiah } from "@/lib/utils"

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

interface OrderInvoiceProps {
  order: Order
}

export function OrderInvoice({ order }: OrderInvoiceProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg print:shadow-none">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">INVOICE</h1>
          <p className="text-gray-600">#{order.id}</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold">Maronan Beta</h2>
          <p>Jl. Maronan No. 123</p>
          <p>Jakarta Selatan, Indonesia</p>
          <p>info@maronan.com</p>
          <p>+62 87818894504</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-gray-700 mb-2">Ditagihkan Kepada:</h3>
          <p>Nama Pelanggan</p>
          <p>{order.shipping.address}</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Nomor Invoice:</h3>
              <p>INV-{order.id}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Tanggal:</h3>
              <p>{formatDate(order.date)}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-gray-700 mb-2">Metode Pembayaran:</h3>
            <p>{order.payment.method}</p>
          </div>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-2">Produk</th>
            <th className="text-right py-2">Harga</th>
            <th className="text-right py-2">Jumlah</th>
            <th className="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-4">{item.name}</td>
              <td className="text-right py-4">{formatRupiah(item.price)}</td>
              <td className="text-right py-4">{item.quantity}</td>
              <td className="text-right py-4">{formatRupiah(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mb-8">
        <div className="w-1/2">
          <div className="flex justify-between py-2">
            <span className="font-medium">Subtotal:</span>
            <span>{formatRupiah(order.total - order.shipping.cost)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Pengiriman ({order.shipping.method}):</span>
            <span>{formatRupiah(order.shipping.cost)}</span>
          </div>
          <div className="flex justify-between py-2 text-lg font-bold">
            <span>Total:</span>
            <span>{formatRupiah(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-300 pt-4">
        <h3 className="font-bold text-gray-700 mb-2">Catatan:</h3>
        <p className="text-gray-600">
          Terima kasih telah berbelanja di Maronan Beta. Jika Anda memiliki pertanyaan tentang pesanan ini, silakan
          hubungi layanan pelanggan kami di info@maronan.com atau +6287818894504.
        </p>
      </div>
    </div>
  )
}
