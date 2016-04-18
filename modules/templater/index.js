/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:35:16
* @Last Modified 2016-04-18
*/

'use strict';

export default (app) => {
  app.get('templater').template(__dirname+"/views/page.ejs")
  app.get('templater').template(__dirname+"/views/inner.ejs")
  app.get('templater').template(__dirname+"/views/render-in.ejs", "page")
  app.get('router').route('GET', '/templater/render-in', (req, res) => {
    app.get('templater').render('render-in', {title: "Templater Page", opts: app.config}).then(res.send.bind(res));
  })
}
