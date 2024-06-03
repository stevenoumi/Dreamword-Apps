// controller de mail avec node mailer

const nodemailer = require('nodemailer');
 exports.sendMail = async (req, res) => {
    const { email, subject, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "dreamworldburger@gmail.com",
                pass: "aqug cixm kogf fmef"
            }
        });
        const mailOptions = {
            from: "dreamworldburger@gmail.com",
            to: email,
            subject: subject,
            text: message
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}