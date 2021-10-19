import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Feedback } from '../entities/feedback.entity';
import { FeedbackService } from '../services/feedback.service';
import { CreateDto } from './dto';


@Controller('rest')
export class FeedbackController {

  constructor(private readonly feedbackService: FeedbackService) {

  }


  @Get()
  getAction(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
    }
     @Get(':id')
  getOneAction(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.findOne(id);
  }

    @Post()
    postOneAction(@Body() feedback: CreateDto): CreateDto {
      console.log(feedback);
    return feedback;
  }

  @Delete()
   deleteOneAction(@Param('id') id: string): Promise<void> {
    return  this.feedbackService.remove(id);
  }
}