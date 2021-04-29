const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");

const nodemailer = require('nodemailer');
const { callbackPromise } = require("nodemailer/lib/shared");
const hbs = require('nodemailer-express-handlebars');



const HALF_DAY = 1000 * 60 * 60 * 12;

const {
  PORT = 3000,
  NODE_ENV = "development",
  SESS_NAME = "sid",
  SESS_SECRET = "app",
  SESS_LIFETIME = HALF_DAY,
} = process.env;

const IN_PROD = NODE_ENV == "production";


const transporter = nodemailer.createTransport( {
  service: "hotmail",
  auth: {
    user: 'radenko2402@hotmail.com',
    pass: 'R4denko1987!"#'
  }
});

transporter.use('compile',hbs({
  viewEngine: 'express-handlebars',
  viewPath: '/views/'
}))

const options = {
  from: 'radenko2402@hotmail.com',
  to: 'radenko.jankovic@gmail.com',
  subject: 'test',
  text: 'Iz moje app',
  template: 'index'
  
};

transporter.sendMail(options, function (err,info){
  if(err){
    console.log(err);
    return;
  }
  console.log('Mesage sent: %s', info.messageId);
  
})





app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));



app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD,
    },
  })
);

//email






app.set("view engine", "ejs");

app.use("/", routes);

app.listen(80
  , function () {
  console.log("Listening on port 80");
});
