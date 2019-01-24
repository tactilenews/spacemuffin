import sendgrid from '@sendgrid/mail'
sendgrid.setApiKey(process.env.SENDGRID_KEY)

export default email => {
  return sendgrid.send(email)
}
