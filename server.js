const path = require('path');
const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
// nodemailer requirements
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
// const hbs = exhbs.create();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exhbs.create({ helpers });



const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



app.engine("handlebars",hbs.engine);
app.set("view engine", "handlebars")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  // Nodemailer Functionality
  const mailOptions = {
    from: 'lyctest1234@gmail.com', // Replace with your sender email address
    to: 'lyctest1234@gmail.com', // Replace with the recipient's email address
    subject: 'Test Email', // Email subject
    text: 'This is a test email sent using Mailgun and nodemailer.', // Email plain text body
  };
  
  const auth = {
        auth: {
      api_key: '75ae39a6a8cafec7922d8164ddc14a27-e5475b88-b3569bb4',
      domain: 'sandboxa64ceec7d9e94188b37493972d5e222a.mailgun.org',
    },
  }

  const transporter = nodemailer.createTransport(mailgunTransport(auth));

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info);
    }
  });

  
  