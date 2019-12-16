'use strict';

module.exports = app => {
  if (app.config.raven.url) require('./lib/raven')(app);
};
