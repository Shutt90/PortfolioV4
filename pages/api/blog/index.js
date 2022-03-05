const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

export default async function createPost (req, res) {

    if(req.headers.cookie === `token=${process.env.UUID}`) {
        try {
            await prisma.Blog.create({
                data: {
                    title: req.body.title,
                    body: req.body.body,
                    slug: req.body.slug
                },
            })
            res.status(200).json({message: 'Uploaded post'})
        } catch(err) {
            console.error(err)
            res.status(500).json({error: 'Please try again later'})
        }
    } else {
        res.status(400).json({error: 'User not logged in'})
    }
}