export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'ialdo1206@gmail.com',
            pass: 'ypxtbajaeceoiprk',
        },
        secure: true,
    });

    const mailData = {
        from: req.body.email,
        to: "ialdo1206@gmail.com",
        subject: `New Message From ${req.body.name}`,
        text: req.body.message,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
    })

    res.send('success')
}