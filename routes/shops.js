import Joi from 'joi';
import models from '../models/index.js';
const GROUP_NAME = 'shops';

export default [
  {
    method: "GET",
    path: `/${GROUP_NAME}`,
    async handler(request, h) {
      const result = await models.shops.findAll();
      return h.response(result);
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
    }
  },
  {
    method: "GET",
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler(request, h) {
      return h.response('获取店铺的商品列表');
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
      validate: {
        params: Joi.object({
          shopId: Joi.number().required().description('通过shopId获取商铺下的商品列表').error(new Error('错误的shopId'))
        })
      }
    }
  }
]