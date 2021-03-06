import DataLoader from 'dataloader';
import { parse } from 'query-string';
import Like from './index';

// 根据like，拿到关注次数
export const likeCountLoader = new DataLoader(ids => Promise.all(ids.map(id => Like.countDocuments({ id, status: 1 }))));

// 根据likeTo和user，拿到点赞状态
export const likeStatusLoader = new DataLoader(list => Promise.all(list.map(i => Like.findOne(parse(i)))).then(data => data.map(i => !!i)));

// 根据likeTo和user，拿到点赞状态
export const likeOrDislikeStatusLoader = new DataLoader(list => Promise.all(list.map(i => Like.findOne(parse(i)))).then(data => data.map((i) => {
  if (!i) return 0;
  return i.status;
})));
