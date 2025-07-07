// lib/produk.ts

import { prisma } from "@/lib/prisma"

export async function getProdukById(id: string) {
  return await prisma.produk.findUnique({
    where: { id },
  })
}

export async function getAllProdukIds() {
  const produk = await prisma.produk.findMany({
    select: { id: true },
  })

  return produk
}
