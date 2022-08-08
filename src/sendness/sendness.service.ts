import { EmailService } from '@czarpoliedros/email';
import { Injectable } from '@nestjs/common';

interface ISendnessService {
  sendEmail(from: string, to: string, body: string): Promise<boolean>;
}

@Injectable()
export default class SendnessService implements ISendnessService {
  constructor(private readonly emailService: EmailService) {}

  async sendEmail(from: string, to: string, body: string): Promise<boolean> {
    const description = `
      <p>Here's your message:</p>
      <p>${body}</p>
    `;

    // log

    await this.emailService.sendMail(
      'contactsite@czar.dev',
      process.env.TO_EMAIL,
      `Czar Robot send you a message`,
      description,
      `<div>${description}</div>`,
    );

    return true;
  }
}
