import { Body, Controller, Delete, Get, Param, Post, Put, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { Feedback } from '../entities/feedback.entity';
import { FeedbackService } from '../services/feedback.service';
import { CreateDto, UpdateDto } from './dto';


@Controller('rest')
export class FeedbackController {

  constructor(private readonly feedbackService: FeedbackService) {

  }


  @Get()
  getAction(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
    }
     @Get(':id')
     async getOneAction(@Param('id') id: string): Promise<Feedback> {


       const feedback =await this.feedbackService.findOne(id);
     
       if (feedback === undefined) {
           throw new HttpException(`Not found id = ${id}`, HttpStatus.NOT_FOUND);
       }
       return feedback;
  }

    @Post()
    postOneAction(@Body() createDto: CreateDto): Promise<Feedback> {
      const feedback = new Feedback();
      console.log(Feedback, `create`)
      feedback.name = createDto.name;
      feedback.mail = createDto.mail;
      feedback.message = createDto.message;
            console.log(feedback, `create feedback`)

      return this.feedbackService.create(feedback);
  }

  @Put(':id')

     async updateAction(
        @Param('id') id: string,
        @Body() {name, mail, message}: UpdateDto): Promise<Feedback> {
        const newFeedback = await this.feedbackService.findOne(id);
  if (newFeedback === undefined) {
        throw new BadRequestException(`Not found id = ${id}`);
    }
        
      console.log(newFeedback, `update`)
      newFeedback.name = name;
      newFeedback.mail = mail;
         newFeedback.message = message;
      return this.feedbackService.update(newFeedback);
  }

  @Delete(':id')
   deleteAction(@Param('id') id: number): Promise<void> {
    return this.feedbackService.remove(id);
  }
}