'use strict';
const raven = require('raven');
/**
 * @param {Egg.Application} app egg application
 */
module.exports = app => {
  const { url, options } = app.config.raven;
  raven.config(url, options).install();
  app.raven = raven;
}
;
