import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function loadPost(slug) {
    const post = await prisma.blog.findUnique({
        where: {
            slug: slug
        }
    });

    return post
}