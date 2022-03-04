import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function loadPosts() {
    const blogs = await prisma.blog.findMany();

    return blogs
}