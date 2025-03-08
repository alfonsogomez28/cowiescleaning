const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const templateParams = {
    name,
    email,
    phone,
    message
  };

  emailjs.send('service_5oeatqt', 'template_3cfj8ei', templateParams, 'soaxVtit9s034ll3x')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      res.status(200).send('Email sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      res.status(500).send('Failed to send email.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});