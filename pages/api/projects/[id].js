// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    await prisma.$connect()
    const thisProject = await prisma.projects.findOne({where: id})

  } catch(err) {
    console.log(err)
    res.status(500).json({error: 'Please try again later'})
  } finally {
    await prisma.$disconnect()
  }
}