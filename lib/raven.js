'use strict';
const raven = require('raven');
/**
 * @param {Egg.Application} app egg application
 */
module.exports = app => {
  const { url } = app.config.raven;
  raven.config(url, { autoBreadcrumbs: true }).install();
  app.raven = raven;
}
;