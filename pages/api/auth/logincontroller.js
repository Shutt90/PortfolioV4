const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

createUser = async (req, res) => {

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