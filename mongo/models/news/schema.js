import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

export default {
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  html: String,
  json: String,
  title: String,
  appName: String,
  appCode: String,
  catLabel1: String,
  catLabel2: String,
  url: String,
  cover: String,
  content: String,
  showHtml: Boolean,
  tags: Array,
  photos: Array,
  user: { type: ObjectId, ref: 'User' },
  sourceData: Object,
};
