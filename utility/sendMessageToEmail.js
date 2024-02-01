const nodemailer = require("nodemailer");
const createResponse = require("./createResponse");

async function sendMessageToEmail(to, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.Admin_EMAIL,
        pass: process.env.Admin_EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.Admin_EMAIL,
      to, // friend email
      subject,
      text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info.response)
    return createResponse(true, {
      response: info.response,
      message: "Email sent successfully"
    })

  } catch (error) {
    console.log(error)
    return createResponse(false, error.message)
  }
}

module.exports = sendMessageToEmail
