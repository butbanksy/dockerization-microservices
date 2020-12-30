import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  title:string

  @IsString()
  desc:string

  @IsBoolean()
  done:boolean
}
