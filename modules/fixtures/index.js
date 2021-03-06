/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:35:16
* @Last Modified 2016-04-18
*/

'use strict';

import Basic from './model'

export default (app) => {
  app.get('storage').model(Basic)
  
  app.get('router').route('/fixtures/name', (req, res) => {
    app.get('storage').getModel('basic').then((model) => {
      model.find({}).then((insts) => {
        let content = insts[0].name
        app.get('templater').render('page', {title: "Name Page", content, opts: app.config}).then(res.send.bind(res));
      })
    })
  })
}
