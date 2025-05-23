import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req) {
  const data = await req.json()
  try {
    const result = await prisma.user.create({ data })
    return Response.json(result)
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Gagal menyimpan user' }), { status: 500 })
  }
}
