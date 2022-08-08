import { EmailService } from '@czarpoliedros/email';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from './schemas/log.schema';

interface ISendnessService {
  sendEmail(to: string, body: string): Promise<boolean>;
}

type LogDto = {
  to: string;
  body: string;
  date: Date;
};

@Injectable()
export default class SendnessService implements ISendnessService {
  constructor(
    private readonly emailService: EmailService,
    @InjectModel(Log.name) private logModel: Model<LogDocument>,
  ) {}

  async sendEmail(to: string, raw_body: string): Promise<boolean> {
    const body = `
      <p>Here's your message:</p>
      <p>${raw_body}</p>
    `;

    const dto: LogDto = {
      to,
      body: raw_body,
      date: new Date(),
    };

    const log = new this.logModel(dto);
    await log.save();

    await this.emailService.sendMail(
      'contactsite@czar.dev',
      to,
      `Czar Robot has sent you a message`,
      body,
      `<div>${body}</div>`,
    );

    return true;
  }
}
