import { PageEmailService } from './page-email.service';
import { Body, Controller, Post } from '@nestjs/common';

type SendEmailDto = {
  name: string;
  email: string;
  description: string;
};

@Controller('email')
export class PageEmailController {
  constructor(private readonly pageEmailService: PageEmailService) {}

  @Post()
  async sendEmail(@Body() dto: SendEmailDto) {
    console.log(`sending email from ${dto.name} - ${dto.email}`);

    await this.pageEmailService.sendEmail(dto.name, dto.description, dto.email);

    console.log('email sent');

    return {
      ok: true,
    };
  }
}
