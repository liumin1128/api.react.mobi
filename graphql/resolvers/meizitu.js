import { getUrl, getList, getPictures } from '../../server/crawler/meizitu';

export default {
  Query: {
    meizituList: async (root, args) => {
      const url = await getUrl({});
      const list = await getList(url);
      return list;
    },
    meizituPictures: async (root, args) => {
      const { url } = args;
      const data = await getPictures(url);
      return data;
    },
  },
};