// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


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

app.get("*", (request, response) => {
  response.sendFile(__dirname + "/views/404.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});