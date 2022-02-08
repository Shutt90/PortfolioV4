const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

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
            await prisma.$connect()
            const user = await prisma.Users.findUnique({
                where: {
                    email: email,
                }
            })

            const match = await bcrypt.compare(req.body.password, user.password);
            
            if(match) {

                console.log('Congrats. Get some sleep')

            } else {
                res.status(400).json({error: 'wrong username/password'})


            }

        } catch(err) {
            console.error(err)
            res.status(500).json({error: 'Server Down'})

        } finally {
            await prisma.$disconnect()
        }
    }
    
}