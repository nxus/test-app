/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:35:16
* @Last Modified 2016-02-04
*/

'use strict';

export default (app) => {
  app.get('router').route('GET', '/', (req, res) => {
    let content = "Hello world!"
    app.get('templater').render('page', {title: "Home Page", content, opts: app.config}).then(res.send.bind(res));
  })
}
