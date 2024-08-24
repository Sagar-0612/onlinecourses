import emailjs from 'emailjs-com';
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config';

export const sendEmail = (email) => {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { email }, EMAILJS_USER_ID)
    .then(response => {
      console.log('Email sent successfully!', response.status, response.text);
      return true;
    })
    .catch(error => {
      console.error('Failed to send email:', error);
      return false;
    });
};
