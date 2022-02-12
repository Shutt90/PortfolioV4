const nodemailer = require('nodemailer')

export default function (req, res) {
    const transporter = nodemailer.createTransport({
        host: process.env.IP_ADDRESS,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    
    const mailData = {
        from: `Website Enquiry from ${req.body.email}`,
        to: process.env.EMAILUSER,
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
        console.error(err)
        else
        console.log(info)
    })

    res.status(200).json({message: 'Email Sent'})
}