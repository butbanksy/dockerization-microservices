import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Token } from '../token.decorator';
import { User } from '../user.decorator';
import { IUser } from '../IUser';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @User() user:IUser) {
    return this.tasksService.create(createTaskDto,user);
  }

  @Get()
  async findAll(@User() user:IUser) {
    return await this.tasksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string,@User() user:IUser) {
    return this.tasksService.findOne(+id,user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto,@User() user:IUser) {
    return this.tasksService.update(+id, updateTaskDto,user);
  }

  @Delete(':id')
  remove(@Param('id') id: string,@User() user:IUser) {
    return this.tasksService.remove(+id,user);
  }
}
