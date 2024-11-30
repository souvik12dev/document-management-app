import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  // console.log(configService.get('DB_HOST'));


  await app.listen(3000);
}
bootstrap();
