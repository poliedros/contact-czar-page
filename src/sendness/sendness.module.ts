import { EmailModule } from '@czarpoliedros/email';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './schemas/log.schema';
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
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  controllers: [SendnessController],
})
export class SendnessModule {}
