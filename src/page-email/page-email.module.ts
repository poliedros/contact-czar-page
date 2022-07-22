import { Module } from '@nestjs/common';
import { PageEmailController } from './page-email.controller';
import { EmailModule } from '@czarpoliedros/email';
import { PageEmailService } from './page-email.service';

@Module({
  controllers: [PageEmailController],
  imports: [
    EmailModule.forRoot({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    }),
  ],
  providers: [PageEmailService],
})
export class PageEmailModule {}
