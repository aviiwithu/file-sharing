const nodemailer = require('nodemailer');


async function sendEmail({from, to, subject, text, html}){

    try {
        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure:false,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
    
        })
    
        const info = await transporter.sendMail({
            from: `fileSharing < ${from} >`,
            to: to ,
            subject: subject,
            text: text,
            html: html
        })

        console.log("info",info);
        
    } catch (error) {
        console.log("email service file",error.message);
    }

}

module.exports = sendEmail;