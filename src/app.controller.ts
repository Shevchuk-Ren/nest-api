import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Feedback } from './modules/feedback/entities/feedback.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
