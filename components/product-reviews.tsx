import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

type Review = {
  id: string
  user: {
    name: string
    avatar?: string
  }
  rating: number
  date: string
  comment: string
}

const dummyReviews: Review[] = [
  {
    id: "1",
    user: {
      name: "Budi Santoso",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2023-05-15",
    comment:
      "Produk sangat bagus dan sesuai dengan deskripsi. Pengiriman juga cepat. Sangat puas dengan pembelian ini.",
  },
  {
    id: "2",
    user: {
      name: "Siti Rahayu",
    },
    rating: 4,
    date: "2023-04-28",
    comment: "Kualitas produk bagus, tapi pengiriman agak lama. Overall puas dengan produknya.",
  },
  {
    id: "3",
    user: {
      name: "Ahmad Hidayat",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2023-04-10",
    comment: "Produk sesuai dengan ekspektasi. Harga juga sangat terjangkau untuk kualitas seperti ini.",
  },
]

export function ProductReviews({ productId }: { productId: string }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Tulis Ulasan</h3>
        <div className="flex items-center mb-4">
          <div className="flex">{renderStars(0)}</div>
          <span className="ml-2 text-sm text-muted-foreground">Pilih rating</span>
        </div>
        <Textarea placeholder="Tulis ulasan Anda di sini..." className="mb-4" />
        <Button>Kirim Ulasan</Button>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="text-lg font-semibold mb-4">Ulasan Pelanggan ({dummyReviews.length})</h3>

        <div className="space-y-6">
          {dummyReviews.map((review) => (
            <div key={review.id} className="space-y-2">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>
                    {review.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.user.name}</div>
                  <div className="text-sm text-muted-foreground">{formatDate(review.date)}</div>
                </div>
              </div>

              <div className="flex">{renderStars(review.rating)}</div>

              <p className="text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
