import { Injectable } from '@nestjs/common';
import { EmailService } from '@czarpoliedros/email';

@Injectable()
export class PageEmailService {
  constructor(private readonly emailService: EmailService) {}

  async sendEmail(name: string, body: string, email: string) {
    const description = `
      <h1>Consumer Name: ${name}</h1>
      <h1>Consumer Email: ${email}</h1>
      <h2>Message:</h2>
      <h3>${body}</h3>
    `;

    await this.emailService.sendMail(
      'contactsite@czar.dev',
      'carlos@czar.dev',
      `A new contact from ${name}`,
      description,
      `<div>${description}</div>`,
    );
  }
}
