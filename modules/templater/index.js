/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:35:16
* @Last Modified 2016-02-04
*/

'use strict';

export default (app) => {
  app.get('templater').whatInTheWorld(1)
  app.get('xemplater').whyNot(1)
  app.get('templater').replace('template','page', 'ejs', __dirname+"/views/page.ejs")
  app.get('router').route('GET', '/', (req, res) => {
    let content = "Hello world!"
    app.get('templater').render('page', {title: "Home Page", content, opts: app.config}).then(res.send.bind(res));
  })
}
