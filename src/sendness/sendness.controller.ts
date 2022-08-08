import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import SendnessService from './sendness.service';

type SendnessDto = {
  to: string;
  body: string;
};

@Controller('send')
export class SendnessController {
  constructor(private readonly sendnessService: SendnessService) {}

  @Post()
  async sendEmailToSomeoneElse(@Body() { to, body }: SendnessDto) {
    if (!to || !body) {
      throw new BadRequestException();
    }
    await this.sendnessService.sendEmail(to, body);

    return;
  }
}
