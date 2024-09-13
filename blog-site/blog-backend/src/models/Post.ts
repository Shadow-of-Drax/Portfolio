import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  author: string;
  content: string;
  date: Date;
}

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  date: Date;
  comments: IComment[];
}

const CommentSchema: Schema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  date:    { type: Date, default: Date.now },
});

const PostSchema: Schema = new Schema({
  title:    { type: String, required: true },
  content:  { type: String, required: true },
  author:   { type: String, required: true },
  date:     { type: Date, default: Date.now },
  comments: [CommentSchema],
});

export default mongoose.model<IPost>('Post', PostSchema);