import {BaseModel} from '@nxus/storage'

module.exports = BaseModel.extend({
  identity: 'basic',
  attributes: {
    name: 'string'
  }
})
