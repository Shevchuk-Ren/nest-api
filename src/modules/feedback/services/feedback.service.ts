import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from '../entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  findOne(id: string): Promise<Feedback> {
    return this.feedbackRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.feedbackRepository.delete(id);
  }
}