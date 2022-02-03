// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(req, res) {
  // Connect the client
  // ... you will write your Prisma Client queries here

  try {
    await prisma.$connect()

    console.log(req, res)

    await prisma.projects.create({
      data: {
        slug: req.body.slug,
        title: req.body.title,
        body: req.body.body,
        images: req.body.images,
      },
    })
    res.send(200).json({message: 'Uploaded project'})
  } catch(err) {
    console.error(err)
  } finally {
    await prisma.$disconnect
    res.send(500).json({error: 'Please try again later'})
  }
}

export default main()
  .catch((err) => {
    throw err
  })
  .finally(async () => {
    await prisma.$disconnect()
  })