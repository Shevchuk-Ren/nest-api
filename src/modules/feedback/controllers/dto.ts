import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty({ description: 'Enter your name', minimum: 2 })
  name: string;
  @ApiProperty({ description: 'Enter your mail' })
  mail: string;
  @ApiProperty({ description: 'Enter your message' })
  message: string;
  @ApiProperty({ required: false })
  isCompleted?: boolean;
}

export class UpdateDto {
  @ApiProperty({ description: 'Change your name' })
  name: string;
  @ApiProperty({ description: 'Change your mail' })
  mail: string;
  @ApiProperty({ description: 'Change your message' })
  message: string;
  @ApiProperty({ required: false })
  isCompleted?: boolean;
}
