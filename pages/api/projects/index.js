// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async (req, res) => {
  // Connect the client
  // ... you will write your Prisma Client queries here

  try {
    await prisma.$connect()

    await prisma.projects.create({
      data: {
        slug: req.body.slug,
        title: req.body.title,
        body: req.body.body,
        images: req.body.images,
      },
    })
    res.status(200).json({message: 'Uploaded project'})
  } catch(err) {
    console.log(err)
    res.status(500).json({error: 'Please try again later'})
  } finally {
    await prisma.$disconnect()
  }
}