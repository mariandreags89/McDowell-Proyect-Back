const { response } = require('express');
const nodemailer = require('nodemailer');



const postEmailOrder = async (req, res) => {
    const id = req.params.id;
    const email = req.params.email;
    // Notificación de formulario - cliente.
    let notificaciones = [
        {
            subject: "Te enviamos tu ticket",
            titulo : `Ticket de compra numero: ${id}`,
            notificacion: "Gracias por su compra en McDowell."
        }
    ]

     // Plantilla de correo
    contentHTML = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
            h1{ font-size: 30px !important;}
            h2{ font-size: 25px !important;}
            h3{ font-size: 18px !important;}
            h4{ font-size: 16px !important;}
            p, a{font-size: 15px !important;}
            .afooter{
                color: #ffffff !important; 
                text-decoration: none;
                font-size: 13px !important;
            }
        </style>
    </head>
    <body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px;">
                <!-- Imagen inicial -->
                <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                    <img src="cid:McDowell" alt="" style="width: 200px; height: 60px;">
                </div>
    
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                    <h1>${notificaciones[0].titulo}</h1>
                    <p>${notificaciones[0].notificacion}</p>
    
                    <!-- Gracias -->
                    <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo McDowell</p>

                </div>
            
                <!-- Footer -->
                <div style="background-color: #282828; color: #ffffff; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <h4>Soporte</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Comunícate con nosotros por los siguientes medios:<br>
                            Correo: <a class="afooter" href="mailto:mcdowellproyecto@gmail.com">mcdowellproyecto@gmail.com</a><br>
                        </p>
                        <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                            © 2023 McDowell, todos los derechos reservados.
                        </p>
                </div>  
    
            </div>
        </div>
    </body>
    </html>`;
       
    // Configurar el correo electrónico
    


    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL,
        }
    });


    let info = await transport.sendMail({
        from: '"McDowell Proyecto" <mcdowellproyecto@gmail.com>', // sender address,
        to: `${email}`,
        subject: `Envio ticket numero: ${id}`,
        // text: 'Hello World'
        html: contentHTML,
        attachments: [
            {
                filename: `ticket_${id}.pdf`,
                path: `./public/pdf/ticket_${id}.pdf`,
                cid: 'ticket' 
            },
            {
                filename: 'McDowell.png',
                path: './public/images/McDowell.png',
                cid: 'McDowell' //same cid value as in the html img src
                }
            ]
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.redirect('Correo Enviado');
};



module.exports = { postEmailOrder };