const API_KEY = 'e5475b88-b3569bb4';
const DOMAIN = 'sandboxa64ceec7d9e94188b37493972d5e222a.mailgun.org';

 import formData from 'form-data';
 import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const messageData = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'foo@example.com, bar@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

client.messages.create(DOMAIN, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 });