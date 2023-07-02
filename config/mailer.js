const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host', // Replace with your SMTP server hostname
  port: 587, // Replace with your SMTP server port
  secure: false, // Set to true if your SMTP server requires a secure connection
  auth: {
    user: 'your-smtp-username', // Replace with your SMTP username
    pass: 'your-smtp-password', // Replace with your SMTP password
  },
});

// Define the email content
const mailOptions = {
  from: 'your-email@example.com', // Replace with your sender email address
  to: 'recipient@example.com', // Replace with the recipient's email address
  subject: 'Test Email', // Email subject
  text: 'This is a test email sent using nodemailer.', // Email plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

module.exports = transporter;