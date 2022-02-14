const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

export async function getPosts() {
    prisma.Blog.findMany({
        data: {
            
        }
    })
}