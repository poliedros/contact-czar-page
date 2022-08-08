import { EmailModule } from '@czarpoliedros/email';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendnessController } from './sendness.controller';
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
  controllers: [SendnessController],
})
export class SendnessModule {}
