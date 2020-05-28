interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

// Data Transfer Object  - DDD
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailServices {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailServices {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviando para: ${to.name}: ${message.subject}`);
  }
}

export default EmailService;