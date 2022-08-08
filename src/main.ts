import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'localhost:3000, czar.dev',
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
