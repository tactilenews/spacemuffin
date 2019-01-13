import speakerNotificationEmail from '../../emails/orderSpeakerNotification.js'
import userConfirmationEmail from '../../emails/orderUserConfirmation.js'
import sendMail from '../../lib/sendMail.js'

export default (req, res) => {
  const userEmail = userConfirmationEmail(req.body)
  const speakerEmail = speakerNotificationEmail(req.body)

  // At the moment, this doesn’t handle errors
  sendMail(userEmail)
  sendMail(speakerEmail)

  const response = {
    status: 'success',
    message: 'Your order has been processed.'
  }

  res.end(JSON.stringify(response))
}
