import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './entities/task.entity';
import { IUser } from '../IUser';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks') private readonly tasksModel: Model<ITask>) {
  }

  async create(createTaskDto: CreateTaskDto, user: IUser) {
    return this.tasksModel.create({
      title: createTaskDto.title,
      desc: createTaskDto.desc,
      done: createTaskDto.done,
      user_id: user.id,
    });
  }

  async findAll(user: IUser) {
    return await this.tasksModel.find({ user_id: user.id }).sort({ id: -1 });
  }

  async findOne(id: number, user: IUser) {
    return await this.tasksModel.findOne({ user_id: user.id, id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, user: IUser) {
    return await this.tasksModel.updateOne({
      user_id: user.id,
      id,
    }, updateTaskDto);
  }

  async remove(id: number, user:IUser) {
    return await this.tasksModel.deleteOne({
      user_id: user.id,
      id,
    });
  }
}
