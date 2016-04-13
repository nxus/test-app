/* 
* @Author: Mike Reich
* @Date:   2016-02-05 09:37:08
* @Last Modified 2016-02-05 @Last Modified time: 2016-02-05 09:37:08
*/

import chai from 'chai'
chai.should()

import {request} from '@nxus/tester'

describe("Templater replace and render-in", () => {
  it('it returns 200', (done) => {
    request.get({url: '/templater/render-in'}, (err, res, body) => {
      res.statusCode.should.equal(200);
      body.should.contain("Custom template")
      body.should.contain("Inner Template")
      done()
    })
  })
})
