const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.port || 5000;

//middleware
app.use(express.json());
app.use(cors());

//nodemailer transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

//verify transporter
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

//post route for mailOptions
app.post("/send", function (req, res) {
  const mailOptions = {
    from: `${req.body.data.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.data.name}`,
    text: `${req.body.data.message}`,
  };
  //send mailOptions via the transporter sendMail()
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      //send back json to React
      res.json({
          status: "fail"
      })
    } else {
      console.log("== Message Sent ==");
      res.json({ status: "success" });
    }
  });
});

//server is up and running
app.listen(port, () => console.log(`Listening to port ${port}`));
