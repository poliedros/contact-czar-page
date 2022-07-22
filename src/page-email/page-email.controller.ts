import { PageEmailService } from './page-email.service';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

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

    if (!dto.name || !dto.email || !dto.description) {
      throw new BadRequestException();
    }

    await this.pageEmailService.sendEmail(dto.name, dto.description, dto.email);

    console.log('email sent');

    return {
      ok: true,
    };
  }
}
