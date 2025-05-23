import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getCategoryName(slug: string): string {
  const categoryMap: Record<string, string> = {
    elektronik: "Elektronik",
    "fashion-pria": "Fashion Pria",
    "fashion-wanita": "Fashion Wanita",
    "peralatan-rumah": "Peralatan Rumah",
    "makanan-minuman": "Makanan & Minuman",
    "kesehatan": "Kesehatan",
    "buku-alat-tulis": "Buku & Alat Tulis",
  }

  return categoryMap[slug] || slug
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
