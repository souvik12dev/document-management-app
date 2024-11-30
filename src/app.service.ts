import { Injectable } from '@nestjs/common';

import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  getHello(): string {
    return "hello world";
  }
}
