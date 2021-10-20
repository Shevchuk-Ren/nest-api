import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Feedback } from '../entities/feedback.entity';
import { FeedbackService } from '../services/feedback.service';
import { CreateDto, UpdateDto } from './dto';
import { NotFoundResponse } from './type';

@ApiTags('Users Feedback')
@Controller('rest')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
   @ApiResponse({ status: 200, description: 'OK' })
   @ApiResponse({ status: 404, description: 'Not found', type: NotFoundResponse })
  getAction(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }
  @Get(':id')
   @ApiResponse({ status: 200, description: 'OK' })
   @ApiResponse({ status: 404, description: 'Not found', type: NotFoundResponse })
  async getOneAction(@Param('id') id: string): Promise<Feedback> {
    const feedback = await this.feedbackService.findOne(id);

    if (feedback === undefined) {
      throw new HttpException(`Not found id = ${id}`, HttpStatus.NOT_FOUND);
    }
    return feedback;
  }

  @Post()
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Not found', type: NotFoundResponse })
  @ApiBody({ type: CreateDto })
  postOneAction(@Body() createDto: CreateDto): Promise<Feedback> {
    const feedback = new Feedback();
    console.log(Feedback, `create`);
    feedback.name = createDto.name;
    feedback.mail = createDto.mail;
    feedback.message = createDto.message;
    console.log(feedback, `create feedback`);

    return this.feedbackService.create(feedback);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Not found', type: NotFoundResponse })
  @ApiBody({ type: UpdateDto })
  async updateAction(
    @Param('id') id: string,
    @Body() { name, mail, message }: UpdateDto,
  ): Promise<Feedback> {
    const newFeedback = await this.feedbackService.findOne(id);
    if (newFeedback === undefined) {
      throw new BadRequestException(`Not found id = ${id}`);
    }

    console.log(newFeedback, `update`);
    newFeedback.name = name;
    newFeedback.mail = mail;
    newFeedback.message = message;
    return this.feedbackService.update(newFeedback);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Not found', type: NotFoundResponse })
  async deleteAction(@Param('id') id: string): Promise<void> {
    const newFeedback = await this.feedbackService.findOne(id);
    if (newFeedback === undefined) {
      throw new BadRequestException(`Not found id = ${id}`);
    }
    return this.feedbackService.remove(id);
  }
}
