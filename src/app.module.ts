import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './modules/feedback/feedback.module';

@Module({
  imports: [TypeOrmModule.forRoot(), FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
