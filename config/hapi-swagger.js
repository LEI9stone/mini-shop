import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import fs from 'node:fs';
// 读取 package.json的内容

const Pack = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

export default [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: Pack.version,
      }
    }
  }
]