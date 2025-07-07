// lib/produk.ts
import { prisma } from "@/lib/prisma" // jika kamu pakai Prisma

export async function getAllProdukIds() {
  const produk = await prisma.produk.findMany({
    select: { id: true },
  })

  return produk
}
