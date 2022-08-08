import { Module } from '@nestjs/common';
import { PageEmailController } from './page-email.controller';
import { EmailModule } from '@czarpoliedros/email';
import { PageEmailService } from './page-email.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PageEmailController],
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    }),
  ],
  providers: [PageEmailService],
})
export class PageEmailModule {}
