import { EmailModule } from '@czarpoliedros/email';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import SendnessService from './sendness.service';

@Module({
  providers: [SendnessService],
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    }),
  ],
})
export class SendnessModule {}
