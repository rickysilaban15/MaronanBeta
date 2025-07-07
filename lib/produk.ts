import { prisma } from "@/lib/prisma";

export async function getAllProdukIds() {
  const produkList = await prisma.produk.findMany({
    select: { id: true },
  });
  return produkList.map((produk) => produk.id);
}

export async function getProdukById(id: string) {
  return await prisma.produk.findUnique({
    where: { id },
  });
}
