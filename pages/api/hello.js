// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(req, res) {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here

  try {
    const projects = await prisma.projects.findMany()
    res.status(200).json({result})
  } catch(err) {
    console.log(err)
  } finally {
    await prisma.$disconnect
    res.status(500).json({err: 'Failed to load data'})
  }
  

  try {
    await prisma.projects.create({
      data: {
        slug: req.body.slug,
        title: req.body.title,
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

main()
  .catch((err) => {
    throw err
  })
  .finally(async () => {
    await prisma.$disconnect()
  })