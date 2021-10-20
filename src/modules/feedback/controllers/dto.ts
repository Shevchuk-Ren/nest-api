export class CreateDto {
  name: string;
  mail: string;
  message: string;
  isCompleted?: boolean;
}

export class UpdateDto {
  name: string;
  mail: string;
  message: string;
  isCompleted?: boolean;
}
