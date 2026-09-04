import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greeting')
  getGreeting(): string {
    return this.appService.getGreeting();
  }

  @Get('add')
  add(@Query('a') a: number, @Query('b') b: number): number {
    return this.appService.add(Number(a), Number(b));
  }
}
