import { EmailService } from '@czarpoliedros/email';
import { Injectable } from '@nestjs/common';

interface ISendnessService {
  sendEmail(to: string, body: string): Promise<boolean>;
}

@Injectable()
export default class SendnessService implements ISendnessService {
  constructor(private readonly emailService: EmailService) {}

  async sendEmail(to: string, body: string): Promise<boolean> {
    const description = `
      <p>Here's your message:</p>
      <p>${body}</p>
    `;

    // log

    await this.emailService.sendMail(
      'contactsite@czar.dev',
      to,
      `Czar Robot has sent you a message`,
      description,
      `<div>${description}</div>`,
    );

    return true;
  }
}
