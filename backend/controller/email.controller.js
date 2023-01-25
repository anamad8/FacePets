const nodemailer = require("nodemailer");
const EmailSender = async (req, res) => {
   
    email: req.params.email
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false, 
      auth: {
        user: 'rn.kubin@gmail.com', 
        pass: '0vXradGhfMZzcIVJ', 
      },
    });
  
    
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: email, 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  module.exports = {
   EmailSender
  };