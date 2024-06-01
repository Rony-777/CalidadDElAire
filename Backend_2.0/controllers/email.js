const nodemailer = require('nodemailer');

function enviarEmail( password, email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rony893000@gmail.com',
            pass: 'kcjhfjkyspjdehvl'
        }
    });

    const mailOptions = {
        from: 'rony893000@gmail.com',
        to: email,
        subject: 'Cuenta creada correctamente',
        text: `Su cuante fue creada correctamente creada y sus datos son  correo: ${email} 
          y password: ${password}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
        }
    });

}

module.exports= enviarEmail;
