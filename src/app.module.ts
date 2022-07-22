import { Module } from '@nestjs/common';
import { PageEmailModule } from './page-email/page-email.module';

@Module({
  imports: [PageEmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
