const nodemailer = require('nodemailer')

export default async function sendMail (req, res) {
    const transporter = nodemailer.createTransport({
        host: 'liampugh.co.uk',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPASS,
        }
    })
    
    const mailData = {
        from: `Website Enquiry from ${req.body.email}`,
        to: process.env.EMAILUSER,
        subject: `Message From ${req.body.name}`,
        text: req.body.body,
        html: `<div><h3>${req.body.title}</h3><h4>${req.body.subject}</h4><p>${req.body.body}</p></div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
        console.error(err)
        else
        console.log(info)
        console.log(mailData)
    })

    res.status(200).json({message: 'Email Sent'})
}