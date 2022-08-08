import { Module } from '@nestjs/common';
import { PageEmailModule } from './page-email/page-email.module';
import { SendnessModule } from './sendness/sendness.module';

@Module({
  imports: [PageEmailModule, SendnessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
