// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async (req, res) => {
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

export async function getServerSideProps() {
  const projects = await prisma.projects.findMany()
  return {
    props: {
      projects: projects

    }

  }

}