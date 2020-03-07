interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

interface MessageDto {
  to: IMailTo
  message: IMailMessage
}

class EmailService {
  sendMail({ to, message }: MessageDto) {
    console.log(`Email sent ${to.name}: ${message.subject}`)
  }
}
export default EmailService
