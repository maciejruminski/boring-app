export default {
  port: process.env.PORT || 5000,
  googleApiKey: process.env.GOOGLE_API_KEY,
  nodemailerHost: process.env.NODEMAILER_HOST,
  nodemailerPort: process.env.NODEMAILER_PORT,
  nodemailerService: process.env.NODEMAILER_SERVICE,
  nodemailerAuthUser: process.env.NODEMAILER_AUTH_USER,
  nodemailerAuthPass: process.env.NODEMAILER_AUTH_PASS,
  spreadSheetsID: process.env.SPREADSHEETS_ID,
  serviceAccountEmail: process.env.SERVICEACCOUNT_EMAIL,
  serviceAccountPrivateKey: process.env.SERVICEACCOUNT_PRIVATE_KEY,
};
