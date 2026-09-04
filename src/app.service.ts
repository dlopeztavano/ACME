import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tavano Team 1234!';
  }

  getGreeting(): string {
    return 'Hello World!';
  }
}
