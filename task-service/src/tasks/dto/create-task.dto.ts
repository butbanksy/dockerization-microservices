import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title:string

  @IsString()
  desc:string

  @IsBoolean()
  done:boolean
}
