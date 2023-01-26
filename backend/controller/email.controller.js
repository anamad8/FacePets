const nodemailer = require("nodemailer");
const EmailSender = async (req, res) => {
   
   const {email}= req.params
   var Text = `http://localhost:3000/newPassword/${email}`
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
      from: '"Facepets 👻" <facePets@gmail.com>',
      to: email, 
      subject: "Confirmacion de Correo Electronico", 
      html: `<h1>Debes Aplicar este link para poder restablecer tu contraseña <a href="${Text}">${Text}</a></h1>`, 
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  module.exports = {
   EmailSender
  };