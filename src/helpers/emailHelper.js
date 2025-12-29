// const nodemailer = require('nodemailer');
require('dotenv').config();
// const transporter = nodemailer.createTransport({
//   host: 'smtp.hostinger.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'your-email@yourdomain.com',
//     pass: 'your-email-password'
//   }
// });

/**
 * Send an email using Hostinger SMTP
 * @param {string} to - Recipient's email address
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content (optional)
 * @param {string} html - HTML content (optional)
 * @returns {Promise<string>} - Email response message
 */
const fetch = require('node-fetch');
const axios = require('axios');
const sendEmail = async (to, subject, html) => {
  try {
    const data = {
      personalizations: [
        {
          to: [{ email: to }],
          subject: subject,
        },
      ],
      from: {
        email: 'no-reply@nutrillion.one',
        name: 'Nutrillion',
      },
      content: [
        // {
        //   type: 'text/plain',
        //   value: text,
        // },
        {
          type: 'text/html',
          value: html,
        },
      ],
    };

    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', data, {
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`Email sent to ${to}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};






// const sendEmail = async (to, subject, text = '', html = '') => {
//   try {
//     const mailOptions = {
//       from: 'your-email@yourdomain.com',
//       to,
//       subject,
//       text,
//       html // HTML version of the email
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(`Email sent to ${to}:`, info.response);
//     return info.response;
//   } catch (error) {
//     console.error(`Error sending email to ${to}:`, error);
//     throw error;
//   }
// };

const generateEmailContentAccount = (name, email, password) => {
  return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Account Created Successfully</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          h2 {
              color: #333333;
          }
          p {
              color: #555555;
              font-size: 16px;
          }
          .button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 24px;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              font-size: 16px;
              border-radius: 5px;
          }
          .footer {
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
          }
      </style>
    </head>
    <body>

    <div class="container">
      <h2>Account Created Successfully 🎉</h2>
      <p>Dear <strong>${name ?? 'User'}</strong>,</p>
      <p>Your account has been created successfully!</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password ?? '12345678'}</p>
      <p>For security reasons, please change your password after logging in.</p>
      <a href="web.nutrillion.one/login" class="button">Login Now</a>
      <p class="footer">If you didn’t create this account, please contact our support team immediately.</p>
      <p class="footer">Best regards,<br><strong>Nutrillion</strong></p>
    </div>
    </body>
    </html>
    `
}

const forgetPasswordEmailContent=(resetLink)=>{
  return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Reset Your Password</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          h2 {
              color: #333333;
          }
          p {
              color: #555555;
              font-size: 16px;
          }
          .button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 24px;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              font-size: 16px;
              border-radius: 5px;
          }
          .footer {
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
          }
      </style>
  </head>
  <body>
  
  <div class="container">
      <h2>Password Reset Request 🔐</h2>
      <p>You requested to reset your password. Click the button below to reset it:</p>
      <a href="${resetLink}" class="button">Reset Password</a>
      <p>If you did not request this, you can ignore this email.</p>
      <p class="footer">Best regards,<br><strong>Nutrillion</strong></p>
  </div>
  
  </body>
  </html>`;
}

const generateOrderEmailContent=(appointmentDetails)=>{
  return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Appointment Confirmation</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          .header {
              font-size: 24px;
              font-weight: bold;
              color: #333;
          }
          .content {
              font-size: 16px;
              color: #555;
              margin-top: 10px;
          }
          .footer {
              margin-top: 20px;
              font-size: 14px;
              color: #777;
          }
          .button {
              display: inline-block;
              background-color: #28a745;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          
          <p class="content">Hi ${appointmentDetails.name},</p>
          <p class="content">Great news! Your appointment is all set for <strong>${appointmentDetails.appointment_date}</strong> at <strong>${appointmentDetails.appointment_time}</strong> via <strong>${appointmentDetails.mode_consultation}</strong>. We can’t wait to connect with you and provide our top-notch service.</p>
          <p class="content">If you have any questions or need to make changes, just give us a shout at <strong>+91 9557439399</strong>.</p>
          <p class="content">We appreciate you choosing us and look forward to your <strong>${appointmentDetails.mode_consultation}</strong> on <strong>${appointmentDetails.appointment_date}</strong>. It’s going to be a fantastic day!</p>
          <a href="web.nutrillion.one/appointments" class="button">Manage Appointment</a>
          <p class="footer">Warm regards,<br><strong>Nutrillion</strong></p>
      </div>
  </body>
  </html>
  `;
}


module.exports = { sendEmail, generateEmailContentAccount,forgetPasswordEmailContent,generateOrderEmailContent };
