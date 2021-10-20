import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackController } from './controllers/feedback.controller';
import { Feedback } from './entities/feedback.entity';
import { FeedbackService } from './services/feedback.service';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
