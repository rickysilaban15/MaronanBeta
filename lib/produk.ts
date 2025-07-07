import { prisma } from "@/lib/prisma"

export async function getProdukById(id: string) {
  return await prisma.produk.findUnique({
    where: { id },
  })
}
