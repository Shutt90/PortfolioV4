import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function loadProjects() {
    const projects = await prisma.projects.findMany();

    return projects
}