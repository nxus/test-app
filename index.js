/* 
* @Author: Mike Reich
* @Date:   2016-02-04 16:30:40
* @Last Modified 2016-02-04
*/

'use strict';

require('babel-register');

var App = require('@nxus/core').Application

var app = new App();

app.start()

module.exports = app;
