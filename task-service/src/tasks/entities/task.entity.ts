import * as mongoose from 'mongoose';

export interface ITask extends mongoose.Document {
  title: string;
  desc: string;
  done: boolean;
  user_id:number;
}
export const TaskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  done: Boolean,
  user_id:Number
});
