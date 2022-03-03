const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

export async function getPosts() {
    const data = await prisma.Blog.findMany({
        data: {
            
        }
    })

    return data
}