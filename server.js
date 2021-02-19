// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.static("pwaicons"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/admin", (request, response) => {
  response.sendFile(__dirname + "/views/admin.html");
});


app.get("/codeofconduct", (request, response) => {
  response.sendFile(__dirname + "/CODE-OF-CONDUCT.md");
});

app.get("/license", (request, response) => {
  response.sendFile(__dirname + "/LICENSE.md");
});

app.get("/sw.js", (request, response) => {
  response.sendFile(__dirname + "/sw.js");
});

app.get("/manifest.json", (request, response) => {
  response.sendFile(__dirname + "/manifest.json");
});

app.get("/pwaicons/manifest-icon-192.png", (request, response) => {
  response.sendFile(__dirname + "/pwaicons/manifest-icon-192.png");
});
app.get("/pwaicons/apple-icon-180.png", (request, response) => {
  response.sendFile(__dirname + "/pwaicons/apple-icon-180.png");
});
app.get("/pwaicons/manifest-icon-512.png", (request, response) => {
  response.sendFile(__dirname + "/pwaicons/manifest-icon-512.png");
});

app.get("*", (request, response) => {
  response.sendFile(__dirname + "/views/404.html");
});

// POST route from contact form
app.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 465,
    secure: true,
    auth: {
      user: 'liam.murray123@icloud.com',
      pass: 'Daisy1868'
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: 'outlook_390775E203B45137@outlook.com',
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);// Show a page indicating failure
    }
    else {
      console.log(response); // Show a page indicating success
    }
  })
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});