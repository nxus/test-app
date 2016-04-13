/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:35:16
* @Last Modified 2016-02-04
*/

'use strict';

export default (app) => {
  app.get('templater').replace('template','page', 'ejs', __dirname+"/views/page.ejs")
  app.get('templater').templateFile(__dirname+"/views/inner.ejs")
  app.get('templater').templateFile(__dirname+"/views/render-in.ejs")
  app.get('router').route('GET', '/templater/render-in', (req, res) => {
    app.get('templater').render('render-in', 'page', {title: "Templater Page", opts: app.config}).then(res.send.bind(res));
  })
}
