import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Feedback } from '../entities/feedback.entity';

@Injectable()
export class FeedbackService extends TypeOrmCrudService<Feedback> {
  constructor(@InjectRepository(Feedback) feedbackRepository) {
    super(feedbackRepository);
  }
}


// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Feedback } from '../entities/feedback.entity';

// @Injectable()
// export class FeedbackService {
//   constructor(
//     @InjectRepository(Feedback)
//     private feedbackRepository: Repository<Feedback>,
//   ) {}

//   findAll(): Promise<Feedback[]> {
//     return this.feedbackRepository.find();
//   }

//   findOne(id: string): Promise<Feedback> {
//     return this.feedbackRepository.findOne(id);
//   }
//   create(feedback: Feedback): Promise<Feedback> {
//     delete feedback.id;
//     return this.feedbackRepository.save(feedback);
//   }
//   async update(feedback: Feedback): Promise<Feedback> {
//     return this.feedbackRepository.save(feedback);
//   }

//   async remove(id: string): Promise<void> {
//     await this.feedbackRepository.delete(id);
//   }