const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var smtpTransport = require('nodemailer-smtp-transport');

app.set('port', 5000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var smtpTransport = nodemailer.createTransport(
  smtpTransport({
    service: 'rambler',
    auth: {
      user: 'denis-keller@rambler.ru',
      pass: '',
    },
  })
);

app.post('/contacts', function (req, res) {
  console.log('res: ', res);
  console.log('req: ', req);
  var mailOptions = {
    from: '"Denis" <denis-keller@rambler.ru>', // sender address
    to: 'denis-keller@rambler.ru', // list of receivers
    subject: 'Request ', // Subject line
    text: req.body.to, // plaintext body
  };
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

  res.redirect('/');
});
