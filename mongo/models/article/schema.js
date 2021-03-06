import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

export default {
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user: { type: ObjectId, ref: 'User' },
  html: String,
  json: String,
  title: String,
  cover: String,
  description: String,
  tags: Array,
};
