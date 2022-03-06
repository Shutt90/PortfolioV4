const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const cookie = require('cookie')

const prisma = new PrismaClient()

const createUser = async (req, res) => {

    try {
        await prisma.$connect()

        const userFound = await prisma.Users.findUnique({
            where: {
                email: 'hello@liampugh.co.uk'
            }
        })

        if(userFound === null) {
            
            await bcrypt.hash(process.env.password, 10, async function(err, hash) {
                if (err) {
                    console.error(err)
                } 

                await prisma.Users.create({
                    data: {
                     email: 'hello@liampugh.co.uk',
                     password: hash,
                     name: 'Liam Pugh',
                     uuid: process.env.uuid,
                    }
                })

            })

            console.log('Super user created')


        } else {
            return console.log('Super user exists')
        }


    } catch(err) {
        console.error(err)
    } finally {
        await prisma.$disconnect()
    }

}

createUser()

export default async function login(req, res) {

    if(req.method === 'POST') {
        try {
            const email = req.body.username
            const user = await prisma.Users.findUnique({
                where: {
                    email: email,
                }
            })
            
            if(!user) {
                res.status(400).json({error: 'Wrong username/password'})
            }

            const match = await bcrypt.compare(req.body.password, user.password);
            
            if(match) {
                res.setHeader('Set-Cookie', cookie.serialize('token', user.uuid, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60, //1 hour
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/'
                }))
                res.status(200).redirect('/')

            } else {
                res.status(400).json({error: 'Wrong username/password'})
            }

        } catch(err) {
            console.error(err)
            res.status(500).json({error: 'Server Down'})

        } finally {
            await prisma.$disconnect()
        }
    }
    
}