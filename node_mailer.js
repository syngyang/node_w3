const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'syngyang@gmail.com',
        pass: 'yangsyngwook'
    }
});

// multiple Receivers는 to:'polyframe@outlook.com, coworld@outlook.com, ... '
const mailOptions = {
    from: 'syngyang@gmail.com',
    to: 'polyframe@outlook.com',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy !',
    html: '<h1>Welcome</h1><p>That was easy</p>'
}
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response)
    }
});

// gmail에서 "보안수준이 낮은 앱 허용" 해야 됨.