/* 
* @Author: Mike Reich
* @Date:   2016-02-05 09:37:08
* @Last Modified 2016-02-05 @Last Modified time: 2016-02-05 09:37:08
*/

import chai from 'chai'
chai.should()

import {request} from '@nxus/tester'

describe("Model Fixture Page", () => {
  it('it returns 200', (done) => {
    request.get({url: '/fixtures/name'}, (err, res, body) => {
      res.statusCode.should.equal(200);
      body.should.contain("Charlie")
      done()
    })
  })
})
